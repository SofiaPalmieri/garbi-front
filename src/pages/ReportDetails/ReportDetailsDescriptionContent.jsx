import {
  Typography, Box 
} from '@mui/material';
import contenedorRoto from '/src/assets/contenedor-roto.png';

export const ReportDetailsDescriptionContent = ({
  description 
}) => {
  return (
    <Box
      sx={{
        border: '1px solid var(--divider, #0000001F)', 
        borderRadius:'4px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height:'100%',
          width:'100%',
          padding: '16px 8px 0 12px',
          
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
            textAlign: 'left'
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          width:'368px',
          height:'272px',
          padding:'16px 0px 0px 12px'
        }}
      >
        <img
          src={contenedorRoto}
          alt='Descripción de la imagen'
          style={{
            maxWidth: '320px',
            maxHeight: '240px',
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>
    </Box>
  );
};
