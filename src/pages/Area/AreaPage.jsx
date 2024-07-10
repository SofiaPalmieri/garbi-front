import {
  Box, Button, Divider, Paper, Typography 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  APIProvider, Map 
} from '@vis.gl/react-google-maps';

const AreaPage = () => {
  const position = {
    lat: 43.64,
    lng: -79.41,
  };
  const apiKeyGoogleMaps = import.meta.env.VITE_REACT_APP_API_KEY_GOOGLE_MAPS;

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
          padding: '16px 64px 14px',
        }}
      >
        <Typography
          sx={{
            fontSize: '34px',
            fontWeight: 400,
            lineHeight: '42px',
          }}
        >
          Áreas
        </Typography>
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
            justifyContent: 'end',
          }}
        >
          <Button
            size='medium'
            sx={{
              backgroundColor: '#12422C',
              color: 'white',
              height: '36px',
              padding: '16px',
              marginBottom: '24px',
              '&:hover': {
                backgroundColor: '#12422C',
              },
            }}
          >
            Nueva Area
            <AddIcon
              sx={{
                marginLeft: '8px',
                fontSize: '20px',
              }}
            />
          </Button>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <APIProvider
            apiKey={apiKeyGoogleMaps}
          >
            <Map
              defaultZoom={9}
              defaultCenter={position}
              mapId='658a52589c7a963'
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
