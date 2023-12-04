import { SvgIcon, Typography } from '@mui/material';
import { FC } from 'react';
import { StyledBreedItemLink } from './StyledBreedItemLink';

import PowIconYellow from '../../../assets/PawIconYellow.svg?react';
import ArrowRightIcon from '../../../assets/ArrowRightIcon.svg?react';

type BreedItemLinkProps = {
  breedId: string;
};

export const BreedItemLink: FC<BreedItemLinkProps> = ({ breedId }) => (
  <StyledBreedItemLink to={`breeds/${breedId}`}>
    <SvgIcon component={PowIconYellow} />
    <Typography component="span">Learn more</Typography>
    <SvgIcon component={ArrowRightIcon} />
  </StyledBreedItemLink>
);
