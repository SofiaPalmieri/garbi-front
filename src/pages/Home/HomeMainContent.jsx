import CircleIcon from '@mui/icons-material/Circle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Box,
  LinearProgress,
  Paper,
  styled,
  Tooltip,
  tooltipClasses,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import {
  APIProvider, AdvancedMarker, Map
} from '@vis.gl/react-google-maps';
import {
  useEffect, useState
} from 'react';
import {
  useContainers
} from '../../api/hooks/useContainers/useContainers';
import CloseIcon from '@mui/icons-material/Close';
import './HomeMainContent.css';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import Battery1BarIcon from '@mui/icons-material/Battery1Bar';
import Battery2BarIcon from '@mui/icons-material/Battery2Bar';
import Battery3BarIcon from '@mui/icons-material/Battery3Bar';
import Battery4BarIcon from '@mui/icons-material/Battery4Bar';
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import {
  ModalCreateResource 
} from '../../modales/ModalCreateResource';
import {
  GenerateOptimalRouteForm 
} from '../../forms/GenerateOptimalRoute';

const icons = [
  Battery0BarIcon,
  Battery1BarIcon,
  Battery2BarIcon,
  Battery3BarIcon,
  Battery4BarIcon,
  Battery5BarIcon,
  Battery6BarIcon,
  BatteryFullIcon,
];

const getBatteryIcon = (battery) => {
  const index = Math.min(Math.floor(battery / 12.5), icons.length - 1);
  const IconComponent = icons[index];
  console.log(100 - battery);
  return (
    <IconComponent
      sx={{
        color: getColorPoint(100 - battery),
      }}
    />
  );
};

const colors = {
  LOW_CAPACITY: '#D32F2F',
  MEDIUM_CAPACITY: '#EF6C00',
  HIGH_CAPACITY: '#2E7D32',
};

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
}));

const getColorPoint = (capacity) => {
  if (capacity > 75) {
    return colors.LOW_CAPACITY;
  } else if (capacity <= 25) {
    return colors.HIGH_CAPACITY;
  } else {
    return colors.MEDIUM_CAPACITY;
  }
};

