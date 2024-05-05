
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const LoginPage = () => {
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
              <TextField fullWidth label="Email" />
              <TextField fullWidth label="Contraseña"
                sx={{
                  margin: '1rem 0'
                }}
              />
              <FormGroup sx={{
                width: 'fit-content',
                marginLeft: '9px'
              }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Recordame" />
              </FormGroup>
              <Button sx={{
                backgroundColor: '#12422C',
                color: 'white',
                marginTop: '1rem'
              }} fullWidth  >
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
          </Box>

        </Box>

      </Paper>
    </Box>

  )
}

export default LoginPage