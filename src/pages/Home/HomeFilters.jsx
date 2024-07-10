import {
  Typography 
} from '@mui/material';
import Box from '@mui/material/Box';
import SelectAreaBox from './Utils/SelectAreaBox';
import TextFieldBox from './Utils/TextFieldBox';

export const HomeFilters = () => {
  return (
    <Box>
      <SelectAreaBox />
      <Typography
        width='68px'
        height='21px'
        top='293px'
        left='17px'
        fontFamily='Roboto'
        fontSize='14px'
        fontWeight='500'
        lineHeight='21px'
        letterSpacing='0.15000000596046448px'
        textAlign='left'
        paddingLeft='15px'
        sx={{
          color: 'var(--text-secondary, #00000099)',
        }}
      >
        Capacidad
      </Typography>
      <TextFieldBox
        text='Mínimo'
        sx={{
          width: '80px',
          height: '28px',
          top: '3120px',
          left: '16px',
          gap: '0px',
          opacity: '0px',
        }}
      />
      <TextFieldBox
        text='Máximo'
        sx={{
          width: '80px',
          height: '28px',
          top: '318px',
          left: '116px',
          gap: '0px',
          opacity: '0px',
        }}
      />
      <Typography
        width='200px'
        height='21px'
        top='378px'
        left='17px'
        fontFamily='Roboto'
        fontSize='14px'
        fontWeight='500'
        lineHeight='21px'
        letterSpacing='0.15000000596046448px'
        textAlign='left'
        paddingLeft='15px'
        sx={{
          color: 'var(--text-secondary, #00000099)',
        }}
      >
        Nivel de batería
      </Typography>
      <TextFieldBox
        text='Mínimo'
        sx={{
          width: '80px',
          height: '28px',
          top: '3120px',
          left: '16px',
          gap: '0px',
          opacity: '0px',
        }}
      />
      <TextFieldBox
        text='Máximo'
        sx={{
          width: '80px',
          height: '28px',
          top: '318px',
          left: '116px',
          gap: '0px',
          opacity: '0px',
        }}
      />
    </Box>
  );
};
