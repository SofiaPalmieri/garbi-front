import {
  Typography 
} from '@mui/material'
import {
  Box 
} from '@mui/system'
import {
  RouteOptimalInfo 
} from '../RouteOptimalInfo/RouteOptimalInfo'

export const RightSidePanelOptimalRouteIinfo = () => {
  return (
    <Box
      sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography
        sx={{
          padding: '.5rem 1rem'
        }}
      >
        Rutas óptimas
      </Typography>
      <Box
        sx={{
          flex: 1,
          overflow: 'auto'
        }}
      >
        <RouteOptimalInfo
          selected = {true}
        />
        <RouteOptimalInfo
          selected = {false}
        />
      </Box>
    </Box >
  )
}
