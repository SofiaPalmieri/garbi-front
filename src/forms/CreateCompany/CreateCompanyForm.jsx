import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import {
  Controller, useForm 
} from 'react-hook-form';
import {
  CancelAndSubmitButton 
} from '../../components/CancelAndSubmitButton/CancelAndSubmitButton';

const provincias = [
  {
    value: 'buenosAires',
    label: 'Buenos Aires',
  },
  {
    value: 'cordoba',
    label: 'Córdoba',
  },
  {
    value: 'santaFe',
    label: 'Santa Fe',
  },
  // Agrega más provincias según sea necesario
];

export const CreateCompanyForm = ({
  handleClose
}) => {
  const {
    control,
    formState: {
      errors 
    },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form>
      <Box
        sx={{
          width: '100%',
          height: '104px',
          padding: '16px 24px',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '16px',
            marginBottom: '16px',
          }}
        >
          Datos de la empresa
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            width: '100%',
            height: '40px',
          }}
        >
          <Box
            sx={{
              flex: 1,
              height: '40px',
            }}
          >
            <Controller
              name='razonSocial'
              control={control}
              rules={{
                required: true,
              }}
              render={({
                field 
              }) => (
                <FormControl
                  size='small'
                  fullWidth
                  sx={{
                    minHeight: '80px',
                  }}
                >
                  <TextField
                    size='small'
                    fullWidth
                    label='Razón Social'
                    {...field}
                  />
                  {errors.razonSocial && (
                    <Typography
                      fontSize={'0.85rem'}
                      paddingLeft={1.5}
                      color={'red'}
                    >
                      {errors.razonSocial.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              height: '40px',
            }}
          >
            <Controller
              name='cuit'
              control={control}
              rules={{
                required: true,
              }}
              render={({
                field 
              }) => (
                <FormControl
                  fullWidth
                  size='small'
                >
                  <TextField
                    size='small'
                    fullWidth
                    label='CUIT'
                    {...field}
                  />
                  {errors.cuit && (
                    <Typography
                      fontSize={'0.85rem'}
                      paddingLeft={1.5}
                      color={'red'}
                    >
                      {errors.cuit.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '104px',
          padding: '16px 24px',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '16px',
            marginBottom: '16px',
          }}
        >
          Ubicación en la que va a operar
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            width: '100%',
            height: '40px',
          }}
        >
          <Box
            sx={{
              flex: 1,
              height: '40px',
            }}
          >
            <Controller
              name='provincia'
              control={control}
              rules={{
                required: 'Este campo es obligatorio',
              }}
              render={({
                field 
              }) => (
                <FormControl
                  size='small'
                  fullWidth
                  sx={{
                    minHeight: '80px',
                  }}
                >
                  <InputLabel
                    id='provincia-label'
                  >Provincia</InputLabel>
                  <Select
                    labelId='provincia-label'
                    id='provincia-select'
                    label='Provincia'
                    {...field}
                  >
                    {provincias.map((provincia) => (
                      <MenuItem
                        key={provincia.value}
                        value={provincia.value}
                      >
                        {provincia.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.provincia && (
                    <Typography
                      fontSize={'0.85rem'}
                      paddingLeft={1.5}
                      color={'red'}
                    >
                      {errors.provincia.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              height: '40px',
            }}
          >
            <Controller
              name='direccion'
              control={control}
              rules={{
                required: true,
              }}
              render={({
                field 
              }) => (
                <FormControl
                  fullWidth
                  size='small'
                >
                  <TextField
                    size='small'
                    fullWidth
                    label='Dirección'
                    {...field}
                  />
                  {errors.direccion && (
                    <Typography
                      fontSize={'0.85rem'}
                      paddingLeft={1.5}
                      color={'red'}
                    >
                      {errors.direccion.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '104px',
          padding: '16px 24px',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '16px',
            marginBottom: '16px',
          }}
        >
          Datos de contacto
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            width: '100%',
            height: '40px',
          }}
        >
          <Box
            sx={{
              flex: 1,
              height: '40px',
            }}
          >
            <Controller
              name='mailDelAdmin'
              control={control}
              rules={{
                required: true,
              }}
              render={({
                field 
              }) => (
                <FormControl
                  size='small'
                  fullWidth
                  sx={{
                    minHeight: '80px',
                  }}
                >
                  <TextField
                    size='small'
                    fullWidth
                    label='Mail del Admin'
                    {...field}
                  />
                  {errors.mailDelAdmin && (
                    <Typography
                      fontSize={'0.85rem'}
                      paddingLeft={1.5}
                      color={'red'}
                    >
                      {errors.mailDelAdmin.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              height: '40px',
            }}
          >
            <Controller
              name='telefono'
              control={control}
              rules={{
                required: true,
              }}
              render={({
                field 
              }) => (
                <FormControl
                  fullWidth
                  size='small'
                >
                  <TextField
                    size='small'
                    fullWidth
                    label='Teléfono de contacto'
                    {...field}
                  />
                  {errors.telefono && (
                    <Typography
                      fontSize={'0.85rem'}
                      paddingLeft={1.5}
                      color={'red'}
                    >
                      {errors.telefono.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Box>
        </Box>
      </Box>
      <CancelAndSubmitButton
        handleClose={handleClose}
      />
    </form>
  );
};
