// Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Button, Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';
import profile from '../assets/react.svg';

const StyledDrawer = styled(Drawer)({
  width: '300px', // Increase the width as needed
  backgroundColor: '#f0f0f0', // Sidebar background color
});

const StyledAvatar = styled(Avatar)({
  width: '32px',
  height: '32px',
  marginRight: '8px',
});

const CenteredContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // 100% of the viewport height
  backgroundColor: '#e0e0e0', // Main screen background color
});

const Sidebar = ({ isLoggedIn, onLogin, onLogout }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  const handleLogin = () => {
    onLogin();
    setOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    setOpen(false);
  };

  return (
    <CenteredContainer>
      <Typography variant="h4" gutterBottom>
        SideBar react app
      </Typography>
      <Button onClick={toggleDrawer(true)}>Open Sidebar</Button>
      <StyledDrawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          {isLoggedIn ? (
            <>
              <ListItem>
                <StyledAvatar alt="Profile" src={profile} />
                <ListItemText primary="React App" />
              </ListItem>
              <ListItem>
                <Button onClick={handleLogout} color="primary" variant="contained" fullWidth>
                  Logout
                </Button>
              </ListItem>
            </>
          ) : (
            <ListItem>
              <Button onClick={handleLogin} color="primary" variant="contained" fullWidth>
                Login
              </Button>
            </ListItem>
          )}
        </List>
      </StyledDrawer>
    </CenteredContainer>
  );
};

export default Sidebar;
