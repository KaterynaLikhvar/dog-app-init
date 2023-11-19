import { Button, Typography } from '@mui/material';
import { useGetBreedsQuery } from '../../../services/breeds';
import { CardComponent } from '../../atoms/CardComponent';
import { StyledBreedsGrid } from './StyledBreedsGrid';

export const BreedsGrid = () => {
  const { data: breeds, isLoading } = useGetBreedsQuery({ limit: 6, page: 0 });
  return (
    <StyledBreedsGrid>
      {isLoading && <div>Loading...</div>}
      {(breeds || []).map(item => (
        <CardComponent
          key={item.id}
          borderRadius={0}
          variant="primary"
          sx={{ paddingBottom: '172px' }}
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
          <Button variant="text">more</Button>
        </CardComponent>
      ))}
    </StyledBreedsGrid>
  );
};
