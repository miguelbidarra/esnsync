import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import UserContext from '../../auth/UserContext';

const AuthenticatedNavBar = () => {
  const { user } = useContext(UserContext);
  return user? <NavBar /> : null;
};

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: '#eeeeee' }}>
      <AuthenticatedNavBar />
      <Container mt={3} pt={5} maxWidth="lg" sx={{ height: '100%' }} disableGutters>
        <Outlet />
      </Container>
    </Box>
  );
}