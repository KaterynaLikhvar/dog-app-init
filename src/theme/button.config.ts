import { Components, Theme } from '@mui/material';

export const MuiButtonConfig: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 10,
      boxShadow: '3px 3px 0px 0px #000',
      textTransform: 'none',
      fontSize: 20,
      lineHeight: 1.6,
      padding: theme.spacing(1, 2),
      whiteSpace: 'nowrap',

      '&:hover, &:active': {
        boxShadow: 'none'
      }
    }),
    containedPrimary: ({ theme: { palette } }) => ({
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      '&:hover': {
        backgroundColor: palette.action.hover
      },
      '&:active, &:focus, &:focus-visible': {
        backgroundColor: palette.action.selected,
        outline: 'unset'
      }
    }),
    containedSecondary: ({ theme: { palette } }) => ({
      backgroundColor: palette.secondary.main,
      color: palette.secondary.contrastText,
      '&:hover': {
        backgroundColor: palette.secondary.main,
        color: palette.secondary.contrastText
      },
      '&:active': {
        backgroundColor: palette.grey[300],
        color: palette.secondary.contrastText
      }
    }),
    outlinedPrimary: ({ theme: { palette } }) => ({
      color: palette.primary.main,
      boxShadow: 'none'
    }),
    outlinedSecondary: ({ theme: { palette } }) => ({
      color: palette.secondary.main,
      boxShadow: 'none'
    }),
    text: ({ theme: { palette } }) => ({
      color: palette.text.primary,
      boxShadow: 'none',
      '&:hover': {
        color: palette.primary.main,
        boxShadow: 'none'
      },
      '&:active, &:focus, &:focus-visible': {
        color: palette.text.secondary,
        backgroundColor: palette.primary.main,
        boxShadow: 'none',
        outline: 'none'
      }
    })
  },
  defaultProps: {
    disableRipple: true
  }
};
