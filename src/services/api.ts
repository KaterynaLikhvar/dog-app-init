// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.thedogapi.com/v1',
  prepareHeaders: headers => {
    headers.set(
      'x-api-key',
      'live_UHp3xBYsAWIqvyolhsyuAo6QCo0zcZ4jlyKFDtLZK7f6KXB2BgbIjo7cVQCzgKGG'
    );

    return headers;
  }
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Breeds', 'Favorites', 'Images', 'ImagesId', 'BreedById', 'Votes'],
  endpoints: () => ({})
});
