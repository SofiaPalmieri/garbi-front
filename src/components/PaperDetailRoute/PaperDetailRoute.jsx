import {
  Paper 
} from '@mui/material'
import {
  RouteBoxDetail 
} from '../RouteBoxDetail'


export const PaperDetailRoute = ({
  routesDetailArray
}) => {
  return (
    <Paper
      elevation={1}
      sx={{
        height: 1,
        flexBasis: '48%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingInline: '8px', 
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
  )
}
