import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { CardComponent } from '../../atoms/CardComponent';
import { HeartIcon } from '../../atoms/HeartIcon';

type BreedItemProps = {
  item: {
    id: string;
    url: string;
    breeds: {
      name: string;
    }[];
  };
  isFavorite: boolean;
  url: string;
  addFavorite: any;
};

export const BreedItem: FC<BreedItemProps> = ({
  item,
  isFavorite,
  addFavorite
}) => {
  const [isHovered, setHovered] = useState(false);
  const handleBtnAddClick = (id: string) => {
    if (!isFavorite) {
      addFavorite({ image_id: id, sub_id: 'katya' });
    }
  };
  return (
    <CardComponent
      key={item.id}
      borderRadius={0}
      variant="primary"
      sx={{ cursor: isFavorite ? 'default' : 'pointer' }}
    >
      <img src={item.url} alt={item.breeds[0]?.name} />
      <Box
        sx={{ position: 'absolute', top: 24, right: 24, padding: '0' }}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        onClick={() => handleBtnAddClick(item.id)}
      >
        <HeartIcon isHovered={isHovered} isFilled={isFavorite} />
      </Box>
    </CardComponent>
  );
};
