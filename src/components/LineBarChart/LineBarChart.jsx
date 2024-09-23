import {
  LineChart 
} from '@mui/x-charts/LineChart';

export const LineBarChart = () => {
  const data = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']

  return (
    <LineChart
      xAxis={[{
        data 
      }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5,2, 5.5, 2, 8.5, 1.5, 5, 2, 5.5, 2, 8.5, 1.5, 5, 2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      height={300}
      colors={['#86B646CC']}
    />
  );
}
