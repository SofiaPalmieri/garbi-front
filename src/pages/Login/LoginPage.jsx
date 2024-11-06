import {
  Alert,
  Box,
  Snackbar
} from '@mui/material';
import GiratoryCard from '../../components/GiratoryCard/GiratoryCard';
import {
  LoginBox
} from '../../components/LoginBox';
import {
  useEffect,
  useState
} from 'react';
import {
  useLocation 
} from 'react-router-dom';

const LoginPage = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('unauthorized') === 'true') {
      setShowSnackbar(true);
    }
  }, [location]);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GiratoryCard
        frontComponent={<LoginBox />}
      />
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity='error'
        >
          No estas autenticado. Debes iniciar sesión
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;
