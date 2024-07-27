import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
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
  mixed, object, string 
} from 'yup';
import {
  useNavigate 
} from 'react-router-dom';
import {
  useState 
} from 'react';
import {
  useReports 
} from '../../api/hooks/useReports/useReports';

const tipos = [
  {
    value: 'CONTENEDOR_ROTO',
    label: 'Contenedor en mal estado' 
  },
  {
    value: 'CONTENEDOR_SUCIO',
    label: 'Contenedor sucio' 
  },
  {
    value: 'BASURA_EN_LA_CALLE',
    label: 'Basura en la calle' 
  },
  {
    value: 'CONTENEDOR_FALTANTE',
    label: 'Contenedor faltante' 
  },
  {
    value: 'OTROS',
    label: 'Otro' 
  },
];

export const CreateReportForm = () => {
  const addressRegex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñA-ZÁÉÍÓÚÑ\s]*\s\d{1,4}$/;
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    createReport: {
      createReport, isCreateReportLoading 
    }
  } = useReports();

  const navigate = useNavigate()

  const createReportSchema = object({
    title: string().required('El titulo es un campo obligatorio'),
    type: string().required('Debe seleccionar una opcion'),
    description: string().required('La descripcion es un campo obligatorio'),
    address: string().required(),
    containerId: string().length(6, 'El identificador del contenedor debe tener 6 caracteres')
      .optional(),
    email: string().email('Debe ser un email valido')
      .required('El mail es un campo obligatorio'),
    image: mixed(),
    neighborhood: string().required(),
    phone: string()
  }).required();

  const {
    control, handleSubmit, formState: {
      errors 
    } 
  } = useForm({
    defaultValues: {
      title: 'sasA',
      description: 'dssadsd',
      type: 'BASURA_EN_LA_CALLE',
      address: 'Medrano 900',
      neighborhood: 'sasdds',
      containerId: 'asdasd',
      email: 'sdada@saddad.com',
      phone: '465456465'
    },
    resolver: yupResolver(createReportSchema),
  });

  const onSubmit = async (data) => {
    console.log('🚀 ~ onSubmit ~ data:', data)
    const formData = new FormData();

    data.address = [
      {
        'street': data.address.split(' ')[0],
        'number': data.address.split(' ')[1],
        'neighborhood': data.neighborhood
      }
    ]

    const request = {
      title: data.title,
      type: data.type,
      description: data.description,
      address: data.address,
      containerId: data.containerId,
      email: data.email,
      phone: data.phone,
      image: selectedImage
    }

    console.log('🚀 ~ onSubmit ~ data:', request)

    // formData.append('title', data.title);
    // formData.append('type', data.type);
    // formData.append('description', data.description);
    // formData.append('address', data.address);
    // formData.append('containerId', data.containerId);
    // formData.append('email', data.email);
    // formData.append('phone', data.phone);

    // if (selectedImage) {
    //   formData.append('image', selectedImage);  // Añade la imagen al FormData
    // }

    try {
      const response = await createReport(request);  // Envía el FormData al backend

      if (response.success) {
        navigate('/reportes');
      }
    } catch (error) {
      console.error('Error creating report:', error);
    }
  };

  return (
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
            name='type'
            control={control}
            rules={{
              required: true 
            }}
            render={({
              field 
            }) => (
              <FormControl
                variant={'filled'}
                size={'medium'}
                fullWidth
              >
                <InputLabel
                  id={'type' + '-label'}
                >Tipo de Problema</InputLabel>
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
                {errors['type'] && (
                  <Typography
                    fontSize={'0.85rem'}
                    paddingLeft={1.5}
                    color={'red'}
                  >
                    {errors['type'].message}
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
          <InputForm
            name='description'
            control={control}
            errors={errors}
            label={'Descripción'}
            variant='filled'
            size='medium'
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Controller
            name='image'
            control={control}
            defaultValue=''
            render={({
              field 
            }) => (
              <FormControl
                fullWidth
              >
                <Input
                  id='image-input'
                  type='file'
                  disableUnderline
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        field.onChange(event.target.result); // Set the base64 string to the controller
                        setSelectedImage(event.target.result); // Update the local state with the image URL
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                  sx={{
                    display: 'none' 
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
                      src={selectedImage ? selectedImage : addImage}
                      alt='Selected'
                      style={{
                        height: '100px',
                        width: 'auto' 
                      }}
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
          <InputForm
            name='address'
            control={control}
            errors={errors}
            label={'Dirección aproximada del contenedor *'}
            variant='filled'
            size='medium'
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <InputForm
            name='neighborhood'
            control={control}
            errors={errors}
            label={'Barrio *'}
            variant='filled'
            size='medium'
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <InputForm
            name='containerId'
            control={control}
            errors={errors}
            label={'Identificador del contenedor (6 dígitos)'}
            variant='filled'
            size='medium'
          />
        </Grid>
        <Grid
          item
          xs={6}
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
          xs={6}
        >
          <InputForm
            name='phone'
            control={control}
            errors={errors}
            label={'Número de teléfono'}
            variant='filled'
            helperText={'Ingrese su número de teléfono para recibir novedades del reporte'}
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
              justifyContent: 'center' 
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
  );
};
