import React, { useState } from 'react';
import { AppBar, Box, Container, IconButton, List, ListItem, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Véhicules', href: '/vehicule' },
    { text: 'E-Tech électrique & hybride', href: '#' },
    { text: 'Offres & financement', href: '#' },
    { text: 'Occasions', href: '#' },
    { text: 'Entretiens & services', href: '#' },
    { text: 'Découvrez Renault', href: '#' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'NouvelR',
              fontWeight: 'bold',
              fontSize: '12px',
              color: 'white',
              textDecoration: 'none',
            }}
          >
           <img src="images/Logo_renault.svg"  alt='logo' style={{maxWidth:'3em'}}/>
          </Typography>

          {menuItems.map((item, index) => (
            <Typography
              key={index}
              variant="h6"
              noWrap
              component="a"
              href={item.href}
              onClick={handleClose}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'NouvelR',
                fontWeight: 'bold',
                fontSize: '12px',
                color: 'white',
                textTransform:"uppercase",
                textDecoration: 'none',
              }}
            >
              {item.text}
            </Typography>
          ))}

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                backgroundColor: 'black',
                color: 'white',
                fontFamily: 'NouvelR',
                fontWeight: 'bold',
                fontSize: '12px',
                textTransform:"uppercase",
              },
            }}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index}>{item.text}</MenuItem>
            ))}
          </Menu>
          <List sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <ListItemIcon style={{ display:"block", textAlign:"center"}}>
                <img src="images/recherche.svg"  alt='logo' style={{maxWidth:'3em'}}/>
                </ListItemIcon>
              <Typography  style={{ fontFamily:"NouvelR",fontSize: '12px'}}>recherche</Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box>
                <ListItemIcon style={{ display:"block", textAlign:"center"}}>
                <img src="images/car.svg"  alt='logo' style={{maxWidth:'3em'}}/>
                </ListItemIcon>
              </Box>
              <Typography  style={{ fontFamily:"NouvelR",fontSize: '12px'}}>professionnels</Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box>
                <ListItemIcon style={{ display:"block", textAlign:"center"}}>
                <img src="images/pin_localisation.svg"  alt='logo' style={{maxWidth:'3em'}}/>
                </ListItemIcon>
              </Box>
              <Typography  style={{ fontFamily:"NouvelR",fontSize: '12px'}}>réseau</Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ListItemIcon style={{ display:"block", textAlign:"center"}}>
                <img src="images/user_chat.svg"  alt='logo' style={{maxWidth:'3em'}}/>
                </ListItemIcon>
              <Typography  style={{ fontFamily:"NouvelR",fontSize: '12px', textAlign:"center"}}>contactez-nous</Typography>
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box>
                <ListItemIcon style={{ display:"block", textAlign:"center"}}>
                <img src="images/account.svg"  alt='logo' style={{maxWidth:'3em'}}/>
                </ListItemIcon>
              </Box>
              <Typography  style={{ fontFamily:"NouvelR",fontSize: '12px'}}>My Renault</Typography>
            </ListItem>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
