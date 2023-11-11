import { styled, Box, Button } from '@mui/material';
import { FC, useState } from 'react';
import { CardComponent } from '../../atoms/CardComponent';
import { HeartIcon } from '../../atoms/HeartIcon';
import { useGetImagesQuery } from '../../../services/images';

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
  '& .MuiBox-root:nth-child(2)': {
    gridColumn: '3',
    gridRow: '1'
  },
  '& .MuiBox-root:nth-child(3)': {
    gridColumn: '4',
    gridRow: '1 / 3'
  },
  '& .MuiBox-root:nth-child(4)': {
    gridColumn: '1',
    gridRow: '3 / 5'
  },
  '& .MuiBox-root:nth-child(5)': {
    gridColumn: '2',
    gridRow: '3'
  },
  '& .MuiBox-root:nth-child(6)': {
    gridColumn: '3',
    gridRow: '2 / 4'
  },
  '& .MuiBox-root:nth-child(7)': {
    gridColumn: '4',
    gridRow: '3'
  },
  '& .MuiBox-root:nth-child(8)': {
    gridColumn: '2',
    gridRow: '4'
  },
  '& .MuiBox-root:nth-child(9)': {
    gridColumn: '3',
    gridRow: '4'
  },
  '& .MuiBox-root:nth-child(10)': {
    gridColumn: '4',
    gridRow: '4'
  }
});

type BreedsGalleryProps = {
  page: number;
};

export const BreedsGallery: FC<BreedsGalleryProps> = ({ page }) => {
  const { data: images, isLoading } = useGetImagesQuery({
    limit: 10,
    page
  });
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  return (
    <StyledBreedsGallery>
      {isLoading && <div>Loading...</div>}
      {(images || []).map((item, index) => {
        const isCardHovered = hoveredCardIndex === index;

        return (
          <CardComponent key={item.id} borderRadius={0} variant="primary">
            <img src={item.url} alt={item.breeds[0]?.name} />
            <Button
              sx={{ position: 'absolute', top: 24, right: 24 }}
              onMouseOver={() => setHoveredCardIndex(index)}
              onMouseOut={() => setHoveredCardIndex(null)}
            >
              <HeartIcon isHovered={isCardHovered} />
            </Button>
          </CardComponent>
        );
      })}
    </StyledBreedsGallery>
  );
};