export default function HomeMainContent() {

  const [openGenerateOptimalRouteModal, setOpenGenerateOptimalRouteModal] = useState(true)

  const handleOpenGenerateOptimalRouteModal = () => setOpenGenerateOptimalRouteModal(true)
  const handleCloseOpenGenerateOptimalRouteModal = () => setOpenGenerateOptimalRouteModal(false)

  const position = {
    lat: -34.5893,
    lng: -58.3974,
  };
  const {
    getContainers: {
      getContainers: getContainers
    },
  } = useContainers();
  const [containers, setContainers] = useState([]);
  const apiKeyGoogleMaps = import.meta.env.VITE_REACT_APP_API_KEY_GOOGLE_MAPS;
  const [containerSelected, setContainerSeleted] = useState(null);

  const formatContainers = (containers) => {
    return containers.documents.map((container) => {
      if(!container.coordinates){
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

  // useEffect(() => {
  //   console.log(containerSelected)
  // }, [containerSelected])

  return (
    <>
      <Box
        width='100%'
        height={'calc(100% - 83px)'}
      >
        <ModalCreateResource
          title={'Generar ruta óptima'}
          open={openGenerateOptimalRouteModal}
          handleClose={handleCloseOpenGenerateOptimalRouteModal}
          form={<GenerateOptimalRouteForm
            handleClose={handleCloseOpenGenerateOptimalRouteModal}
          />}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'end',
            marginTop: '24px',
            alignItems: 'center',
            gap: '11px',
            pr: '32px',
          }}
        >
          <InfoOutlinedIcon
            sx={{
              color: '#0000008F',
            }}
            widht='24px'
            height='24px'
            top='2px'
            left='2px'
          />
          <Button
            width='177px'
            height='26px'
            font='button/large'
            fontFamily='Roboto'
            fontSize='15px'
            variant='contained'
            color='primary'
            size='large'
            sx={{
              backgroundColor: '#12422C',
            }}
            onClick={handleOpenGenerateOptimalRouteModal}
          >
            Generar Ruta Óptima
          </Button>
        </Box>
        <Box
          width='100%'
          sx={{
            height: 'calc(100% - 140px)'
          }}
          padding={'24px 32px 12px'}
          position={'relative'}
          overflow={'hidden'}
        >
          <Box
            width={1}
            height={'110%'}
          >
            <APIProvider
              apiKey={apiKeyGoogleMaps}
            >
              <Map
                defaultZoom={12}
                defaultCenter={position}
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
                {containers.map((p) => (
                  <Marker
                    setContainerSeleted={setContainerSeleted}
                    key={p._id}
                    point={p}
                  />
                ))}
              </Map>
            </APIProvider>
          </Box>
          {containerSelected && (
            <Paper
              elevation={4}
              sx={{
                width: '320px',
                height: 'calc(100% - 28px)',
                backgroundColor: 'white',
                position: 'absolute',
                top: '26px',
                right: '34px',
                padding: '24px 40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box
                position='relative'
              >
                <Button
                  sx={{
                    padding: 0,
                    minWidth: 0,
                    borderRadius: '50%',
                    position: 'absolute',
                    right: '-30px',
                    top: '-15px',
                  }}
                  onClick={() => setContainerSeleted(null)}
                >
                  <CloseIcon
                    sx={{
                      color: 'black',
                    }}
                  />
                </Button>
                <Typography
                  sx={{
                    color: 'rgba(0, 0, 0, 0.60)',
                    fontFeatureSettings: '\'clig\' off, \'liga\' off',
                    fontFamily: 'Roboto',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '14px',
                    letterSpacing: '0.1px',
                    mb: 2,
                  }}
                >
                  ID #{containerSelected.sensorId}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(0, 0, 0, 0.87)',
                    fontFamily: 'Roboto',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '32px',
                    letterSpacing: '0.1px',
                  }}
                >
                  {containerSelected.capacity}% lleno
                </Typography>
                <Typography
                  sx={{
                    color: ' rgba(0, 0, 0, 0.60)',
                    fontFeatureSettings: '\'clig\' off, \'liga\' off',
                    fontFamily: 'Roboto',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    lineHeight: '16px',
                    letterSpacing: '0.1px',
                    mb: 2,
                  }}
                >
                  Actualizado hace 10 min
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(0, 0, 0, 0.87)',
                    fontFeatureSettings: '\'clig\' off, \'liga\' off',
                    fontFamily: 'Roboto',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '32px',
                    letterSpacing: '0.1px',
                  }}
                >
                  Villa Pueyrredón - Área 2
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(0, 0, 0, 0.87)',
                    fontFeatureSettings: '\'clig\' off, \'liga\' off',
                    fontFamily: 'Roboto',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    lineHeight: '24px',
                    letterSpacing: '0.1px',
                    mb: 2,
                  }}
                >
                  Av. Honorio Pueyrredón 123
                </Typography>
                <Box
                  display={'flex'}
                  mb={2}
                >
                  <Typography
                    sx={{
                      color: 'rgba(0, 0, 0, 0.87)',
                      fontFeatureSettings: '\'clig\' off, \'liga\' off',
                      fontFamily: 'Roboto',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '32px',
                      letterSpacing: '0.1px',
                      mr: 0.4,
                    }}
                  >
                    Última Recolección:{' '}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'var(--text-primary, rgba(0, 0, 0, 0.87))',
                      fontFeatureSettings: '\'clig\' off, \'liga\' off',
                      fontFamily: 'Roboto',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '32px',
                      letterSpacing: '0.1px',
                    }}
                  >
                    26/4 - 21.35 hs
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: 'var(--text-primary, rgba(0, 0, 0, 0.87))',
                    fontFeatureSettings: '\'clig\' off, \'liga\' off',
                    fontFamily: 'Roboto',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    lineHeight: '32px',
                    letterSpacing: '0.1px',
                    mb: 2,
                  }}
                >
                  Contenedor bilateral
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {getBatteryIcon(containerSelected.battery)}
                  <Typography
                    sx={{
                      color: 'rgba(0, 0, 0, 0.87)',
                      fontFeatureSettings: '\'clig\' off, \'liga\' off',
                      fontFamily: 'Roboto',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '32px', // 228.571%
                      letterSpacing: '0.1px',
                      marginRight: '0.5rem',
                    }}
                  >
                    Batería:
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(0, 0, 0, 0.87)',
                      fontFeatureSettings: '\'clig\' off, \'liga\' off',
                      fontFamily: 'Roboto',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '32px',
                      letterSpacing: '0.1px',
                      marginRight: '0.5rem',
                    }}
                  >
                    {containerSelected.battery}%
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  fullWidth
                >Reportes históricos</Button>
                <Button
                  fullWidth
                >Reportes activos</Button>
              </Box>
            </Paper>
          )}
        </Box>
        <Paper
          elevation={6}
          sx={{
            margin: 'auto',
            marginBottom: '16px',
            width: 'fit-content',
            display: 'flex',
            padding: '9px 16px',
            gap: '32px',
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <CircleIcon
              sx={{
                color: colors.LOW_CAPACITY,
                mr: '16px',
              }}
            />
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 'bold',
                lineHeight: '24px',
                color: '#000000',
              }}
            >
              {' '}
              +75%
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <CircleIcon
              sx={{
                color: colors.MEDIUM_CAPACITY,
                mr: '16px',
              }}
            />
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 'bold',
                lineHeight: '24px',
                color: '#000000',
              }}
            >
              {' '}
              25% - 75%
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <CircleIcon
              sx={{
                color: colors.HIGH_CAPACITY,
                mr: '16px',
              }}
            />
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 'bold',
                lineHeight: '24px',
                color: '#000000',
              }}
            >
              {' '}
              -25%
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

function Marker({
  point, setContainerSeleted
}) {
  return (
    <AdvancedMarker
      position={point}
      // ref={markerRef}
      onClick={() => setContainerSeleted(point)}
    >
      <HtmlTooltip
        placement='top'
        slotProps={{
          popper: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, -7],
                },
              },
            ],
          },
        }}
        title={
          <Box
            position={'relative'}
          >
            <Box
              width={'88px'}
              height={'42px'}
              sx={{
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <LinearProgress
                variant='determinate'
                value={point.capacity}
                sx={{
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: getColorPoint(point.capacity),
                  },
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '14px',
                    color: 'black',
                    marginTop: '4px',
                  }}
                >
                  {point.capacity}% lleno
                </Typography>
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontWeight: 300,
                    lineHeight: '14px',
                    color: '#00000061',
                  }}
                >
                  hace 10 mins
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: '6px',
                height: '6px',
                backgroundColor: 'white',
                position: 'absolute',
                left: '50%',
                bottom: '-3px',
                transform: 'translateX(-50%) rotate(-45deg)',
              }}
            />
          </Box>
        }
      >
        <div>
          <CircleIcon
            sx={{
              color: getColorPoint(point.capacity),
            }}
          />
        </div>
      </HtmlTooltip>
    </AdvancedMarker>
  );
}
