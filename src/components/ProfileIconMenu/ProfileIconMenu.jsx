import {
  Box, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Typography 
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {
  useNavigate 
} from 'react-router-dom';

export const ProfileIconMenu = ({
  handleClose, anchorEl
}) => {
  const navigate = useNavigate();
  const handleClickProfileItem = () => () => {
    navigate('/perfil');
    handleClose();
  };

  return (
    <Menu
      sx={{
        mt: '44px',
      }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right' 
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right' 
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <Box
        sx={{
          paddingX: 2,
          paddingBottom: 1
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
          }}
        >
          John Doe
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 300,
          }}
        >
          johndoe@cliba.com
        </Typography>
      </Box>
      <Divider />
      <MenuItem
        key={0}
        onClick={handleClickProfileItem()}
        sx={{
          marginTop: 1
        }}
      >
        <ListItemIcon>
          <PersonOutlineIcon
            fontSize='small'
          />
        </ListItemIcon>
        <ListItemText>Perfil</ListItemText>
      </MenuItem>
      <MenuItem
        key={1}
        //onClick={ } //TODO
      >
        <ListItemIcon>
          <LogoutIcon
            fontSize='small'
          />
        </ListItemIcon>
        <ListItemText>Cerrar sesión</ListItemText>
      </MenuItem>
    </Menu>
  );
};
