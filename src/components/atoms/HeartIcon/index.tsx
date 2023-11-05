import { FC } from 'react';
import { SvgIcon } from '@mui/material';

import HeartYellowBorder from '../../../assets/HeartYellowBorder.svg?react';
import HeartYellowFill from '../../../assets/HeartYellowFill.svg?react';

type HeartIconProps = {
  isHovered: boolean;
};

export const HeartIcon: FC<HeartIconProps> = ({ isHovered }) => (
  <SvgIcon
    component={isHovered ? HeartYellowFill : HeartYellowBorder}
    inheritViewBox
  />
);
