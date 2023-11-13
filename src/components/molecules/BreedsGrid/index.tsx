import { Box, Button, Typography, styled } from '@mui/material';
import { useGetBreedsQuery } from '../../../services/breeds';
import { CardComponent } from '../../atoms/CardComponent';
import { HeartIcon } from '../../atoms/HeartIcon';

const StyledBreedsGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 372px)',
  gridGap: 22,
  '& img': {
    marginBottom: '14px',
    height: '274px'
  },
  '& p': {
    padding: '0 20px',
    '-webkitBoxOrient': 'vertical',
    '-webkitLineClamp': '2',
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  '& .MuiButton-text': {
    marginLeft: 'auto',
    display: 'block'
  }
});

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
          <Button
            sx={{ position: 'absolute', top: 24, right: 24 }}
            // onMouseOver={() => setHoveredCardIndex(index)}
            // onMouseOut={() => setHoveredCardIndex(null)}
          >
            <HeartIcon isHovered={false} isFilled={false} />
          </Button>
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
