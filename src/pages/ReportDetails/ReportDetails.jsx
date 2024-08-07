import {
  Box 
} from '@mui/system';
import {
  Button, Paper, Typography 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

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
  state, date, reportedBy, neighborhood, address, containerID 
}) => {
  return (
    <Box
      sx={{
        width: '100%' 
      }}
    >
      <Button
        variant='outlined'
        color='warning'
        size='small'
        sx={{
          color: getColor(state),
          width: '100%', 
          height: '30px',
          padding: '4px 10px',
          gap: '0px',
          borderRadius: 'var(--borderRadius)',
          border: '1px solid', 
          opacity: 1 
        }}
      >
        {state}
        <ExpandMoreIcon 
          sx={{
            color: getColor(state)
          }}
        />
      </Button>

      <Paper
        sx={{
          width: '100%',
          height: '394px',
          gap: '48px',
          border: '1px solid',
          marginTop: '10px',
          borderColor: '#0000001F',
          padding: '16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 5px',
            width: '288px',
            height: '78px',
          }}
        >
          <CalendarMonthIcon
            sx={{
              color: '#2121213B',
            }}
          />
          <Box>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: '15px',
                fontWeight: '600',
                lineHeight: '26.56px',
                letterSpacing: '0.4px',
                textAlign: 'left',
              }}
            >
              Fecha de creación
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '26.56px',
                letterSpacing: '0.4px',
                textAlign: 'left',
              }}
            >
              {date}   
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 5px',
            width: '288px',
            height: '78px',
          }}
        >
          <PersonOutlineOutlinedIcon
            sx={{
              color: '#2121213B',
            }}
          />
          <Box>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: '15px',
                fontWeight: '600',
                lineHeight: '26.56px',
                letterSpacing: '0.4px',
                textAlign: 'left',
              }}
            >
              Reportado por
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '26.56px',
                letterSpacing: '0.4px',
                textAlign: 'left',
              }}
            >
              {reportedBy}   
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            padding: '12px 5px',
            width: '288px',
            height: '78px',
          }}
        >
          <RoomOutlinedIcon
            sx={{
              color: '#2121213B',
            }}
          />
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center' 
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '26.56px',
                  letterSpacing: '0.4px',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Ubicación
                <OpenInNewOutlinedIcon
                  sx={{
                    width: '20px',
                    height: '20px',
                    marginLeft: '5px',
                  }}
                />
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '26.56px',
                letterSpacing: '0.4px',
                textAlign: 'left',
                marginTop: '5px',
              }}
            >
              {neighborhood}   
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: '13px',
                fontWeight: '400',
                lineHeight: '23.24px',
                letterSpacing: '0.4px',
                textAlign: 'left',
                marginTop: '0px',
              }}
            >
              {address}      
            </Typography>
          </Box>
        </Box>
        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            padding: '12px 5px',
            width: '288px',
            height: '78px',
            marginTop:'15px'
          }}
        >
          <DeleteOutlineOutlinedIcon
            sx={{
              color: '#2121213B',
            }}
          />
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center' 
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '26.56px',
                  letterSpacing: '0.4px',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Contenedor
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '26.56px',
                letterSpacing: '0.4px',
                textAlign: 'left',
                marginTop: '5px',
              }}
            >
              {containerID}   
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center' 
              }}
            >
              <Button
                sx={{
                  color: '#12422C',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '500',
                  lineHeight: '24px',
                  letterSpacing: '0.4px',
                  textAlign: 'left',
                }}
              >
                HISTORIAL
              </Button>  
              <OpenInNewOutlinedIcon
                sx={{
                  width: '20px',
                  height: '20px',
                  marginLeft: '5px',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
