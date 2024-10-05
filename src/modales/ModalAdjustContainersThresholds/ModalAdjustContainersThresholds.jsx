import CloseIcon from '@mui/icons-material/Close';
import {
  Box, Button, Modal, Typography, DialogContent,
  InputLabel
} from '@mui/material';
import Circle from '@mui/icons-material/Circle';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: '0px 6px 30px 5px #0000001F',
  borderRadius: '8px',
};

export const ModalAdjustContainersThreshold = ({
  open, handleClose
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      disableAutoFocus={true}
    >
      <Box
        sx={{
          width: '32.5rem',
          ...style,
        }}
      >
        <Box
          sx={{
            height: '4rem',
            width: '100%',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '32px',
            }}
          >
            Ajustar límites
          </Typography>
          <Button
            sx={{
              padding: 0,
              minWidth: 0,
              borderRadius: '50%',
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Button>
          
          
        </Box>
        <Box>
          <DialogContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center' 
              }}
            >
              <Circle
                sx={{
                  color: '#D32F2F',
                  marginRight: '8px' 
                }}
              />
              <Typography
                sx={{
                  fontFamily:'Roboto',
                  fontSize:'16px',
                  fontWeight:'400',
                  lineHeight:'26.56px',
                  letterSpacing:'0.4000000059604645px',
                  textAlign:'left'
                }}
              >es</Typography>
              <InputLabel
                sx={{
                  width: '55px',
                  height: '32px',
                  borderRadius: '10px',
                  border: '1px solid var(--_components-input-outlined-enabledBorder, #2121213B)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '8px',
                  marginRight: '8px',

                }}
              >
                75%
              </InputLabel>
              <Typography
                sx={{
                  fontFamily:'Roboto',
                  fontSize:'16px',
                  fontWeight:'400',
                  lineHeight:'26.56px',
                  letterSpacing:'0.4000000059604645px',
                  textAlign:'left'
                }}
              >
                o más de la capacidad del contenedor
              </Typography>

            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop:'16px' 
              }}
            >
              <Circle
                sx={{
                  color: '#2E7D32',
                  marginRight: '8px' 
                }}
              />
              <Typography
                sx={{
                  fontFamily:'Roboto',
                  fontSize:'16px',
                  fontWeight:'400',
                  lineHeight:'26.56px',
                  letterSpacing:'0.4000000059604645px',
                  textAlign:'left'
                }}
              >es</Typography>
              <InputLabel
                sx={{
                  width: '55px',
                  height: '32px',
                  borderRadius: '10px',
                  border: '1px solid var(--_components-input-outlined-enabledBorder, #2121213B)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '8px',
                  marginRight: '8px',

                }}
              >
                25%
              </InputLabel>
              <Typography
                sx={{
                  fontFamily:'Roboto',
                  fontSize:'16px',
                  fontWeight:'400',
                  lineHeight:'26.56px',
                  letterSpacing:'0.4000000059604645px',
                  textAlign:'left'
                }}
              >
                o menos de la capacidad del contenedor
              </Typography>

            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '16px' 
              }}
            >
              <Button
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '500',
                  lineHeight: '24px',
                  letterSpacing: '0.4px',
                  textAlign: 'left',
                  color: '#12422C',
                  marginRight: '8px',
                }}
              >
                cancelar
              </Button>
              <Button
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '500',
                  lineHeight: '24px',
                  letterSpacing: '0.4px',
                  textAlign: 'left',
                  backgroundColor: '#12422C',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#0c3020',
                  },
                }}
              >
                modificar
              </Button>
            </Box>

          </DialogContent>
        </Box>
      </Box>
    </Modal>
  );
};