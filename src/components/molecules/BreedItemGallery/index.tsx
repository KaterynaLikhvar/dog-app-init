import { FC } from 'react';
import { Box, Stack, SvgIcon, Typography, styled } from '@mui/material';
import { useGetImagesIdQuery } from '../../../services/imagesId';

import { CardComponent } from '../../atoms/CardComponent';

import PawIconShadow from '../../../assets/PawIconShadow.svg?react';
import { BreedInfo } from '../BreedInfo';

export const StyledBreedItem = styled(Box)({
  marginTop: '60px',
  display: 'grid',
  gridTemplateColumns: '570px 1fr',
  gridGap: '60px'
});

interface ImageComponentProps {
  imageId: string | undefined;
}

export const ImageComponent: FC<ImageComponentProps> = ({ imageId }) => {
  const { data: imagesId, isLoading } = useGetImagesIdQuery({ id: imageId });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledBreedItem>
      <CardComponent
        borderRadius={0}
        variant="primary"
        width={570}
        height={412}
      >
        <img src={imagesId?.url} alt={imagesId?.breeds?.[0]?.name} />
      </CardComponent>
      <Stack>
        <Box
          sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
        >
          <Typography variant="h5" marginRight={2}>
            {imagesId?.breeds?.[0]?.name}
          </Typography>
          <SvgIcon component={PawIconShadow} inheritViewBox />
        </Box>
        <BreedInfo
          weight={imagesId?.breeds?.[0]?.weight.metric}
          height={imagesId?.breeds?.[0]?.height.metric}
          lifeSpan={imagesId?.breeds?.[0]?.lifeSpan}
          origin={imagesId?.breeds?.[0]?.origin}
          temperament={imagesId?.breeds?.[0]?.temperament}
        ></BreedInfo>
      </Stack>
    </StyledBreedItem>
  );
};
