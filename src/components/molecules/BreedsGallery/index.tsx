import { styled, Box } from '@mui/material';
import { FC } from 'react';
import { useGetImagesWithFavorites } from '../../../utilities';
import { BreedItem } from '../BreedItem';
import { useAddFavoritesMutation } from '../../../services/favorites';

const StyledBreedsGallery = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 275px)',
  gridAutoRows: '196px',
  gridGap: '20px',
  margin: '0 auto',
  '& .MuiBox-root:first-of-type': {
    gridColumn: '1 / 3',
    gridRow: '1 / 3'
  },
  '& .MuiBox-root:nth-of-type(2)': {
    gridColumn: '3',
    gridRow: '1'
  },
  '& .MuiBox-root:nth-of-type(3)': {
    gridColumn: '4',
    gridRow: '1 / 3'
  },
  '& .MuiBox-root:nth-of-type(4)': {
    gridColumn: '1',
    gridRow: '3 / 5'
  },
  '& .MuiBox-root:nth-of-type(5)': {
    gridColumn: '2',
    gridRow: '3'
  },
  '& .MuiBox-root:nth-of-type(6)': {
    gridColumn: '3',
    gridRow: '2 / 4'
  },
  '& .MuiBox-root:nth-of-type(7)': {
    gridColumn: '4',
    gridRow: '3'
  },
  '& .MuiBox-root:nth-of-type(8)': {
    gridColumn: '2',
    gridRow: '4'
  },
  '& .MuiBox-root:nth-of-type(9)': {
    gridColumn: '3',
    gridRow: '4'
  },
  '& .MuiBox-root:nth-of-type(10)': {
    gridColumn: '4',
    gridRow: '4'
  }
});

type BreedsGalleryProps = {
  page: number;
};

export const BreedsGallery: FC<BreedsGalleryProps> = ({ page }) => {
  const { data: favoritedImages, isLoading } = useGetImagesWithFavorites({
    limit: 10,
    page
  });
  const [addFavorite] = useAddFavoritesMutation();

  return (
    <StyledBreedsGallery>
      {isLoading && <div>Loading...</div>}
      {(favoritedImages || []).map(item => (
        <BreedItem
          item={item}
          key={item.id}
          url={item.url}
          isFavorite={item.isFavorite}
          addFavorite={addFavorite}
        />
      ))}
    </StyledBreedsGallery>
  );
};
