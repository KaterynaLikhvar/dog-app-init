import { SvgIcon, Typography } from '@mui/material';
import { StyledBreedItemLink } from './StyledBreedItemLink';

import PowIconYellow from '../../../assets/PawIconYellow.svg?react';
import ArrowRightIcon from '../../../assets/ArrowRightIcon.svg?react';

export const BreedItemLink = () => (
  <StyledBreedItemLink to="breed/:breedId">
    <SvgIcon component={PowIconYellow} />
    <Typography component="span">Learn more</Typography>
    <SvgIcon component={ArrowRightIcon} />
  </StyledBreedItemLink>
);
