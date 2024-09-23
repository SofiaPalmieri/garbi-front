import {
  BarChart 
} from '@mui/x-charts/BarChart';
import {
  axisClasses 
} from '@mui/x-charts/ChartsAxis';
import {
  dataset, valueFormatter 
} from './dataset';
import {
  Box 
} from '@mui/material';

const chartSetting = {
  yAxis: [
    {
      label: '% de contenedores',
    },
  ],
  series: [{
    dataKey: 'seoul',
    label: '% de contenedores',
    valueFormatter 
  }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};


export const StatsBarChart = () => {
  return (
    <Box
      sx={{
        width: '100%' 
      }}
    >
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'day',
            tickPlacement: 'middle',
            tickLabelPlacement: 'middle',
          },
        ]}
        colors={['#86B646CC']}
        {...chartSetting}
      />
    </Box>
  )
}
