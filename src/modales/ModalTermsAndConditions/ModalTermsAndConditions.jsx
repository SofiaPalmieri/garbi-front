import CloseIcon from '@mui/icons-material/Close';
import {
  Box, Button, Divider, Modal, Typography
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: '0px 6px 30px 5px #0000001F',
  borderRadius: '8px',
  width: '60vw',
};

export const ModalTermsAndConditions = ({
  title, description, open, handleClose, setCheckboxChecked 
}) => {
  const handleAccept = () => {
    setCheckboxChecked(true);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      disableAutoFocus={true}
    >
      <Box
        sx={style}
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
            {title}
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
        {description && (<>
          <Divider />
          <Box
            sx={{
              padding: '12px 24px',
              maxHeight: '320px',
              overflowY: 'auto',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 300,
                whiteSpace: 'pre-line',
              }}
            >
              {description}
            </Typography>
          </Box></>)}
        <Divider />
        <Box
          sx={{
            width: '100%',
            height: '68px',
            padding: '16px 24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              gap: '8px',
            }}
          >
            <Button
              color='secondary'
              sx={{
                backgroundColor: 'secondary.main',
                color: 'secondary.contrastText',
                padding: '8px',
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                },
              }}
              onClick={handleClose}
            >
              Cerrar
            </Button>
            <Button
              sx={{
                backgroundColor: '#12422C',
                color: 'white',
                paddingLeft: '16px',
                paddingRight: '16px',
                '&:hover': {
                  backgroundColor: '#0a2e1f',
                },
              }}
              onClick={handleAccept}
              //type={typeButton}
            >
              ACEPTAR
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
