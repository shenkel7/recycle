import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import tree from '../images/tree 1.svg'
import Link from '@mui/material/Link';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ background: '#5F6F3A' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/"
          style={{textDecoration: 'none'}}
          >
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, mt: 0, display: { xs: 'none', md: 'flex' } }}
            style={{fontFamily: 'Lato', color: 'white'}}
            >
            RE:cycle
          </Typography>
            </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key="Home" onClick={handleCloseNavMenu}>
                <Link href="/">
                    <Typography textAlign="center">Home</Typography>
                </Link>
                  
                </MenuItem>

                <MenuItem key="Home" onClick={handleCloseNavMenu}>
                <Link href="/upload">
                    <Typography textAlign="center">Upload</Typography>
                </Link>
                  
                </MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link href="/"
          style={{textDecoration: 'none'}}
          >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{fontFamily: 'Lato'}}
              >
                Home
              </Button>
            </Link>
            <Link href="/upload"
          style={{textDecoration: 'none'}}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{fontFamily: 'Lato'}}

              >
                Upload
              </Button>
            </Link>
            <Link href="/about"
          style={{textDecoration: 'none'}}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{fontFamily: 'Lato'}}

              >
                About
              </Button>
            </Link>
          </Box>
            <Link href="/"
          style={{textDecoration: 'none'}}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{color: 'white', display: 'block' }}
                // style={{fontFamily: 'Lato'}}

              >
              <img src={tree} alt="Tree" />
              </Button>
            </Link>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
