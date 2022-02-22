import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart } from '@mui/icons-material';


export default function NavBar() {
      
 
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="success">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > 
            <MenuIcon />
          </IconButton >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            J/play Store
          </Typography>
          <Button color="inherit">Login</Button>
          <IconButton aria-label="show Card items" color="info">
            <ShoppingCart />    
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
