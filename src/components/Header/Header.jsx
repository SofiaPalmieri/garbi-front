import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';

const pages = ['Mapa', 'Estadísticas', 'Recomendaciones', 'Reportes', 'Gestión'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = ({ logoOnly = false }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ background: '#12422c', zIndex: 1100 }}>
            <Container maxWidth="xl" sx={{ background: '#12422c' }} >
                <Toolbar disableGutters sx={{ background: '#12422c' }}>
                    <AdbIcon sx={{ display: { xs: 'none' }, mr: 1, backgroundColor: '#12422c' }} />

                    {logoOnly ?

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'grid' },
                                fontFamily: 'montnapha',
                                fontWeight: 1,
                                letterSpacing: '.15rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                backgroundColor: '#12422c'
                            }}
                        >
                            <img src='/src/assets/garbi-navbar.png' height="30" width="60"
                            ></img>
                        </Typography> :

                        <>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'grid' },
                                    fontFamily: 'montnapha',
                                    fontWeight: 1,
                                    letterSpacing: '.15rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    backgroundColor: '#12422c'
                                }}
                            >
                                <img src='/src/assets/garbi-navbar.png' height="30" width="60"
                                ></img>
                            </Typography>


                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', backgroundColor: '#12422c' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
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
                                        display: { xs: 'block', md: 'none', backgroundColor: '#12422c' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box><AdbIcon sx={{
                                display: {
                                    xs: 'flex', md: 'none', backgroundColor: '#12422c'
                                }, mr: 1
                            }} /><Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'montnapha',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    textDecoration: 'underline',
                                    color: '#12422c',
                                    marginTop: '1rem',
                                    backgroundColor: '#12422c'
                                }}
                            >

                            </Typography><Box sx={{
                                flexGrow: 1, display: {
                                    xs: 'none', md: 'flex', color: '#12422c', backgroundColor: '#12422c',
                                }
                            }}>
                                {pages.map((page) => (
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            color: 'white', fontSize: '11', textTransform: 'unset'
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box><Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, backgroundColor: '#12422c' }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    )
}
