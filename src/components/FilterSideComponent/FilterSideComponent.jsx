import {
  Box, Button, Divider, Typography 
} from '@mui/material';

export const FilterSideComponent = ({
  title, component 
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        height: '100%',
      }}
    >
      <Box
        sx={{
          width: '256px',
          boxShadow: '0px 3px 1px -2px #00000033',
          backgroundColor: '#F5F5F5',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          height='48px'
          fontFamily='Roboto'
          fontSize='20px'
          fontWeight='300'
          sx={{
            color: 'var(--text-secondary, #00000099)',
          }}
        >
          Filtros
        </Typography>
        <Button
          variant='contained'
          color='primary'
          size='large'
          fullWidth
          sx={{
            backgroundColor: '#12422C',
          }}
        >
          Aplicar
        </Button>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            width: '100%',
            padding: '16px 32px',
          }}
        >
          <Typography
            sx={{
              fontSize: '34px',
              fontWeight: 400,
              letterSpacing: '0.25px',
              textAlign: 'left',
            }}
          >
            {title}
          </Typography>
        </Box>
        <Divider />
        {component()}
      </Box>
    </Box>
  );
};
