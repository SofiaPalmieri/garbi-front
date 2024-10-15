
import {
  CircularProgress 
} from '@mui/material';
import {
  Box 
} from '@mui/system';
import {
  useEffect 
} from 'react';
import {
  useNavigate 
} from 'react-router-dom';

const AuthenticatedRoute = ({
  children 
}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/ingresar?unauthorized=true', {
        replace: true 
      });
    }
  }, [token, navigate]);

  return token ? children : (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default AuthenticatedRoute;