import {
  Box, Paper 
} from '@mui/material';
import {
  ReportDetailsSideComponent 
} from '../../components/ReportDetailsSideComponent/ReportDetailsSideComponent';
import {
  ReportStatusSelect
} from '../../components/ReportStatusSelect';

const colors = {
  NEW: '#EF6C0080',
  REVIEW: '#2196F3',
  SOLVED: '#2E7D3280',
};

const getColor = (state) => {
  if (state === 'NUEVO') {
    return colors.NEW;
  } else if (state === 'EN REVISIÓN') {
    return colors.REVIEW;
  } else {
    return colors.SOLVED;
  }
};

export const ReportDetails = ({
  reportId, content, state 
}) => {
  return (
    <Box
      sx={{
        width: '100%' 
      }}
    >
      <ReportStatusSelect
        reportId={reportId}
        reportState={state}
      />

      <Paper
        sx={{
          width: '100%',
          gap: '48px',
          border: '1px solid',
          marginTop: '10px',
          borderColor: '#0000001F',
        }}
      >
        {content.map((item, index) => (
          <ReportDetailsSideComponent
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            titleIcon={item.titleIcon}
            description2={item.description2}
            button={item.button}
            buttonIcon={item.buttonIcon}
          />
        ))}
      </Paper>
    </Box>
  );
};
