import { AppBar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Logo } from '../../atoms/Logo';
import Navbar from '../../molecules/Navbar';
import { PlusButton } from '../../atoms/PlusButton';
import { HeartButton } from '../../atoms/HeartButton';

export const Header = () => (
  <AppBar
    position="static"
    sx={{
      alignItems: 'center',
      padding: '20px 0 16px',
      backgroundColor: '#ADA7B8',
      boxShadow: '3px 3px 0px 0px #000',
      borderRadius: '0px 0px 32px 32px'
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1160px',
        width: '100%'
      }}
    >
      <Logo />
      <Box sx={{ margin: '0 auto', padding: '0 12px' }}>
        <Navbar />
      </Box>
      <Link to="/favorites">
        <HeartButton state="default" />
      </Link>
      <Box sx={{ display: 'flex', margin: '0 0 0 30px' }}>
        <PlusButton state="default" />
      </Box>
    </Box>
  </AppBar>
);
