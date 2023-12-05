import { Button, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

const headerMenu = [
  {
    title: 'Main',
    path: '/',
    id: 1
  },
  {
    title: 'Breeds',
    path: '/breeds',
    id: 2
  },
  {
    title: 'Vote',
    path: '/votes',
    id: 3
  },
  {
    title: 'History',
    path: '/history',
    id: 4
  },
  {
    title: 'Your uploads',
    path: '/uploads',
    id: 5
  }
];

const Navbar = () => (
  <Stack direction="row" spacing={6}>
    {headerMenu.map(item => (
      <NavLink to={item.path} key={item.id}>
        {({ isActive }) => (
          <Button
            key={item.path}
            variant={isActive ? 'contained' : 'text'}
            sx={{ whiteSpace: 'nowrap' }}
          >
            {item.title}
          </Button>
        )}
      </NavLink>
    ))}
  </Stack>
);
export default Navbar;
