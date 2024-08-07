import {
  Box 
} from '@mui/system'

import {
  ReportDetails 
} from './ReportDetails'

export const ReportDetailsPage = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          height: '4.5rem',
          width: 1,
          backgroundColor: 'white'
        }}
      />
      <Box
        sx={{
          flex: 1,
          backgroundColor: 'white',
          padding: '2rem 4rem 0'
        }}
      >
        <Box
          sx={{
            width: 1,
            height: '100%',
            backgroundColor: 'white'
          }}
        >
          
          <Box
            sx={{
              height: 1,
              width: 1,
              backgroundColor: 'white',
              display: 'flex'
            }}
          >
            <Box
              sx ={{
                height: 1,
                flex: 1,
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                pb: '1.5rem'
              }}
                        
            >
              <Box
                sx = {{
                  backgroundColor: 'white',
                  height: '4rem',
                }}
              />
              <Box
                sx  ={{
                  backgroundColor: 'white',
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
                height: '18.625rem', // borrar
                backgroundColor: 'white'
              }}

            >
              <ReportDetails
                state='NUEVO'
                date='19/02/2024 - 09.20 hs'
                reportedBy='Ciudadano' 
                neighborhood='Villa del Parque - Área 2'
                address='Av. Honorio Pueyrredón 1234'
                containerID='#123456'
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
  )
}
