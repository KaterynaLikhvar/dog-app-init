import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { imagesApi } from '../images';
import { votesApi } from '../votes';

export interface GetImagesProps {
  getImagesProps: {
    limit: number;
    page: number;
  };
}

export const selectImagesWithVotes = ({ getImagesProps }: GetImagesProps) =>
  createSelector(
    (state: RootState) =>
      imagesApi.endpoints.getImages.select(getImagesProps)(state)?.data || [],
    (state: RootState) =>
      votesApi.endpoints.getVotes.select()(state)?.data || [],
    (images, votes) => {
      const voteIds = new Set(votes.map(vote => vote.image_id));
      return images.map(image => ({
        ...image,
        isVotes: voteIds.has(image.id)
      }));
    }
  );
