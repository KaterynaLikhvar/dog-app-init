import { api } from './api';

export interface Votes {
  image_id: string;
  sub_id?: string;
}

type PostsResponse = {
  id: number;
  image_id: string;
  sub_id: string;
  created_at: string;
  value: number;
  country_code: string;
  image: {
    id: string;
    url: string;
  };
}[];

export const votesApi = api.injectEndpoints({
  endpoints: build => ({
    addVotes: build.mutation<unknown, Votes>({
      query: body => ({
        url: `votes`,
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Votes', id: 'LIST' }]
    }),
    getVotes: build.query<PostsResponse, void>({
      query: () => ({ url: `votes` }),
      providesTags: result => [
        ...(result
          ? result.map(({ id }) => ({ type: 'Votes', id }) as const)
          : []),
        { type: 'Votes' as const, id: 'LIST' }
      ]
    })
  })
});

export const { useAddVotesMutation, useGetVotesQuery } = votesApi;
