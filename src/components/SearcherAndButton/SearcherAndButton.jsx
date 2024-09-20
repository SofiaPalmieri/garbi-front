import {
  Box, Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  Searcher
} from '../../components/Searcher';

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
      <Searcher
        placeholderInput= {placeholderInput}
        inputWidth= {inputWidth}
      />

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
