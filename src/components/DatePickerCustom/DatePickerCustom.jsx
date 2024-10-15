import {
  InputAdornment,
  TextField
} from '@mui/material';
import {
  forwardRef,
  useState
} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../DateRangePicker/DateRangePicker.css';
import {
  es 
} from 'date-fns/locale'; 
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const DatePickerCustom = ({
  onDateChange
}) => {
  const defaultDate = new Date();
  const [selectedDate, setSelectedDate] = useState(defaultDate);

  const CustomInput = forwardRef(
    ({
      value, onClick 
    }, ref) => (
      <TextField
        id='date-picker'
        value={value}
        onClick={onClick}
        variant='outlined'
        ref={ref}
        sx={{
          width: '200px',
          '& .MuiInputBase-input': {
            textAlign: 'center',
          },
        }}
        size='small'
      
        InputProps={{
          startAdornment: (
            <InputAdornment
              position='end'
            >
              <CalendarTodayIcon 
                sx={{ 
                  color: '#bdbdbd'
                }} 
              />
            </InputAdornment>
          ),
        }}
      />
    ),
  );

  CustomInput.displayName = 'CustomInput';

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date)
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      locale={es}
      customInput={<CustomInput/>}
      dateFormat='dd/MM/yyyy'
      maxDate={defaultDate}
      calendarStartDay={7}
      disabledKeyboardNavigation
    />
  );
};
