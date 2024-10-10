import CircleIcon from '@mui/icons-material/Circle';
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
  AdvancedMarker
} from '@vis.gl/react-google-maps';
import {
  MapWithContainers
} from '../../components/MapWithContainers';
import {
  useState
} from 'react';





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
import {
  RightSidePanel
} from '../../components/RightSidePanel/RightSidePanel';
import {
  RightSidePanelContainerInfo
} from '../../components/RightSidePanelContainerInfo/RightSidePanelContainerInfo';
import {
  RightSidePanelOptimalRouteIinfo
} from '../../components/RightSidePanelOptimalRouteInfo';
import {
  useOptimalRoutes 
} from '../../api/hooks/useOptimalRoutes/useOptimalRoutes';
import {
  HEIGHT_HEADER_FILTER_SIDE_COMPONENT 
} from '../../config';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  ModalAdjustContainersThreshold 
} from '../../modales/ModalAdjustContainersThresholds/ModalAdjustContainersThresholds';
import {
  useCompanies 
} from '../../api/hooks/useCompanies/useCompanies';
import {
  useContainers 
} from '../../api/hooks/useContainers/useContainers';
import {
  useEffect 
} from 'react';
import {
  useFetchCompany 
} from '../../api/hooks/useCompanies/request';
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

const addColorToContainers = (containers, company) => {
  console.log('Contenedores originales:', containers);
  console.log('Compañía:', company);
  
  if (containers && company) {
    const updatedContainers = containers.map((c) => ({
      ...c,
      color: getColorPoint(c.capacity, company),
    }));
    console.log('Contenedores actualizados:', updatedContainers);
    return updatedContainers;
  }
  return containers || [];
};


const getColorPoint = (capacity, company) => {
  if (!company || !company.threshold) {
    return '#000'; 
  }

  if (capacity > company.threshold.full) {
    return colors.HIGH_CAPACITY;
  } else if (capacity <= company.threshold.warning) {
    return colors.LOW_CAPACITY;
  } else {
    return colors.MEDIUM_CAPACITY;
  }
};

const getBatteryIcon = (battery, company) => {
  const index = Math.min(Math.floor(battery / 12.5), icons.length - 1);
  const IconComponent = icons[index];
  console.log(100 - battery);
  return (
    <IconComponent
      sx={{
        color: getColorPoint(100 - battery, company),
      }}
    />
  );
};

