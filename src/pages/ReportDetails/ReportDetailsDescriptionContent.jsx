import {
  Typography, Box 
} from '@mui/material';
import contenedorRoto from '/src/assets/contenedor-roto.png';

export const ReportDetailsDescriptionContent = ({
  description 
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center' // Alinea verticalmente los textos
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '26.56px',
            letterSpacing: '0.4px',
            textAlign: 'left',
            marginRight: '8px',
            marginLeft:'12px',
            marginTop:'16px'

          }}
        >
          Descripcion:
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '26.56px',
            letterSpacing: '0.4px',
            textAlign: 'left',
            marginTop:'16px'

          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: '16px',
          width:'368px',
          height:'272px',
          marginLeft:'12px'
        }}
      >
        <img
          src={contenedorRoto}
          height='240'
          width='320'
          alt='Descripción de la imagen'
        />
      </Box>
    </Box>
  );
};
