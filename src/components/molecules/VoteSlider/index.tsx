import { Box } from '@mui/material';
// import { useAddVotesMutation } from '../../../services/votes';
import { useGetImagesWithVotes } from '../../../utilities';

export const VoteSlider = () => {
  const { data: votedImages, isLoading } = useGetImagesWithVotes({
    limit: 10,
    page: 0
  });
  // const [addVote] = useAddVotesMutation();

  // const handleBtnAddClick = (id: string) => {
  //   addVote({ image_id: id, sub_id: 'katya' });
  // };
  return (
    <Box>
      {isLoading && <div>Loading...</div>}
      {(votedImages || []).map(item => (
        <div>{item.breeds[0]?.name}</div>
        // <CardComponent borderRadius={0} variant={'primary'}>
        //   <Button>
        //     <HeartIcon isHovered={false} isFilled={false} />
        //     <LikeButton></LikeButton>
        //   </Button>
        // </CardComponent>
      ))}
    </Box>
  );
};
