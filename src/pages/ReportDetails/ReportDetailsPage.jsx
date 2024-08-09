import {
  Box 
} from '@mui/system';

import {
  ReportDetails 
} from './ReportDetails';

export const ReportDetailsPage = ({
  report = {
    state: 'NUEVO',
    date: '19/02/2024 - 09.20 hs',
    reportedBy: 'Ciudadano',
    neighborhood: 'Villa del Parque - Área 2',
    address: 'Av. Honorio Pueyrredón 1234',
    containerID: '#123456'
  }
}) => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          height: '4.5rem',
          width: 1,
          backgroundColor: 'black'
        }}
      />
      <Box
        sx={{
          flex: 1,
          backgroundColor: 'green',
          padding: '2rem 4rem 0'
        }}
      >
        <Box
          sx={{
            width: 1,
            height: '100%',
            backgroundColor: 'aquamarine'
          }}
        >
          <Box
            sx={{
              height: 1,
              width: 1,
              backgroundColor: 'yellowgreen',
              display: 'flex'
            }}
          >
            <Box
              sx ={{
                height: 1,
                flex: 1,
                backgroundColor: 'blue',
                display: 'flex',
                flexDirection: 'column',
                pb: '1.5rem'
              }}
            >
              <Box
                sx = {{
                  backgroundColor: 'orange',
                  height: '4rem',
                }}
              />
              <Box
                sx  ={{
                  backgroundColor: 'red',
                  height: '21.875rem',
                  mb: '1.5rem'
                }}
              />
              <Box
                sx ={{
                  flex: 1,
                  backgroundColor: 'white',
                }}
              />
            </Box>
            <Box
              sx={{
                width: '16rem',
                height: '18.625rem',
                backgroundColor: 'white'
              }}
            >
              <ReportDetails
                report={report}
              />
              {/* {code here....} */}
            </Box>
          </Box>
          <Box>
            {/* {code here....} */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
