import {
  Box, Button, FormControl, IconButton, InputAdornment, OutlinedInput 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

export const SearcherAndButton = ({
  placeholderInput, buttonText, inputWidth, onClick 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      {/* TODO: CAMBIAR AL COMPONENTE SEARCHER */}
      <FormControl
        sx={{
          width: inputWidth,
        }}
        variant='outlined'
      >
        <OutlinedInput
          id='outlined-adornment-search'
          size='small'
          placeholder={placeholderInput}
          endAdornment={
            <InputAdornment
              position='end'
            >
              <IconButton
                aria-label='icon search'
                edge='end'
              >
                {<SearchIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button
        size='medium'
        sx={{
          backgroundColor: '#12422C',
          color: 'white',
          height: '36px',
          width: '202px',
          '&:hover': {
            backgroundColor: '#12422C',
          },
        }}
        onClick={onClick}
      >
        {buttonText}
        <AddIcon
          sx={{
            marginLeft: '8px',
            fontSize: '20px',
          }}
        />
      </Button>
    </Box>
  );
};
