
import SearchIcon from '@mui/icons-material/Search';
import {
  FormControl, IconButton, InputAdornment, OutlinedInput 
} from '@mui/material';
import {
  useState 
} from 'react';

export const Searcher = ({
  inputWidth = '350px', placeholderInput, onSearcherSubmit
}) => {

  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  };

  const handleSearch = () => {
    onSearcherSubmit(inputValue); 
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      handleSearch();
    }
  };

  return (
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
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={handleInputChange}
        endAdornment={
          <InputAdornment
            position='end'
          >
            <IconButton
              aria-label='icon search'
              edge='end'
              onClick={handleSearch} 
            >
              <SearchIcon 
                sx={{ 
                  color: '#bdbdbd'
                }} 
              />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
