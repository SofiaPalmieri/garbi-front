
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMeCheckbox: false
    }
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  }

  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper sx={{
        backgroundColor: 'red',
        height: '32rem',
        width: '64rem',
        display: 'flex',
        borderRadius: '1rem'
      }}
        elevation={8}
      >
        <Box sx={{
          backgroundColor: 'green',
          height: '100%',
          flex: 1,
          width: '50%',
          borderTopLeftRadius: '1rem',
          borderBottomLeftRadius: '1rem'
        }}>
          <img src='/src/assets/garbi-login.png' style={{
            borderTopLeftRadius: '1rem',
            borderBottomLeftRadius: '1rem'

          }}></img>
        </Box>
        <Box sx={{
          width: '50%',
          background: 'white',
          height: '100%',
          flex: 1,
          borderTopRightRadius: '1rem',
          borderBottomRightRadius: '1rem',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  textAlign: 'center',
                  lineHeight: '4rem'
                }}
              >Inicia sesión</Typography>
              <Box padding={1}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <TextField fullWidth label="Email" {...field} />}
                />
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) =>
                    <FormControl sx={{ mt: 1 }} fullWidth>
                      <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        { ...field }
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Contraseña"
                      />
                    </FormControl>
                  }
                />
                <Controller
                  name="rememberMeCheckbox"
                  control={control}
                  defaultValue={true}
                  render={({ field }) =>
                    <FormGroup sx={{
                      width: 'fit-content',
                      marginLeft: '9px',
                      display: 'flex'
                    }}>
                      <FormControlLabel control={<Checkbox {...field} />} label="Recordame" />
                    </FormGroup>
                  }
                />
                <Button sx={{
                  backgroundColor: '#12422C',
                  color: 'white',
                  marginTop: '1rem'
                }} fullWidth type='submit'  >
                  INGRESAR
                </Button>
                <Typography sx={{
                  textDecoration: 'underline',
                  color: '#2196F3',
                  fontSize: '.875rem',
                  marginTop: '1rem'
                }}>
                  ¿Olvidaste tu contraseña?
                </Typography>
              </Box>
            </form>
          </Box>

        </Box>

      </Paper>
    </Box>

  )
}

export default LoginPage