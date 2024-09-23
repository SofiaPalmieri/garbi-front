import BaseWithHeader from '../../common/baseWithHeader';
import errorImage from '../../assets/error.png'; 
import {
  Box, Button, Typography 
} from '@mui/material';

export const ErrorPage = () => {
  return (


    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      height='80vh'

    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        width='480px'
      >
        <img 
          src={errorImage} 
          alt='Error' 
          style={{
            maxWidth: '100%', 
            height: 'auto',
            marginTop:'700px'
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
            top:'645px',
            left:'364px',
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
            top:'720px',
            left:'299px',
            marginTop: '20px'
          }}
        >
          Capaz está mal tipeado el enlace o la página puede haber cambiado de nombre
        </Typography>
        <Button
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

      <Box>
        <BaseWithHeader
          logoOnly={true}
        />
      </Box>
    </Box>


  );
};
