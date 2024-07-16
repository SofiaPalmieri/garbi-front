import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {
  ExpandMore 
} from '@mui/icons-material';
import {
  useState 
} from 'react';
import garbiLogo from '/src/assets/garbi-navbar.png';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {
  useNavigate 
} from 'react-router-dom';

const pages = ['Mapa', 'Estadísticas', 'Recomendaciones', 'Reportes', 'Gestión'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const managementItems=['Empleados', 'Contenedores', 'Recorridos','Áreas']

export const Header = ({
  logoOnly = false 
}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElManagement, setAnchorElManagement] = useState(null);

  const navigate = useNavigate();

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

  const handleOpenManagementMenu = (event) => {
    setAnchorElManagement(event.currentTarget);

  }
  const handleCloseManagementMenu = () => {
    setAnchorElManagement(null);
  };

  return (
    <AppBar
      sx={{
        background: '#12422c',
        zIndex: 1100,
      }}
    >
      <Container
        sx={{
          background: '#12422c',
          margin: 0,
          width: 1,
          maxWidth: 'unset !important',
        }}
        disableGutters
      >
        <Toolbar
          disableGutters
          sx={{
            background: '#12422c',
            width: '100%',
            pr: '32px',
          }}
        >
          <AdbIcon
            sx={{
              display: {
                xs: 'none',
              },
              mr: 1,
              backgroundColor: '#12422c',
            }}
          />
          {logoOnly ? (
            <Box
              width={'256px'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  background: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  border: 'none',
                }}
                component={'button'}
                onClick={() => navigate('/home')}
              >
                <img
                  src={garbiLogo}
                  height='40'
                />
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                width: '100%',
              }}
            >
              <Box
                width={'256px'}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    background: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                  component={'button'}
                  onClick={() => navigate('/home')}
                >
                  <img
                    src={garbiLogo}
                    height='40'
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: 'flex',
                    md: 'none',
                    backgroundColor: '#12422c',
                  },
                }}
              >
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
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
                    display: {
                      xs: 'block',
                      md: 'none',
                      backgroundColor: '#12422c',
                    },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography
                        textAlign='center'
                      >{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
                 
              </Box>
              
              <AdbIcon
                sx={{
                  display: {
                    xs: 'flex',
                    md: 'none',
                    backgroundColor: '#12422c',
                  },
                  mr: 1,
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'flex',
                    },
                    backgroundColor: '#12422c',
                    gap: {
                      md: '16px',
                    },
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        color: 'white',
                        textTransform: 'unset',
                      }}
                    >
                      {page}

                    </Button>
                    
                  ))}
                  <IconButton
                    onClick={handleOpenManagementMenu}
                  >
                    <ExpandMore
                      sx={{
                        color: 'white'
                      }}
                    />
                  </IconButton>
                  <Menu
                    sx={{
                      mt: '45px',
                    }}
                    id='menu-appbar'
                    anchorEl={anchorElManagement}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElManagement)}
                    onClose={handleOpenManagementMenu}
                  >
                    {managementItems.map((managementItem) => (
                      <MenuItem
                        key={managementItem}
                        onClick={handleOpenManagementMenu}
                      >
                        <Typography
                          textAlign='center'
                        >{managementItem}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                  <Menu
                    sx={{
                      mt: '45px',
                    }}
                    id='menu-appbar'
                    anchorEl={anchorElManagement}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElManagement)}
                    onClose={handleCloseManagementMenu}
                  >
                    {managementItems.map((managementItem) => (
                      <MenuItem
                        key={managementItem}
                        onClick={handleCloseManagementMenu}
                      >
                        <Typography
                          textAlign='center'
                        >{managementItem}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '16px',
                  }}
                >
                  
                  <Box>
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{
                        backgroundColor: '#12422c',
                      }}
                    >
                      <NotificationsOutlinedIcon
                        sx={{
                          color: 'white',
                        }}
                      />
                    </IconButton>
                    <Menu
                      sx={{
                        mt: '45px',
                      }}
                      id='menu-appbar'
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
                        <MenuItem
                          key={setting}
                          onClick={handleCloseUserMenu}
                        >
                          <Typography
                            textAlign='center'
                          >{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  <Box>
                    <Tooltip
                      title='Open settings'
                    >
                      <IconButton
                        sx={{
                          backgroundColor: '#12422c',
                        }}
                      >
                        <PersonIcon
                          sx={{
                            color: 'white',
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
