import {
  Box, Paper
} from '@mui/material';


import {
  ReportStatusSelect
} from '../../components/ReportStatusSelect';

export const ReportDetails = ({
  reportId, content, state
}) => {
  console.log('🚀 ~ content:', content)
  return (
    <Box
      sx={{
        width: '288px'
      }}
    >
      <Box
        sx = {{
          height: '4rem',
          display: 'flex'
        }}
      >
        <ReportStatusSelect
          reportId={reportId}
          reportState={state}
        />
      </Box>
      <Paper
        sx={{
          width: '100%',
          border: '1px solid',
          borderColor: '#0000001F',
        }}
      />
    </Box>
  );
};
