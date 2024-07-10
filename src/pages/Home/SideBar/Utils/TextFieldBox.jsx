import {
  TextField 
} from '@mui/material';

export default function TextFieldBox(props) {
  return (
    <TextField
      sx={{
        width: '80px',
        height: '28px',
      }}
      InputLabelProps={{
        style: {
          fontFamily: 'Roboto',
          fontSize: '13px',
          fontWeight: '300',
          letterSpacing: '0.15000000596046448px',
          textAlign: 'center',
          color: 'var(--text-disabled, #00000061)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '48px',
        },
      }}
      label={props.text}
      variant='outlined'
      size='small'
    />
  );
}
