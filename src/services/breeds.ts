import { api } from './api';

export interface Breed {
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
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
}

export interface BreedId {
  id: number;
  name: string;
  weight: string;
  height: string;
  life_span: string;
  bred_for: string;
  breed_group: string;
}

type BreedsResponse = Breed[];
type BreedIdResponse = BreedId[];

export const breedsApi = api.injectEndpoints({
  endpoints: build => ({
    getBreeds: build.query<BreedsResponse, { limit?: number; page?: number }>({
      query: ({ limit, page }) => ({
        url: `breeds?limit=${limit}&page=${page}`
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Breeds', id }) as const),
        { type: 'Breeds' as const, id: 'LIST' }
      ]
    }),
    getBreedById: build.query<BreedIdResponse, { id: number }>({
      query: ({ id = 2 }) => ({
        url: `breeds/${id}`
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'BreedById', id }) as const),
        { type: 'BreedById' as const, id: 'LIST' }
      ]
    })
  })
});

export const { useGetBreedsQuery } = breedsApi;

export const {
  endpoints: { getBreeds, getBreedById }
} = breedsApi;
