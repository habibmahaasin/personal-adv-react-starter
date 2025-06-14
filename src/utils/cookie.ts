import LZString from 'lz-string';

export const createCookie = (
  key: string,
  value: unknown,
  durationInMinutes: number = 525600
): void => {
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + durationInMinutes * 60 * 1000
  );

  const compressedValue = LZString.compressToBase64(JSON.stringify(value));
  document.cookie = `${key}=${compressedValue};expires=${expirationDate.toUTCString()};path=/;secure`;
};

export const getCookie = <T = unknown>(key: string): T | null => {
  const cookies = document.cookie.split(';').map((cookie) => cookie.trim());

  for (const cookie of cookies) {
    const [cookieKey, encodedValue] = cookie.split('=');
    if (cookieKey === key) {
      try {
        const decryptedValue = LZString.decompressFromBase64(encodedValue);
        if (decryptedValue === null) return null;
        const decodedValue = JSON.parse(decryptedValue) as T;
        return decodedValue;
      } catch (error) {
        console.error('Error decoding cookie:', error);
        return null;
      }
    }
  }

  return null;
};

export const deleteCookie = (key: string): void => {
  document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};
