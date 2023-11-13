import { api } from './api';

export interface Image {
  breeds: [
    {
      weight: {
        imperial: string;
        metric: string;
      };
      height: {
        imperial: string;
        metric: string;
      };
      id: 94;
      name: string;
      bred_for: string;
      breed_group: string;
      life_span: string;
      temperament: string;
      reference_image_id: string;
    }
  ];
  id: string;
  url: string;
  width: number;
  height: number;
}

type ImagesResponse = Image[];

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export const imagesApi = api.injectEndpoints({
  endpoints: build => ({
    getImages: build.query<ImagesResponse, { limit?: number; page?: number }>({
      query: ({ limit = 10, page = 0 }) => ({
        url: `images/search?limit=${limit}&page=${page}`
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Images', id }) as const),
        { type: 'Images' as const, id: 'LIST' }
      ]
    })
  })
});

export const { useGetImagesQuery } = imagesApi;

export const {
  endpoints: { getImages }
} = imagesApi;