const colors = {
  LOW_CAPACITY: '#2E7D32',
  MEDIUM_CAPACITY: '#EF6C00',
  HIGH_CAPACITY: '#D32F2F'
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



export default function HomeMainContent({
  containers, areas, containerSelected, setContainerSelected
}) {

  const [openGenerateOptimalRouteModal, setOpenGenerateOptimalRouteModal] = useState(false)
  const [optimalRouteSelected, setOptimalRouteSelected] = useState(null)
  const [openGenerateOptimalRouteRightSideInfo, setOpenGenerateOptimalRouteRightSideInfo] = useState(false)

  const [optimalRoutes, setOptimalRoutes] = useState(null)
  const [openAdjustThresholdsModal, setOpenAdjustThresholdsModal] = useState(false);
  const handleOpenAdjustThresholdsModal = () => {
    setOpenAdjustThresholdsModal(true)
  };
  const handleCloseAdjustThresholdsModal = () => {
    setOpenAdjustThresholdsModal(false)
  };


  const handleOpenGenerateOptimalRouteModal = () => setOpenGenerateOptimalRouteModal(true)
  const handleCloseOpenGenerateOptimalRouteModal = () => setOpenGenerateOptimalRouteModal(false)
  const handleCloseRightSidePanelContainerInfo = () => setContainerSelected(null)
  const handleCloseRightSidePanelOptimalRouteInfo = () => setOpenGenerateOptimalRouteRightSideInfo(false)
  const handleOpenRightSidePanelOptimalRouteInfo = () => {
    handleCloseOpenGenerateOptimalRouteModal()
    setOpenGenerateOptimalRouteRightSideInfo(true)
  }

  const position = {
    lat: -34.5893,
    lng: -58.3974,
  };
  const {
    reviewCompany: {
      reviewCompany,
      isReviewCompanyLoading 
    },
  } = useCompanies(); 

  const {
    getOptimalRoutes: {
      getOptimalRoutes,
      isLoadingGetOptimalRoutes
    }
  } = useOptimalRoutes()

  const {
    getAllContainers: {
      getAllContainers,
      isLoadingGetAllContainers
    }
  } = useContainers()


  const apiKeyGoogleMaps = import.meta.env.VITE_REACT_APP_API_KEY_GOOGLE_MAPS;


  const fetchOptimalRoutes = async (areaId) => {
    // lo comento para usar el mock y no generar bill
    const optimalRoutes = await getOptimalRoutes(areaId)

    // TODO BORRAR ESTO Y PONER LA LINEA DE ARRIBA
    // const optimalRoutes = getOptimalRoutesMocked()

    setOptimalRoutes(optimalRoutes)
    setOptimalRouteSelected(optimalRoutes.optimalRouteFull)
  }
  const [containersFormatted, setContainersFormatted] = useState([])
  const {
    getCompany, isLoading 
  } = useFetchCompany();

  
  const [company, setCompany] = useState(null);
  

  const information = company && company.threshold ? [
    {
      color: colors.LOW_CAPACITY,
      valor: '-' + company.threshold.warning + '%'
    },
    {
      color: colors.MEDIUM_CAPACITY,
      valor: company.threshold.warning +'% - ' + company.threshold.full +'%'
    },
    {
      color: colors.HIGH_CAPACITY,
      valor: '+' + company.threshold.full + '%'
    },
    
   
  ] : [];

  const [thresholdInformation, setThresholdInformation] = useState(information)


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const companyId = user?.companyId;
    if (companyId) {
      getCompany(companyId).then((response) => {
        setCompany(response);
      });
    }
    if (containers && company) {
      const updatedContainers = addColorToContainers(containers, company);
      setContainersFormatted(updatedContainers);
    }

    const newThresholds = company && company.threshold ? [
      {
        color: colors.LOW_CAPACITY,
        valor: '-' + company.threshold.warning + '%'
      },
      {
        color: colors.MEDIUM_CAPACITY,
        valor: company.threshold.warning +'% - ' + company.threshold.full +'%'
      },
      {
        color: colors.HIGH_CAPACITY,
        valor: '+' + company.threshold.full + '%'
      },
      
     
    ] : [];
    setThresholdInformation(newThresholds)
  }, [containers, company]);
  
  

  const onGenerateOptimalRoute = (data) => {
    fetchOptimalRoutes(data.areaId)
    handleCloseOpenGenerateOptimalRouteModal()
    setOpenGenerateOptimalRouteRightSideInfo(true)
  }

  const [mapKey, setMapKey] = useState(0);

  const handleCompanyUpdate = async (reviewCompanyBody) => {
    try {
      const response = await reviewCompany(reviewCompanyBody.id, reviewCompanyBody);
      console.log('Company updated successfully', response);

      setMapKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.error('Error updating company:', error);
    }
  };
  
  return (
    <>
      <Box
        width='100%'
        height={`calc(100% - ${HEIGHT_HEADER_FILTER_SIDE_COMPONENT})`}
      >
        <ModalCreateResource
          title={'Generar ruta óptima'}
          open={openGenerateOptimalRouteModal}
          handleClose={handleCloseOpenGenerateOptimalRouteModal}
          form={<GenerateOptimalRouteForm
            onGenerateOptimalRoute={onGenerateOptimalRoute}
            handleClose={handleCloseOpenGenerateOptimalRouteModal}
            handleOpenRightSideOptimalRouteInfo={handleOpenRightSidePanelOptimalRouteInfo}
            areas={areas}
          />}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'end',
            pt: '24px',
            alignItems: 'center',
            gap: '11px',
            pr: '32px',
          }}
        >
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
            <MapWithContainers
              key={mapKey} 
              apiKey={apiKeyGoogleMaps}
              zoom={15}
              areas={areas}
              route={optimalRouteSelected}
              centerPosition={position}
              containers={containersFormatted.map((p) => (
                <Marker
                  key={p.id}
                  setContainerSelected={setContainerSelected}
                  point={p}
                  markerColor={p.color}
                />
              ))}
            />

          </Box>
          {containerSelected && (
            <RightSidePanel
              handleClose={handleCloseRightSidePanelContainerInfo}
              componentToRender={
                <RightSidePanelContainerInfo
                  containerSelected={containerSelected}
                  getBatteryIcon={getBatteryIcon}
                  company={company}

                />
              }
            />
          )}
          {
            openGenerateOptimalRouteRightSideInfo && (
              <RightSidePanel
                disablePadding={true}
                handleClose={handleCloseRightSidePanelOptimalRouteInfo}
                componentToRender={<RightSidePanelOptimalRouteIinfo 
                  routeSelected={optimalRouteSelected}
                  optimalRoutes={optimalRoutes}
                  setRouteSelected={setOptimalRouteSelected}
                />}
              />
            )
          }
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
          {thresholdInformation.map((i, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <CircleIcon
                sx={{
                  color: i.color,
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
                {i.valor}
              </Typography>
            </Box>
          ))}
          
          <Button
            sx={{
              borderRadius: '50%',
              minWidth: '40px',
              width: '40px',
              height: '40px',
            }}
            onClick={handleOpenAdjustThresholdsModal}
          >
            <SettingsIcon />
          </Button>
          <ModalAdjustContainersThreshold
            open={openAdjustThresholdsModal}
            handleClose={handleCloseAdjustThresholdsModal}
            onSubmit={handleCompanyUpdate}
            company={company}
          />
        </Paper>
      </Box>
    </>
  );
}

function Marker({
  point, setContainerSelected, markerColor 
}) {
  return (
    <AdvancedMarker
      position={point}
      onClick={() => setContainerSelected(point)}
    >
      <HtmlTooltip
        placement='top'
        title={
          <Box
            position={'relative'}
          >
            <Box
              width={'88px'}
              height={'42px'}
              sx={{
                borderRadius: '4px',
                overflow: 'hidden' 
              }}
            >
              <LinearProgress
                variant='determinate'
                value={point.capacity}
                sx={{
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: markerColor,
                  },
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column' 
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '14px',
                    color: 'black',
                    marginTop: '4px' 
                  }}
                >
                  {point.capacity}% lleno
                </Typography>
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontWeight: 300,
                    lineHeight: '14px',
                    color: '#00000061' 
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
              color: markerColor 
            }}
          /> 
        </div>
      </HtmlTooltip>
    </AdvancedMarker>
  );
}

