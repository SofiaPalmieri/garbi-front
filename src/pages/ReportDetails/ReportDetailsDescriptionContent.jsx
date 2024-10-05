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
        borderRadius: '4px',
        padding: '.75rem 1.5rem 1rem',
        height: 1,
      }}
    >
      <Box
        sx={{
          width: '100%',
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
      <Box>
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
