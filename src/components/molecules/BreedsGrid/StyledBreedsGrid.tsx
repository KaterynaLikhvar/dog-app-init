import { styled, Box } from '@mui/material';

export const StyledBreedsGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 372px)',
  gridGap: 22,
  '& img': {
    marginBottom: '14px',
    height: '274px'
  },
  '& p': {
    padding: '0 20px',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'llipsis'
  },
  '& .MuiButton-text': {
    marginLeft: 'auto',
    display: 'block'
  }
});
