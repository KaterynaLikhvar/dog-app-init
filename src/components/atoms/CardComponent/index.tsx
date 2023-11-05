import { Box, styled } from '@mui/material';

type CardComponentProps = {
  variant: 'primary' | 'secondary';
  borderRadius: number;
};

export const CardComponent = styled(Box)<CardComponentProps>(
  ({ theme, variant, borderRadius = 20 }) => ({
    position: 'relative',
    // maxWidth: 345,
    minHeight: 196,
    border:
      variant === 'primary'
        ? `1px solid ${theme.palette.common.black}`
        : `unset`,
    borderRadius: borderRadius || 20,
    boxShadow:
      variant === 'primary'
        ? `6px 6px 0px 0px ${theme.palette.common.black}`
        : `3px 3px 0px 0px ${theme.palette.common.black}`,
    backgroundColor: '#FFF',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transition: 'box-shadow .2s ease',
    cursor: 'pointer',
    img: {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'inherit'
    },
    '&:hover, &:active': {
      boxShadow:
        variant === 'primary'
          ? `6px 6px 8px 0px ${theme.palette.primary.main}`
          : `3px 3px 0px 0px ${theme.palette.common.black}`
    }
  })
);
