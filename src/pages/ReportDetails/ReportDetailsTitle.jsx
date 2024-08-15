import {
  Typography, Box 
} from '@mui/material';

const navigationTitle = 'Reportes > Reporte';

export const ReportDetailsTitle = ({
  title 
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '42px',
        padding: '0px 64px 0px 64px',
      }}
    >
      <Typography
        sx={{
          width: '80%',
          height: '42px',
          fontFamily: 'Roboto',
          fontSize: '34px',
          fontWeight: '400',
          lineHeight: '41.99px',
          letterSpacing: '0.25px',
          textAlign: 'left',
          marginTop: '20px'
        }}
      >
        {navigationTitle} {title}
      </Typography>
    </Box>
  );
};
