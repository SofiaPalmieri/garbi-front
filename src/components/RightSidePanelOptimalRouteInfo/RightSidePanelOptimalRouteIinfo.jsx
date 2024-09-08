import {
  Typography
} from '@mui/material'
import {
  Box
} from '@mui/system'
import {
  RouteOptimalInfo
} from '../RouteOptimalInfo/RouteOptimalInfo'

export const RightSidePanelOptimalRouteIinfo = ({
  routeSelected, optimalRoutes, setRouteSelected 
}) => {

  if (!routeSelected) return;

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
          padding: '.5rem 1rem',
          color: '#000',
          fontSize: '1rem',
          fontWeight: 500,
          lineHeight: '160%'
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
          name={'Solo contenedores llenos'}
          color={'#2E7D32'}
          colorNoSelected={'rgba(46, 125, 50, 0.30)'}
          selected={routeSelected.id == optimalRoutes.optimalRouteFull.id}
          onClick={() => setRouteSelected(optimalRoutes.optimalRouteFull)}
        />
        <RouteOptimalInfo
          name={'Contenedores llenos y próximos a llenarse'}
          color={'#EF6C00'}
          colorNoSelected={'rgba(239, 108, 0, 0.30)'}
          selected={routeSelected.id == optimalRoutes.optimalRouteWarningAndFull.id}
          onClick={() => setRouteSelected(optimalRoutes.optimalRouteWarningAndFull)}
        />
        <RouteOptimalInfo
          name={'Solo contenedores llenos'}
          color={'#D32F2F'}
          colorNoSelected={'rgba(211, 47, 47, 0.30)'}
          selected={routeSelected.id == optimalRoutes.optimalRouteAll.id}
          onClick={() => setRouteSelected(optimalRoutes.optimalRouteAll)}
        />
      </Box>
    </Box >
  )
}
