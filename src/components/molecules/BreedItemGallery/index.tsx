import { FC } from 'react';
import { Box, Stack, SvgIcon, Typography, styled } from '@mui/material';
import { useGetImagesIdQuery } from '../../../services/imagesId';

import { CardComponent } from '../../atoms/CardComponent';

import PawIconShadow from '../../../assets/PawIconShadow.svg?react';

export const StyledBreedInfo = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '570px 1fr',
  gridGap: '60px'
});

interface ImageComponentProps {
  breedId: string;
}

export const ImageComponent: FC<ImageComponentProps> = ({ breedId }) => {
  const { data: imagesId, isLoading } = useGetImagesIdQuery({ id: breedId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Images for Breed: {imagesId?.breeds?.[0]?.name}</h1>
      <StyledBreedInfo>
        <CardComponent
          borderRadius={0}
          variant="primary"
          width={570}
          height={412}
        >
          <img src={imagesId?.url} alt={imagesId?.breeds?.[0]?.name} />
        </CardComponent>
        <Stack>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" marginRight={2}>
              {imagesId?.breeds?.[0]?.name}
            </Typography>
            <SvgIcon component={PawIconShadow} inheritViewBox />
          </Box>
        </Stack>
      </StyledBreedInfo>
    </div>
  );
};
