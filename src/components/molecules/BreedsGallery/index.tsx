import { styled, Box } from '@mui/material';
import { FC, useState } from 'react';
import { CardComponent } from '../../atoms/CardComponent';
import { HeartIcon } from '../../atoms/HeartIcon';
import { useAddFavoritesMutation } from '../../../services/favorites';
import { useGetImagesWithFavorites } from '../../../utilities';

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
  id: string;
  isFavorite: boolean;
};

export const BreedsGallery: FC<BreedsGalleryProps> = ({
  page,
  id,
  isFavorite
}) => {
  const { data: favoritedImages, isLoading } = useGetImagesWithFavorites({
    limit: 10,
    page
  });
  const [addFavorite] = useAddFavoritesMutation();

  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const handleBtnAddClick = () => {
    addFavorite({ image_id: id, sub_id: 'nastya' });
  };

  return (
    <StyledBreedsGallery>
      {isLoading && <div>Loading...</div>}
      {(favoritedImages || []).map((item, index) => {
        const isCardHovered = hoveredCardIndex === index;
        return (
          <CardComponent key={item.id} borderRadius={0} variant="primary">
            <img src={item.url} alt={item.breeds[0]?.name} />
            <Box
              sx={{ position: 'absolute', top: 24, right: 24, padding: '0' }}
              onMouseOver={() => setHoveredCardIndex(index)}
              onMouseOut={() => setHoveredCardIndex(null)}
              onClick={() => handleBtnAddClick()}
            >
              <HeartIcon isHovered={isCardHovered} isFilled={isFavorite} />
            </Box>
          </CardComponent>
        );
      })}
    </StyledBreedsGallery>
  );
};
