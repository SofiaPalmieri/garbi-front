import {
  Box, Button, Typography 
} from '@mui/material'

export const RightSidePanelContainerInfo = ({
  containerSelected, getBatteryIcon 
}) => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
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
    </Box>
  )
}
