import {
  Box, Typography 
} from '@mui/material'

export const RouteOptimalInfo = ({
  selected 
}) => {
  return (
    <Box
      sx={{
        padding: '1rem',
        height: '9rem',
        borderLeft: selected ? '4px solid black' : 0,
        boxShadow: '0px 2px 1px -1px #00000033, 0px 1px 1px 0px #00000024, 0px 1px 3px 0px #0000001F'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: '8px'
        }}
      >
        <Typography
          sx={{
            //styleName: typography/h6;
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: '2rem',
          }}
        >
          Ruta 1
        </Typography>
        <Typography
          sx={{
            //styleName: typography/h6;
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: '2rem',
          }}
        >65 min</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px'
          }}
        >Ruta más rápida</Typography>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px'
          }}
        >9 km</Typography>
      </Box>
    </Box>
  )
}
