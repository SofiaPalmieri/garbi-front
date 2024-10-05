import {
  Box
} from '@mui/material';
import {
  BarChart
} from '@mui/x-charts/BarChart';


export const StatsBarChart = ({
  data, chartSetting
}) => {
  return (
    <Box
      sx={{
        width: '100%' 
      }}
    >
      <BarChart
        dataset={data}
        colors={['#86B646CC']}
        {...chartSetting}
      />
    </Box>
  )
}
