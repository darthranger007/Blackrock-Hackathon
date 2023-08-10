import * as React from 'react';
import '../../assets/css/navbar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logoBanner from '../../assets/logos/newlogo.png';
import {Link} from 'react-router-dom'

const drawerWidth = 240;
const navItems = ['Home', 'Financial Education Videos', 'Tools', 'Schemes for Women'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FinEdify
      </Typography>
      <Divider />
      <List>
      <Button className='nav-btns'>
              Home
              </Button>
              <Button className='nav-btns'>
              Videos
              </Button>
              <Button className='nav-btns'>
              Tools
              </Button>
              <Button className='nav-btns'>
              Schemes for Women
              </Button>
              <Button className='nav-btns'>
              Financial Education Content
              </Button>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className='navmain'>
        <Toolbar className='navmain'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className='navbar-heading'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img className='img-navbar' src={logoBanner} /> FinEdify
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button className='nav-btns' style={{color:'#242333'}}>
              Home
              </Button>
              <Button className='nav-btns'>
              <Link to="/videos">Financial Education Videos</Link>
              </Button>
              <Button className='nav-btns'>
              Tools
              </Button>
              <Button className='nav-btns'>
              Schemes for Women
              </Button>
              <Button className='nav-btns'>
              <Link to="/content">Financial Education Content</Link>
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;