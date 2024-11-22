import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Games'];

function Nav(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} className="drawer">
            <h1 className="drawer-title">Ujjval Dhakad</h1>
            <Divider />
            <List className="drawer-links">
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <a href={`/${item.toLowerCase()}`} className="drawer-link">
                                <ListItemText primary={item} />
                            </a>
                        </ListItemButton>
                    </ListItem>
                ))}
                {/* Adding the "Certificates" link to the drawer */}
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <a href="/certificats" className="drawer-link">
                            <ListItemText primary="Certificates" />
                        </a>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ position: 'absolute' }}>
            <CssBaseline />
            <AppBar component="nav" className="navbar">
                <Toolbar>
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
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                        }}
                        className="navbar-title"
                    >
                        Ujjval Dhakad
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="navbar-links">
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#FFFCF9' }}>
                                <Link to={`/${item.toLowerCase()}`} className="navbar-link">
                                    {item}
                                </Link>
                            </Button>
                        ))}
                        {/* Adding the "Certificates" link to the navbar */}
                        <Button sx={{ color: '#FFFCF9' }}>
                            <Link to='/certificats' className="navbar-link">
                                Certificates
                            </Link>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <nav>
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
            </nav>
            <Box
                component="main"
                sx={{ p: 3, flexGrow: 1, bgcolor: 'background.default' }}
            >
                <Toolbar />
                {/* Main content can go here */}
            </Box>
        </Box>
    );
}

Nav.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Nav;
