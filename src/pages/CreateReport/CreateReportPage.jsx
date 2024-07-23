import {
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  Grid,
  Input,
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
  InputForm 
} from '../../components/InputForm';
import addImage from '/src/assets/mdi_image-plus-outline.svg';
import {
  yupResolver 
} from '@hookform/resolvers/yup';

import {
  object, string 
} from 'yup';

import {
  useNavigate 
} from 'react-router-dom';

import {
  useAuth 
} from '../../api/hooks/useAuth/useAuth';

const tipos = [
  {
    value: 'CONTENEDOR_ROTO',
    label: 'Contenedor en mal estado',
  },
  {
    value: 'CONTENEDOR_SUCIO',
    label: 'Contenedor sucio',
  },
  {
    value: 'BASURA_EN_LA_CALLE',
    label: 'Basura en la calle',
  },
  {
    value: 'CONTENEDOR_FALTANTE',
    label: 'Contenedor faltante',
  },
  {
    value: 'OTROS',
    label: 'Otro',
  },
];

export const CreateReportPage = () => {

  const addressRegex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñA-ZÁÉÍÓÚÑ\s]*\s\d{1,4}$/;
  const navigate = useNavigate();

  const {
    createReport: {
      createReport: createReport, isCreateReportLoading 
    },
  } = useAuth();


  const createReportSchema =  object({
    title: string().required('El titulo es un campo obligatorio'),
    typeOfProblem: string().required('Debe seleccionar una opcion'),
    description: string().required('La descripcion es un campo obligatorio'),
    address: string().matches(addressRegex, 'La direccion es un campo obligatorio y su formato es por ej. "Medrano 900"')
      .required(),
    containerID: string().length(6, 'El identificador del contenedor debe tener 6 caracteres')
      .optional(),
    email: string().email()
      .required('El mail es un campo obligatorio')
  }).required();


  const {
    control,
    handleSubmit,
    formState: {
      errors 
    },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      typeOfProblem:'',
      address:'',
      containerID:'',
      email:''
    },
    resolver: yupResolver(createReportSchema),
  });

  const onSubmit = async (data) => {

    const response = await createReport( {
      title: data.title,
      description: data.description,
      address: data.address,
      containerID: data.containerID,
      email: data.email
    
    });


    console.log('Respuesta de createReport: ', response);

    if (response.success) {
      navigate('/reportes');
    }
  };



  let shrink = true;

  return (
    <Box
      sx={{
        // width: 1,
        // maxWidth: '1020px',
        // margin: 'auto'
        width: '100%',
        maxWidth: '1400px',
        margin: 'auto',
        padding: '0 16px',
      }}
    >
                  
      <Box
        sx={{
          padding: '16px 0 13px',
        }}
      >
        <Typography
          sx={{
            fontSize: '34px',
            fontWeight: 400,
            lineHeight: '42px',
            letterSpacing: '0.25px',
          }}
        >
          Crea un reporte
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}

      >
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '26.56px',
              mt: '16px',
              mb: '24px',
              color: 'black',
            }}
          >
            Ingrese los siguientes datos para realizar el reporte
          </Typography>
    
          <Grid
            container
            spacing={2.5}
          >
            <Grid
              item
              xs={6}
            >

              <InputForm
                name='title'
                control={control}
                errors={errors}
                label={'Título del reporte *'}
                variant='filled'
                size='medium'
              />
            </Grid>
            <Grid
              item
              xs={6}
            >
              <Controller
                name='typeOfProblem'
                control={control}
                rules={{
                  required: true,
                }}
                render={({
                  field 
                }) => (
                  <FormControl
                    variant={'filled'}
                    size={'medium'}
                    fullWidth
                  >
                    {/* i dont know why i need to put another input label when i use shrink prop */}
                    {!shrink ? (
                      <InputLabel
                        id={'typeOfProblem' + '-label'}
                        shrink={false}
                      >
                        {'Tipo de Problema'}
                      </InputLabel>
                    ) : (
                      <InputLabel
                        id={'typeOfProblem' + '-label'}
                      >{'Tipo de Problema'}</InputLabel>
                    )}
                    <Select
                      size={'medium'}
                      fullWidth
                      variant={'filled'}
                      label={'Tipo de Problema'}
                      {...field}
                    >
                      {tipos.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors['typeOfProblem'] && (
                      <Typography
                        fontSize={'0.85rem'}
                        paddingLeft={1.5}
                        color={'red'}
                      >
                        {errors['typeOfProblem'].message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Controller
                name='description'
                control={control}
                rules={{
                  required: true,
                }}
                render={({
                  field 
                }) => (
                  <FormControl
                    fullWidth
                  >
                    <TextField
                      fullWidth
                      variant='filled'
                      multiline
                      label='Descripción'
                      {...field}
                      minRows={4}
                      rows={4}
                      helperText='Ingrese una descripción del problema para poder brindarle una mejor atención.'
                    />
                    {errors.description && (
                      <Typography
                        fontSize={'0.85rem'}
                        paddingLeft={1.5}
                        color={'red'}
                      >
                        {errors.description.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Controller
                name='banner'
                control={control}
                defaultValue=''
                render={({
                  field 
                }) => (
                  <FormControl
                    fullWidth
                  >
                    <Input
                      {...field}
                      id='image-input'
                      type='file'
                      disableUnderline
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                      sx={{
                        display: 'none',
                      }}
                      inputProps={{
                        accept: 'image/*',
                        hidden: true,
                      }}
                    />
                    <label
                      htmlFor='image-input'
                    >
                      <Box
                        sx={{
                          height: '150px',
                          width: '100%',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          display: 'flex',
                          gap: '16px',
                          flexDirection: 'column',
                          border: '1px solid black',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <img
                          src={addImage}
                        />
                        <Typography
                          sx={{
                            color: '#00000099',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '24px',
                          }}
                        >
                          Añade una foto del problema
                        </Typography>
                      </Box>
                    </label>
                  </FormControl>
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Controller
                name='address'
                control={control}
                rules={{
                  required: true,
                }}
                render={({
                  field 
                }) => (
                  <FormControl
                    fullWidth
                  >
                    <InputForm
                      name='address'
                      control={control}
                      errors={errors}
                      label={'Dirección aproximada del contenedor *'}
                      variant='filled'
                      size='medium'
                    />
                  </FormControl>
                )}
              />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Controller
                name='containerID'
                control={control}
                rules={{
                  required: true,
                }}
                render={({
                  field 
                }) => (
                  <FormControl
                    fullWidth
                  >
                    <InputForm
                      name='containerID'
                      control={control}
                      errors={errors}
                      label={'Identificador del contenedor (6 dígitos)'}
                      variant='filled'
                      helperText={
                        'OPCIONAL. Ingrese el identificador del contenedor para poder brindarle una mejor atención.'
                      }
                      size='medium'
                    />
                  </FormControl>
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <InputForm
                name='email'
                control={control}
                errors={errors}
                label={'Email'}
                variant='filled'
                helperText={'Ingrese su correo electrónico para recibir novedades del reporte'}
                size='medium'
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Box
                sx={{
                  width: 1,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  sx={{
                    backgroundColor: '#12422C',
                    color: 'white',
                    paddingLeft: '85px',
                    paddingRight: '85px',
                    '&:hover': {
                      backgroundColor: '#0a2e1f', // Color verde oscuro al hacer hover
                    },
                  }}
                  type='submit'

                >
                  {isCreateReportLoading ? (
                    <CircularProgress
                      size={24}
                      color='inherit'
                    />
                  ) : (
                    'ENVIAR'
                  )}
                </Button>

              </Box>

            </Grid>

          </Grid>
        </form>

      </Box>

    </Box>
  );
};
