import {
  LineChart
} from '@mui/x-charts/LineChart';

export const LineBarChart = ({
  chartSetting 
}) => {

  return (
    <LineChart
      {...chartSetting}
      height={300}
      colors={['#86B646CC']}
    />
  );
}
