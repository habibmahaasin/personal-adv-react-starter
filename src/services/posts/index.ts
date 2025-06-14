import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from './types';
import type { params } from '../types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], params | void>({
      query: (params) => ({
        url: '/posts',
        params: params ? params : undefined,
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
