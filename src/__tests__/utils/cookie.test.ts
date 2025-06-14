import { createCookie, deleteCookie, getCookie } from '@/utils/cookie';
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import LZString from 'lz-string';

declare global {
  interface Document {
    _cookie?: string;
  }
}

describe('Utils Cookie Unit Test', () => {
  beforeAll(() => {
    Object.defineProperty(document, 'cookie', {
      get() {
        return this._cookie ?? '';
      },
      set(value: string) {
        this._cookie = value;
      },
      configurable: true,
    });
  });

  beforeEach(() => {
    document._cookie = '';
  });

  it('should create a cookie with the correct parameters', () => {
    const key = 'user';
    const value = { name: 'Mahaasin', age: 30 };
    const durationInMinutes = 60;

    const compressSpy = vi
      .spyOn(LZString, 'compressToBase64')
      .mockReturnValue('compressedValue');

    createCookie(key, value, durationInMinutes);

    expect(document._cookie).toContain(`${key}=compressedValue`);
    expect(document._cookie).toContain('expires=');
    expect(document._cookie).toContain('path=/');
    expect(document._cookie).toContain('secure');

    expect(compressSpy).toHaveBeenCalledWith(JSON.stringify(value));
    compressSpy.mockRestore();
  });

  it('should get the cookie correctly and decompress it', () => {
    const key = 'user';
    const value = { name: 'Mahaasin', age: 30 };
    const compressedValue = LZString.compressToBase64(JSON.stringify(value));

    document._cookie = `${key}=${compressedValue};expires=Thu, 01 Jan 2025 00:00:00 UTC;path=/;secure`;

    const result = getCookie<typeof value>(key);
    expect(result).toEqual(value);
  });

  it('should handle JSON.parse throwing an error inside getCookie', () => {
    const key = 'user';
    const invalidJson = 'invalid-json';

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const decompressSpy = vi
      .spyOn(LZString, 'decompressFromBase64')
      .mockReturnValue(invalidJson);

    document._cookie = `${key}=brokenBase64;expires=Thu, 01 Jan 2025 00:00:00 UTC;path=/;secure`;

    const result = getCookie(key);
    expect(result).toBeNull();

    decompressSpy.mockRestore();
    errorSpy.mockRestore();
  });

  it('should return null if the cookie is not found', () => {
    const result = getCookie('nonexistent');
    expect(result).toBeNull();
  });

  it('should handle invalid cookie data gracefully', () => {
    const key = 'user';
    document._cookie = `${key}=invalidCookieData;expires=Thu, 01 Jan 2025 00:00:00 UTC;path=/;secure`;

    const result = getCookie(key);
    expect(result).toBeNull();
  });

  it('should delete the cookie', () => {
    const key = 'user';

    deleteCookie(key);

    expect(document._cookie).toContain(`${key}=;`);
    expect(document._cookie).toContain('expires=Thu, 01 Jan 1970');
  });
});
