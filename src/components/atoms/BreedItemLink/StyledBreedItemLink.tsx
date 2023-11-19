import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledBreedItemLink = styled(Link)({
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  padding: '10px 20px',
  boxShadow: '3px 3px 0px 0px #000',
  borderRadius: '10px',
  backgroundColor: '#FCFAFA',
  '& span': {
    whiteSpace: 'nowrap',
    display: 'block',
    margin: '0 10px'
  }
});
