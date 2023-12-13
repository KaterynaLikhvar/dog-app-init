import { Box, styled } from '@mui/material';
import { FC } from 'react';

export const StyledBreedInfo = styled(Box)({
  '& div': {
    '& span': {
      display: 'inline-block',
      marginBottom: '16px'
    }
  }
});

type BreedInfoProps = {
  weight: string;
  height: string;
  lifeSpan: string;
  origin: string;
  temperament: string;
};

const createBreedInfoArray = (
  props: BreedInfoProps
): { [key: string]: string }[] => {
  return [
    { 'Weight Range': props.weight },
    { Height: props.height },
    { 'Life span': props.lifeSpan },
    { Origin: props.origin },
    { Temperament: props.temperament }
  ];
};

export const BreedInfo: FC<BreedInfoProps> = props => {
  const breedInfoArray = createBreedInfoArray(props);

  return (
    <StyledBreedInfo>
      {breedInfoArray.map(item => (
        <div key={item.id}>
          {Object.entries(item).map(([key, value]) =>
            value ? (
              <span key={key}>
                <strong>{key}:</strong> {value}
              </span>
            ) : (
              ''
            )
          )}
        </div>
      ))}
    </StyledBreedInfo>
  );
};
