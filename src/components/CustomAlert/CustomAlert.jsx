import {
  Alert, AlertTitle, Box
} from '@mui/material';

export const CustomAlert = ({
  severity, title, message
}) => {
  return (
    <Box
      sx={{
        paddingInline: '24px'
      }}
    >  
      <Alert
        severity={severity}
      >
        <AlertTitle>{title}</AlertTitle>
        <Box
          component='ul'
          sx={{
            paddingLeft: '16px',
            margin: 0,
            wordWrap: 'break-word',
          }}
        >
          {message}
        </Box>
      </Alert>
    </Box>
  );
};
