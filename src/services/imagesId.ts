import { api } from './api';

export interface Image {
  id: string;
  url: string;
  width: number;
  height: number;
  mime_type: string;
  breeds: [
    {
      id: number;
      name: string;
    }
  ];
  categories: [];
  breed_ids: string;
}

type ImagesIdResponse = Image[];

export const imagesIdApi = api.injectEndpoints({
  endpoints: build => ({
    getImagesId: build.query<ImagesIdResponse, { id?: string; limit?: number }>(
      {
        query: ({ id = 'Syszjx9Em' }) => ({
          url: `images/${id}`
        }),
        providesTags: result => {
          if (Array.isArray(result) && result.length > 0 && result[0].id) {
            return result.map(({ id }) => ({ type: 'ImagesId', id }) as const);
          }
          return [{ type: 'ImagesId', id: 'LIST' }];
        }
      }
    )
  })
});

export const { useGetImagesIdQuery } = imagesIdApi;

export const {
  endpoints: { getImagesId }
} = imagesIdApi;
