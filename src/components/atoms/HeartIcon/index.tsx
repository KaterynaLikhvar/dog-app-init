import { FC } from 'react';
import { SvgIcon } from '@mui/material';

import HeartYellowBorder from '../../../assets/HeartYellowBorder.svg?react';
import HeartYellowFill from '../../../assets/HeartYellowFill.svg?react';
import HeartBlackBorder from '../../../assets/HeartBlackBorder.svg?react';

type HeartIconProps = {
  isHovered: boolean;
  isFilled: boolean;
};

export const HeartIcon: FC<HeartIconProps> = ({ isHovered, isFilled }) => {
  let IconComponent;

  if (isFilled) {
    IconComponent = HeartYellowFill;
  } else if (isHovered) {
    IconComponent = HeartYellowBorder;
  } else {
    IconComponent = HeartBlackBorder;
  }

  return <SvgIcon component={IconComponent} />;
};
