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
  styled,
  Tooltip,
  tooltipClasses,
  Typography,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
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
  useEffect, useState
} from 'react';
import {
  useReports
} from '../../api/hooks/useReports/useReports';
import {
  useContainers
} from '../../api/hooks/useContainers/useContainers';
import {
  APIProvider, AdvancedMarker, Map, useMap
} from '@vis.gl/react-google-maps';

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

const HtmlTooltip = styled(({
  className, ...props
}) => (
  <Tooltip
    {...props}
    classes={{
      popper: className,
    }}
  />
))(({
  theme
}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    padding: 0,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: 'transparent',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#fff',
  },
}));

export const CreateReportForm = () => {
  const addressRegex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñA-ZÁÉÍÓÚÑ\s]*\s\d{1,4}$/;
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

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
    control, handleSubmit, setValue, formState: {
      errors
    }
  } = useForm({
    defaultValues: {
      title: 'sasA',
      description: 'dssadsd',
      type: 'BASURA_EN_LA_CALLE',
      address: '',
      neighborhood: '',
      containerId: '',
      email: 'sdada@saddad.com',
      phone: '465456465'
    },
    resolver: yupResolver(createReportSchema),
  });

  const onSubmit = async (data) => {

    const formData = new FormData();

    data.address = [
      {
        street: data.address.split(' ')[0],
        number: data.address.split(' ')[1],
        neighborhood: data.neighborhood
      }
    ];

    const report = {
      containerId: data.containerId,
      title: data.title,
      description: data.description,
      address: data.address,
      phone: data.phone,
      email: data.email,
      type: data.type
    };

    formData.append('report', JSON.stringify(report));
    formData.append('image', selectedFile);

    try {
      const response = await createReport(formData);  // Envía el FormData al backend

      if (response.success) {
        navigate('/reportes');
      }
    } catch (error) {
      console.error('Error creating report:', error);
    }
  };

  const [containers, setContainers] = useState([]);
  const [containerSelected, setContainerSeleted] = useState(null);
  

  const [userLocation, setUserLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState({
    lat: -34.5893,
    lng: -58.3974 
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLocation);
          if (mapCenter.lat === -34.5893 && mapCenter.lng === -58.3974) {
            setMapCenter(userLocation);
          }
        },
        (error) => {
          console.error('Error getting location: ', error);
        }
      );
    }
  }, [mapCenter]);

  const UserLocationMarker = () => {
    const map = useMap();
  
    useEffect(() => {
      if (!map || !userLocation) return;
  
      new google.maps.Marker({
        position: userLocation,
        map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: '#4285F4',
          fillOpacity: 0.8,
          strokeColor: 'white',
          strokeWeight: 2,
          scale: 8,
        },
      });

      new google.maps.Marker({
        position: userLocation,
        map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          strokeColor: '#4285F4',
          strokeOpacity: 0,
          fillColor: '#4285F4',
          fillOpacity: 0.05,
          scale: 15,
        },
      });
    }, [map, userLocation]);
  
    return null;
  };

  const {
    getContainers: {
      getContainers: getContainers
    },
  } = useContainers();

  const apiKeyGoogleMaps = import.meta.env.VITE_REACT_APP_API_KEY_GOOGLE_MAPS;


  const formatContainers = (containers) => {
    return containers.documents.map((container) => {
      if (!container.coordinates) {
        return {
          ...container,
          lat: 0,
          lng: 0,
        };
      }
      return {
        ...container,
        lat: container.coordinates.lat,
        lng: container.coordinates.lng,
      };
    });
  };

  useEffect(() => {
    const retrieveContainers = async () => {
      const containersUnformated = await getContainers();
      const containersFormated = formatContainers(containersUnformated);

      setContainers(containersFormated);
    };

    try {
      retrieveContainers();
    } catch (e) {
      console.log(e);
    }
  }, []);

  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location: ', error);
        }
      );
    }
  }, []);

  const handleContainerClick = (container) => {
    setValue('address', container.address.street +' '+ container.address.number || '');
    setValue('neighborhood', container.address.neighborhood || '');
    setValue('containerId', container._id.slice(-6));
    setContainerSeleted(container);
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
                    field.onChange(e);
                    const file = e.target.files[0];
                    setSelectedFile(file)
                    if (e.target.files && e.target.files[0]) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        setSelectedImage(event.target.result);
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
          <Box
            width='100%'
            height='400px'
          >
            <APIProvider
              apiKey={apiKeyGoogleMaps}
            >
              <Map
                defaultZoom={16}
                defaultCenter={mapCenter}
                mapId='658a52589c7a963'
                streetViewControl={false}
                mapTypeControl={false}
                zoomControl={false}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                id='garbi-home-map'
                style={{
                  outline: 'none',
                  '&:focus': {
                    outline: 'none',
                  },
                }}
              >
                {userLocation && (
                  <UserLocationMarker />
                )}
                {containers.map((p) => (
                  <CustomMarker
                    setContainerSeleted={handleContainerClick}
                    key={p._id}
                    point={p}
                  />
                ))}
              </Map>
            </APIProvider>
          </Box>
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
            disabled='true'
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
            disabled='true'
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
            disabled='true'
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

function CustomMarker({
  point, setContainerSeleted
}) {
  return (
    <AdvancedMarker
      position={point}
      onClick={() => setContainerSeleted(point)}
    >
      <HtmlTooltip
        placement='top'
        arrow
        title={
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              borderRadius: '4px',
              padding: '8px'
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                color: 'black',
              }}
            > 
              {point.address.street +' '+ point.address.number}
            </Typography>
            <Typography //TODO: update id here to receive the 6 numbers one
              sx={{
                fontSize: '12px',
                fontWeight: 400,
                color: '#9e9e9e',
              }}
            >
              Contenedor #{point._id.slice(-6)}
            </Typography>
          </Box>
        }
      >
        <div>
          <CircleIcon
            sx={{
              color: 'red'
            }}
          />
        </div>
      </HtmlTooltip>
    </AdvancedMarker>
  );
}

