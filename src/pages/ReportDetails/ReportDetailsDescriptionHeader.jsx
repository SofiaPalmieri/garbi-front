import {
  Typography, Box, Chip 
} from '@mui/material';

export const ReportDetailsDescriptionHeader = ({
  title, state 
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center', 
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '39.84px',
            letterSpacing: '0.4px',
            textAlign: 'left'
          }}
        >
          {title}
        </Typography>
        <Chip
          label={state}
          color='default'
          size='small'
          variant='outlined'
          sx={{
            marginLeft: '20px', 
            padding: '3px 4px',
            gap: '0px',
            border: '1px 0px 0px 0px'
          }}
        />
      </Box>
    </Box>
  );
};
