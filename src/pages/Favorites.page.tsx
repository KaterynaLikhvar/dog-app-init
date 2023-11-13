import { styled, Box } from '@mui/material';
import { useGetFavoritesQuery } from '../services/favorites';
import { CardComponent } from '../components/atoms/CardComponent';
import { PageWrapper } from '../components/molecules/PageWrapper';
import { HeartIcon } from '../components/atoms/HeartIcon';

const StyledFavorites = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: 20,
  gridTemplateRows: '412px',
  paddingTop: '46px',
  '& > .MuiBox-root': {
    height: '412px'
  }
});

export const FavoritesPage = () => {
  const { data: breeds, isLoading } = useGetFavoritesQuery();

  return (
    <PageWrapper>
      <StyledFavorites>
        {isLoading && <div>Loading...</div>}
        {(breeds || []).map(item => (
          <CardComponent variant="primary" key={item.id} borderRadius={0}>
            <img src={item.image.url} alt={item.image_id} />
            <Box
              sx={{ position: 'absolute', top: 24, right: 24, padding: '0' }}
            >
              <HeartIcon isFilled isHovered={false} />
            </Box>
          </CardComponent>
        ))}
      </StyledFavorites>
    </PageWrapper>
  );
};
