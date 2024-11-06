

import {
  Visibility, VisibilityOff
} from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import {
  useEffect,
  useState
} from 'react';
import {
  Controller, useForm
} from 'react-hook-form';


import logo from '/src/assets/garbi-login.png';
import {
  useNavigate
} from 'react-router-dom';
import {
  jwtDecode
} from 'jwt-decode';
import {
  useAuth
} from '../../api/hooks/useAuth/useAuth';
import {
  RegistrationPage 
} from '../../RegistrationPage';
import {
  ModalCreateResource 
} from '../../modales/ModalCreateResource';


export const LoginBox = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginScreenLoading, setIsLoginScreenLoading] = useState(true);

  const {
    login: {
      login: login,
      isLoginLoading
    },
  } = useAuth();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    control,
    handleSubmit,
    formState: {
      errors
    },
  } = useForm({
    defaultValues: {
      personalEmail: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    const response = await login({
      email: data.personalEmail,
      password: data.password,
    });

    if(response.token !== undefined){
      localStorage.setItem('token', response.token);
      const user = jwtDecode(response.token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/reportes');
    }
    
  };

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }


  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      const decodedToken = jwtDecode(localStorage.getItem('token'));
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp > currentTime) {
        navigate('/reportes');
      }
    }
    
    setIsLoginScreenLoading(false);
  }, [])

  if (isLoginScreenLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          height: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Paper
      sx={{
        backgroundColor: 'red',
        height: '32rem',
        width: '64rem',
        display: 'flex',
        borderRadius: '1rem',
      }}
      elevation={8}
    >
      <Box
        sx={{
          backgroundColor: 'green',
          height: '100%',
          flex: 1,
          width: '50%',
          borderTopLeftRadius: '1rem',
          borderBottomLeftRadius: '1rem',
        }}
      >
        <img
          src={logo}
          style={{
            borderTopLeftRadius: '1rem',
            borderBottomLeftRadius: '1rem',
          }}
        />
      </Box>
      <Box
        sx={{
          width: '50%',
          background: 'white',
          height: '100%',
          flex: 1,
          borderTopRightRadius: '1rem',
          borderBottomRightRadius: '1rem',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box>
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: '1.5rem',
                fontWeight: 400,
                textAlign: 'center',
                lineHeight: '4rem',
              }}
            >
              Inicia sesión
            </Typography>
            <Box
              padding={1}
            >
              <Controller
                name='personalEmail'
                control={control}
                rules={{
                  required: true,
                }}
                render={({
                  field
                }) => (
                  <FormControl
                    fullWidth
                    sx={{
                      minHeight: '80px',
                    }}
                  >
                    <TextField
                      fullWidth
                      label='Email'
                      {...field}
                    />
                    {errors.personalEmail && (
                      <Typography
                        fontSize={'0.85rem'}
                        paddingLeft={1.5}
                        color={'red'}
                      >
                        {errors.personalEmail.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
              <Controller
                name='password'
                control={control}
                rules={{
                  required: true,
                }}
                render={({
                  field
                }) => (
                  <FormControl
                    sx={{
                      minHeight: '80px',
                    }}
                    fullWidth
                  >
                    <InputLabel
                      htmlFor='outlined-adornment-password'
                    >Contraseña</InputLabel>
                    <OutlinedInput
                      id='outlined-adornment-password'
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      error={!!errors.password}
                      endAdornment={
                        <InputAdornment
                          position='end'
                        >
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label='Contraseña'
                    />
                    {errors.password && (
                      <Typography
                        fontSize={'0.85rem'}
                        paddingLeft={1.5}
                        color={'red'}
                      >
                        {errors.password.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
              <Button
                sx={{
                  backgroundColor: '#12422C',
                  color: 'white',
                  marginTop: 0.1,
                  '&:hover': {
                    backgroundColor: '#0a2e1f', // Color verde oscuro al hacer hover
                  },
                  '&.Mui-disabled': {
                    backgroundColor: '#12422C', // Mantener el mismo fondo
                    color: 'gray', // Cambiar el color del texto a gris cuando está deshabilitado
                  },
                }}
                fullWidth
                type='submit'
                disabled={isLoginLoading}
              >
                {isLoginLoading ? <CircularProgress
                  size={24}
                  color='inherit'
                /> : 'INGRESAR'}

              </Button>
              <Typography
                onClick={()=>setIsOpen(true)}
                sx={{
                  textDecoration: 'underline',
                  color: '#2196F3',
                  fontSize: '.875rem',
                  marginTop: '1rem',
                }}
              >
                Registrarse
              </Typography>
              <ModalCreateResource
                title={'Registrarse'}
                open={isOpen}
                handleClose={handleClose}
                form={<RegistrationPage 
                  handleClose={handleClose}
                />}
              />
            </Box>
          </form>
        </Box>
      </Box>
    </Paper>
  );
};
