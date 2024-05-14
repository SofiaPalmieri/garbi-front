import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import MapPage from '../Map/MapPage';
import CssBaseline from '@mui/material/CssBaseline';




const drawerWidth = 240;
const listOfAreas=["Área 1", "Área 2", "Área 3"]


export  function Dropdown(prop) {
  const [area, setArea] = React.useState('');

  const handleChange = (event) => {
    setArea(event.target.value);
  };

  return (
    <div>
      <Box paddingTop='10px' width='250px'>
      <FormControl  sx={{ m: 1, minWidth: 120, fontSize:'small'}}>
        <InputLabel paddingBottom='15px'id="demo-simple-select-helper-label" paddingRight='100px' sx={{fontSize:'medium', fontStyle:'Roboto'}} >{prop.title}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={area}
          label={prop.title}
          onChange={handleChange}
        >
  {listOfAreas.map((text, index) => (
             <MenuItem key = {text}>{text}</MenuItem>
            ))}

 
 
        </Select>
        <FormHelperText>{prop.description}</FormHelperText>
      </FormControl>
      </Box>
     
      
    </div>
  );
}

const marks = [
  {
    value: 0,
    label: '0%',
  },
 
  {
    value: 25,
    label: '25%',
  },
  {
    value: 50,
    label: '50%',
  },
  
  {
    value: 75,
    label: '75%',
  },
 
  {
    value: 100,
    label: '100%',
  }
];

function valuetext(value) {
  return `${value}°C`;
}

export function SliderMenu(prop) {
  return (
    <Box paddingTop='30px' paddingRight= '100px'  sx={{ width: 300, fontSize:'large', fontStyle:'Roboto' }}>
       <Typography variant="h6" noWrap component="div" fontStyle="montnapha" color= "gray" fontFamily="Roboto" fontWeight="200" fontSize="medium" lineHeight="48 px">
            {prop.title}
          </Typography>
      <Slider
        aria-label="Custom marks"
        color="gray"
        getAriaValueText={valuetext}
        step={1}
        valueLabelDisplay="auto"
        size='small'
        border= '5px'
        height= '50px'
        width= '5px'
        box-sizing= 'border-box'
        marks={marks}
      />
    </Box>
  );
}

function SideBar() {
  return (
    <Box borderColor= 'gray' sx={{ display: 'flex', margin:'0',left: '0px', offsetLeft:'0', offsetRight:'0', boxSizing:'border-box'}}>  
 <MapPage/>

        <Box  paddingBottom='10px' paddingTop='15px' paddingRight= '150x' position="fixed">
       

        <Typography variant="h6" noWrap component="div" fontStyle="Roboto" color= "gray" fontFamily="Roboto" fontSize="25px" lineHeight="48 px" bold='true' >
              Filtros
            </Typography>
        <Dropdown  title="Área" description="Seleccione un Área" fontStyle="Roboto" padding='25px'></Dropdown>
        <Divider />
        <SliderMenu title="Capacidad"></SliderMenu>
        <Divider />
        <SliderMenu title="Nivel de batería"></SliderMenu>
        <Divider />
  
        <Box paddingTop='80px' paddingLeft='80px'>
        <Button p sx={{color: 'white', backgroundColor:'#12422c'}}>Aplicar</Button>
        <Box>
        </Box>
  
        </Box>
  
        </Box>
        

    </Box>
  );
}

const pages = ['Mapa', 'Estadísticas', 'Recomendaciones', 'Reportes', 'Gestión'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function HomePage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="static"  style = {{padding:'0', paddingTop:'0', paddingLeft:'0', paddingRight:'0'}}sx={{background: '#12422c'}}>
      <Container maxWidth="xl" sx={{background: '#12422c'}} >
        <Toolbar disableGutters sx={{background: '#12422c'}}>
          <AdbIcon  sx={{ display: { xs: 'none' }, mr: 1, backgroundColor: '#12422c'} } />
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
              color:'inherit',
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
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none', backgroundColor: '#12422c'
 }, mr: 1 }} />
          <Typography
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
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', color: '#12422c', backgroundColor: '#12422c', 
  } }}>
            {pages.map((page) => (
              <Button 
                onClick={handleCloseNavMenu}
                sx={{ color: 'white',fontSize: '11',  
              }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,  backgroundColor: '#12422c'}}>
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
        </Toolbar>
      </Container>
<div>
<Box margin='left' alignContent='left' paddingTop='10px'sx={{backgroundColor: "white", color:"black" } }>
      <Container maxWidth="xl" >
      
      <SideBar sx={{style: "display"} }/>
      </Container>

      </Box>
      </div>

    </AppBar>

  );
}
export default HomePage;

