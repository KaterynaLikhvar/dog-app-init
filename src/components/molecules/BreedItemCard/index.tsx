import { Link } from 'react-router-dom';
import { CardComponent } from '../../atoms/CardComponent';
import { Button, Typography } from '@mui/material';
import { FC, useState } from 'react';

type BreedItemCardProps = {
  item: {
    id: number;
    name: string;
    temperament: string;
    origin: string;
    reference_image_id: string;
    image: {
      url: string;
    };
    url: string;
  };
};

export const BreedItemCard: FC<BreedItemCardProps> = ({ item }) => {
  const [isCardHovered, setCardHovered] = useState(false);
  return (
    <CardComponent
      key={item.id}
      borderRadius={0}
      variant="primary"
      sx={{ paddingBottom: '172px' }}
      onMouseOver={() => setCardHovered(true)}
      onMouseOut={() => setCardHovered(false)}
    >
      <img src={item.image.url} alt={item.name} />
      <Button sx={{ position: 'absolute', top: 24, right: 24 }} />
      <Typography fontSize={26} fontWeight={500}>
        {item.name}
      </Typography>
      <Typography>
        <Typography component="span">Temperament:</Typography>
        <Typography
          component="span"
          color="#ADA7B8"
          sx={{ padding: '0 0 0 4px' }}
        >
          {item.temperament}
        </Typography>
      </Typography>
      {isCardHovered && item.reference_image_id && (
        <Link to={`${item.reference_image_id}`}>more</Link>
      )}
    </CardComponent>
  );
};
