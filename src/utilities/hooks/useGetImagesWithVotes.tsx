import { useGetImagesQuery } from '../../services/images';
import { selectImagesWithVotes } from '../../services/selectors';
import { useTypedSelector } from '../../services/store';
import { useGetVotesQuery } from '../../services/votes';

type GetImagesWithVotesProps = {
  limit?: number;
  page?: number;
};

export const useGetImagesWithVotes = ({ limit }: GetImagesWithVotesProps) => {
  const { isLoading: isLoadingImages } = useGetImagesQuery({
    limit
  });
  const { isLoading: isLoadingVotes } = useGetVotesQuery();
  const votedImages = useTypedSelector(
    selectImagesWithVotes({
      getImagesProps: { limit: 10, page: 0 }
    })
  );

  return {
    data: votedImages,
    isLoading: isLoadingImages || isLoadingVotes
  };
};
