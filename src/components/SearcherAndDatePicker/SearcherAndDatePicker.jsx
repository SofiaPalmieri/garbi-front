import {
  Box
} from '@mui/material';
import {
  SearchBox
} from '../../components/SearchBox';
import {
  DateRangePicker
} from '../../components/DateRangePicker';

export const SearcherAndDatePicker = ({
  placeholderInput, inputWidth 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <SearchBox
        placeholderInput= {placeholderInput}
        inputWidth= {inputWidth}
      />

      <Box
        sx={{
          flexShrink: 0 
        }}
      >
        <DateRangePicker />
      </Box>
    </Box>
  );
};
