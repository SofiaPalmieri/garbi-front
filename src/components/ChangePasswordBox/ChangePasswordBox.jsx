import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { object, string } from 'yup'
import CloseIcon from '@mui/icons-material/Close';


const changePasswordSchema = object({
  password: string().required(),
  passwordRepeated: string().max(16).required()
}).required();


export const ChangePasswordBox = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      password: "",
      passwordRepeated: "",
    },
    resolver: yupResolver(changePasswordSchema)
  });

  const onSubmit = async (data) => {
  }

  return (
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
        backgroundColor: 'white',
        height: '100%',
        flex: 1,
        width: '50%',
        borderTopLeftRadius: '1rem',
        borderBottomLeftRadius: '1rem',
      }}>
        <Box
          sx={{ width: '100%', height: '100%' }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          padding='0 2rem'
        >
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: 400
            }}
          >Cambiá tu contraseña</Typography>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#00000099'
            }}

          >Por razones de seguridad, te pedimos que cambies tu <br /> contraseña</Typography>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#00000099',
              mt: '2rem'
            }}

          >La contraseña debe contener</Typography>
          <Box sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <Box display={'flex'} alignItems={'center'}>
              <CloseIcon sx={{ color: 'red' }} />
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  verticalAlign: 'center'
                }}
              >
                Al menos 8 caracteres
              </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <CloseIcon sx={{ color: 'red' }} />
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  verticalAlign: 'center'
                }}
              >
                Al menos un número
              </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <CloseIcon sx={{ color: 'red' }} />
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  verticalAlign: 'center'
                }}
              >
                Al menos una mayúscula
              </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <CloseIcon sx={{ color: 'red' }} />
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  verticalAlign: 'center'
                }}
              >
                Al menos un caracter especial
              </Typography>
            </Box>

          </Box>

        </Box>

      </Box>
      <Box sx={{
        width: '50%',
        background: '#12422C',
        height: '100%',
        flex: 1,
        borderTopRightRadius: '1rem',
        borderBottomRightRadius: '1rem',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}>
        <Box sx={{
          overflow: 'hidden',
          width: '150px',
          height: '100px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <img style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover'
          }} src='/src/assets/garbi-login.png'></img>
        </Box>
        <Box>

          <form>
            <Box padding={1}>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                  <FormControl sx={{ minHeight: '80px' }} fullWidth>
                    <InputLabel color='secondary' sx={{ color: 'white' }} htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      error={!!errors.password}
                      color='secondary'
                      inputProps={
                        {
                          sx: {
                            color: 'white'
                          }
                        }
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            color='secondary'
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Contraseña"
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white'
                        },
                        '& .MuiInputLabel-root': {
                          color: 'white !important'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white'
                        },
                      }}
                    />
                    {errors.password && (
                      <Typography fontSize={'0.85rem'} paddingLeft={1.5} color={'red'}>{errors.password.message}</Typography>
                    )}
                  </FormControl>
                }
              />
              <Controller
                name="passwordRepeated"
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                  <FormControl sx={{ minHeight: '80px' }} fullWidth>
                    <InputLabel color='secondary' sx={{ color: 'white' }} htmlFor="outlined-adornment-passwordRepeated">Repetir Contraseña</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-passwordRepeated"
                      {...field}
                      color="secondary"
                      type={showPassword ? 'text' : 'password'}
                      error={!!errors.passwordRepeated}
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white'
                        },
                        '& .MuiInputLabel-root': {
                          color: 'white !important'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white'
                        },
                      }}
                      inputProps={
                        {
                          sx: {
                            color: 'white'
                          }
                        }
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle passwordRepeated visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            color='secondary'
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Repetir Contraseña"
                    />
                    {errors.password && (
                      <Typography fontSize={'0.85rem'} paddingLeft={1.5} color={'red'}>{errors.password.message}</Typography>
                    )}
                  </FormControl>
                }
              />
              <Button
                color="secondary"
                sx={{
                  marginTop: 0.1,
                  backgroundColor: 'secondary.main',
                  color: 'secondary.contrastText',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                  },
                }}
                fullWidth
                type='submit'
              >
                Guardar cambios
              </Button>
            </Box>
          </form>
        </Box>

      </Box>
    </Paper >
  )
}