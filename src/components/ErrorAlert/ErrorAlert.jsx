import {
  Alert, AlertTitle, Box
} from '@mui/material';

export const ErrorAlert = ({
  title, errors
}) => {
  return (
    <Box
      sx={{
        paddingInline: '24px'
      }}
    >  
      <Alert
        severity='error'
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
          {errors}
        </Box>
      </Alert>
    </Box>
  );
};
