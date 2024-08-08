import {
  Box 
} from '@mui/system'

export const ReportDetailsPage = () => {
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
      >
        Bread
      </Box>
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
                height: '18.625rem', // borrar
                backgroundColor: 'yellow'
              }}

            >
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
