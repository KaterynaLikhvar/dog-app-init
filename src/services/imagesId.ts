import { api } from './api';

export interface Image {
  id: string;
  url: string;
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
      id: number;
      name: string;
      country_code: string;
      bred_for: string;
      breed_group: string;
      life_span: string;
      temperament: string;
      origin: string;
      reference_image_id: string;
    }
  ];
  width: number;
  height: number;
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
