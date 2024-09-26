import errorImage from '../../assets/error.png'; 
import {
  Box, Button, Typography 
} from '@mui/material';

import {
  useNavigate 
} from 'react-router-dom';

import {
  HEIGHT_FULL_SCREEN 
} from '../../config';

export const ErrorPage = () => {

  const navigate = useNavigate(); 

  const handleGoHome = () => {
    navigate('/home');
  };
  return (


    <Box
      sx={{
        width:'1',
        height:HEIGHT_FULL_SCREEN,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}

    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <img 
          src={errorImage} 
          alt='Error' 
          style={{
            height: 'auto',
          }}
        />
        <Typography
          sx={{
            fontFamily:'Roboto',
            fontSize:'32px',
            fontWeight:'400',
            lineHeight:'51.2px',
            letterSpacing:'0.15000000596046448px',
            textAlign:'center',
            width:'713px',
            height:'51px',
            marginTop: '20px'
          }}
        >
          No hemos podido encontrar la página que buscas
        </Typography>
        <Typography
          sx={{
            fontFamily:'Roboto',
            fontSize:'20px',
            fontWeight:'300',
            lineHeight:'32px',
            letterSpacing:'0.15000000596046448px',
            textAlign:'center',
            width:'843px',
            height:'32px',
            marginTop: '20px'
          }}
        >
          El enlace es inválido, prueba con otro nombre
        </Typography>
        <Button
          onClick={handleGoHome}
          sx={{
            fontFamily:'Roboto',
            fontSize:'15px',
            fontWeight:'500',
            lineHeight:'26px',
            letterSpacing:'0.46000000834465027px',
            textAlign:'left',
            color:'#FFFFFF',
            background:'#12422C',
            width:'231px',
            height:'42px',
            marginTop: '20px',
            '&:hover': {
              backgroundColor: '#0D331D',
            },
          }}
        >
          ir a la página de inicio
        </Button>
      </Box>
    </Box>


  );
};
