import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { CardComponent } from '../../atoms/CardComponent';
import { HeartIcon } from '../../atoms/HeartIcon';
import { BreedItemLink } from '../../atoms/BreedItemLink';
import { Favorite } from '../../../services/favorites';

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
  addFavorite: (favorite: Favorite) => void;
};

export const BreedItem: FC<BreedItemProps> = ({
  item,
  isFavorite,
  addFavorite
}) => {
  const [isCardHovered, setCardHovered] = useState(false);
  const [isHeartIconHovered, setHeartIconHovered] = useState(false);
  const handleBtnAddClick = (id: string) => {
    if (!isFavorite) {
      addFavorite({ image_id: id });
    }
  };
  return (
    <CardComponent
      key={item.id}
      borderRadius={0}
      variant="primary"
      sx={{ cursor: isFavorite ? 'default' : 'pointer' }}
      onMouseOver={() => setCardHovered(true)}
      onMouseOut={() => setCardHovered(false)}
    >
      <img src={item.url} alt={item.breeds[0]?.name} />
      <Box
        sx={{ position: 'absolute', top: 24, right: 24, padding: '0' }}
        onMouseOver={() => setHeartIconHovered(true)}
        onMouseOut={() => setHeartIconHovered(false)}
        onClick={() => handleBtnAddClick(item.id)}
      >
        <HeartIcon isHovered={isHeartIconHovered} isFilled={isFavorite} />
      </Box>
      {isCardHovered && item.id && <BreedItemLink breedId={item.id} />}
    </CardComponent>
  );
};
