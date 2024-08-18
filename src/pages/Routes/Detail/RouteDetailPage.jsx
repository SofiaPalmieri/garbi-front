import {
  Avatar, Box, Divider, Paper, Typography
} from '@mui/material'
import {
  APIProvider, Map, useMap
} from '@vis.gl/react-google-maps'
import {
  useEffect, useState
} from 'react'
import {
  responseExample
} from './response-example';
import {
  BreadcrumbsComponent
} from '../../../components/BreadcrumbsComponent/BreadcrumbsComponent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const routesDetailArray = [
  {
    type: 'calendar',
    icon: CalendarMonthIcon,
    title: '20/02/2024'
  },
  {
    type: 'duration',
    icon: AccessTimeOutlinedIcon,
    title: 'Duración del reccorido: 55min',
    description: 'Inicio: 20.30 hs \n Fin: 21.25 hs'
  },
  {
    type: 'location',
    icon: LocationOnOutlinedIcon,
    title: 'Villa Del Parque',
    description: 'Área 2'
  }
];

const users = {
  supervisores: [
    {
      id: 1,
      avatar: null,
      fullName: 'Oscar Parraguez'
    }
  ],
  recoletores: [
    {
      id: 2,
      avatar: null,
      fullName: 'Octavio Pardo'
    },
    {
      id: 3,
      avatar: null,
      fullName: 'Juan Edison'
    }
  ]
}


export const RouteDetailPage = () => {

  const apiKeyGoogleMaps = import.meta.env.VITE_REACT_APP_API_KEY_GOOGLE_MAPS;
  const position = {
    lat: -34.5893,
    lng: -58.3994,
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '4.5rem',
          pl: '4rem',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <BreadcrumbsComponent
          prefix={'Recorridos'}
          title={'Recorrido'}
          detail={'#123456'}
        />
      </Box>
      <Divider />
      <Box
        sx={{
          padding: '2rem',
          width: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            width: 1,
            p: '0px 24px 32px',
          }}
        >
          <Box
            sx={{
              width: 1,
              display: 'flex',
              height: '7rem',
              justifyContent: 'space-between',
            }}
          >
            <Paper
              elevation={1}
              sx={{
                height: 1
              }}
            >
              {
                routesDetailArray.map(r => (
                  <RouteBoxDetail
                    key={r.type}
                    icon={r.icon}
                    title={r.title}
                    description={r.description}
                  />
                ))
              }
            </Paper>
            <Paper
              elevation={1}
              sx={{
                height: 1,
                p: '1rem',
                display: 'flex'
              }}
            >

              <Box
                sx={{
                  pr: '3rem'
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '24px',
                    mb: '0.5rem'
                  }}

                >
                  Supervisor
                </Typography>
                {
                  users.supervisores.map(s => (
                    <AvatarFullNameInline
                      key={s.id}
                      avatar={s.avatar}
                      fullName={s.fullName}
                    />
                  ))
                }
              </Box>
              <Divider
                orientation='vertical'
              />
              <Box
                sx={{
                  pl: '3rem'
                }}
              >
                <Typography
                  align='center'
                  sx={{
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '24px',
                    mb: '0.5rem'
                  }}

                >
                  Recolectores
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem'
                  }}
                >
                  {
                    users.recoletores.map(r => (
                      <AvatarFullNameInline
                        key={r.id}
                        avatar={r.avatar}
                        fullName={r.fullName}
                      />
                    ))
                  }
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              height: '110%'
            }}
          >
            <APIProvider
              apiKey={apiKeyGoogleMaps}
            >
              <Map
                defaultZoom={13}
                defaultCenter={position}
                mapId='658a52589c7a963'
                id='garbi-create-area-map'
                disableDefaultUI
                disableDoubleClickZoom
              >
                <Directions />
              </Map>
            </APIProvider>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export const RouteBoxDetail = ({
  icon: Icon, title, description, iconColor = '#0000004D'
}) => {
  return (
    <Box
      sx={{
        padding: '1rem',
        display: 'inline-block',
        verticalAlign: 'top'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '.5rem',
          alignItems: 'center'
        }}
      >
        <Icon
          sx={{
            color: iconColor
          }}
        />
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1.5rem',
            color: '#000000DE'
          }}
        >
          {title}
        </Typography>
      </Box>
      {description && (
        <Box
          sx={{
            pt: '0.5rem',
            pl: '2rem'
          }}
        >
          <Typography
            sx={{
              fontSize: '.875rem',
              fontWeight: 400,
              lineHeight: '1.3125rem',
              whiteSpace: 'pre-line'
            }}
          >
            {description}
          </Typography>
        </Box>)}
    </Box >
  )
}

export const AvatarFullNameInline = ({
  avatar, fullName
}) => {

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        minWidth: '10.5625rem'
      }}
    >
      <Avatar
        src={avatar}
        {...stringAvatar(fullName)}
      />
      <Typography
        sx={{
          fontSize: '1rem',
          fontWeight: 400,
          lineHeight: '1.5rem',
        }}
      >
        {fullName}
      </Typography>
    </Box>
  )
}


function Directions() {
  const map = useMap();
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];

  useEffect(() => {
    if (!map) return;

    drawRoute(responseExample, map);
  }, [map]);

  return (
    <div
      className='directions'
    />
  );
}
const STROKE_COLORS = {
  active: {
    innerStroke: '#4285F4',
    outerStroke: '#185ABC',
  },
  inactive: {
    innerStroke: '#BDC1C6',
    outerStroke: '#80868B',
  },
};

function drawRoute(directionResponse, map) {
  if (!directionResponse) return;
  const path = directionResponse.routes[0].overview_path;

  const innerStroke = new google.maps.Polyline({
    path: path,
    strokeColor: STROKE_COLORS.active.innerStroke,
    strokeOpacity: 1.0,
    strokeWeight: 3,
    zIndex: 10
  });

  const outerStroke = new google.maps.Polyline({
    path: path,
    strokeColor: STROKE_COLORS.active.outerStroke,
    strokeOpacity: 1.0,
    strokeWeight: 6,
    zIndex: 1
  });

  innerStroke.setMap(map);
  outerStroke.setMap(map);
}