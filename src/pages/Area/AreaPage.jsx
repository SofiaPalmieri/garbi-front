import SaveIcon from '@mui/icons-material/Save';
import {
  Box, Button, Divider, keyframes, Paper, Typography
} from '@mui/material';
import {
  APIProvider
} from '@vis.gl/react-google-maps';
import {
  AreaDrawingMap
} from '../../components/AreaDrawingMap';
import {
  BreadcrumbsComponent
} from '../../components/BreadcrumbsComponent';
import {
  useEffect,
  useState
} from 'react';
import {
  InputForm 
} from '../../components/InputForm/InputForm';
import {
  useForm 
} from 'react-hook-form';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AreaPage = () => {
  const [areas, setAreas] = useState([]);
  const [canAddArea, setCanAddArea] = useState(false);
  const [areaSelected, setAreaSelected] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  const {
    control,
    handleSubmit,
    setValue,
    formState: {
      errors
    }
  } = useForm({
    defaultValues: {
      name: '',
      description: ''
    },
  });

  const position = {
    lat: 43.64,
    lng: -79.41,
  };

  const apiKeyGoogleMaps = import.meta.env.VITE_REACT_APP_API_KEY_GOOGLE_MAPS;

  useEffect(() => {
    if (areaSelected) {
      setValue('name', areaSelected.title);
      setValue('description', areaSelected.description);
      setAnimationKey(prevKey => prevKey + 1);
    }
    return () => {
      setValue('name', '')
      setValue('description', '')
    }
  }, [areaSelected, setValue]);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: '16px 32px',
        }}
      >
        <BreadcrumbsComponent
          prefix={'Gestión'}
          title={'Áreas'}
        />
      </Box>
      <Divider />
      <Box
        sx={{
          flexGrow: 1,
          padding: '30px 64px 24px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            height: '3.75rem',
          }}
        >
          {(areaSelected || canAddArea) && (
            <Box
              key={animationKey}
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                animation: (areaSelected || canAddArea) ? `${slideIn} 0.5s forwards` : 'none',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flex: 1,
                  gap: 2,
                  pr: 2,
                }}
              >
                <Box
                  width={0.3}
                >
                  <InputForm
                    control={control}
                    label={'Nombre'}
                    name='name'
                  />
                </Box>
                <Box
                  flex={1}
                >
                  <InputForm
                    control={control}
                    label={'Breve descripción'}
                    name='description'
                  />
                </Box>
              </Box>
              <Button
                size='medium'
                sx={{
                  backgroundColor: '#12422C',
                  color: 'white',
                  height: '40px',
                  padding: '16px',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#12422C',
                  },
                }}
              >
                Guardar Area
                <SaveIcon
                  sx={{
                    marginLeft: '8px',
                    fontSize: '20px',
                  }}
                />
              </Button>
            </Box>)}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <APIProvider
            apiKey={apiKeyGoogleMaps}
          >
            <AreaDrawingMap
              areas={areas}
              setAreas={setAreas}
              canAddArea={canAddArea}
              setCanAddArea={setCanAddArea}
              areaSelected={areaSelected}
              setAreaSelected={setAreaSelected}
            />
          </APIProvider>
        </Box>
        <Box
          sx={{
            marginTop: '12px',
            width: '100%',
            height: '42px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Paper
            sx={{
              elevation: 8,
              padding: '9px 16px',
              width: 'fit-content',
              display: 'flex',
              gap: '32px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <Box
                sx={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: 'red',
                  borderRadius: '50%',
                }}
              />
              <Typography
                sx={{
                  color: '#000',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px' /* 150% */,
                }}
              >
                Área 1
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <Box
                sx={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: 'green',
                  borderRadius: '50%',
                }}
              />
              <Typography
                sx={{
                  color: '#000',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px' /* 150% */,
                }}
              >
                Área 2
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default AreaPage;
