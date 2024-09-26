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
import './DateRangePicker.css';
import {
  es 
} from 'date-fns/locale'; 
import {
  subDays 
} from 'date-fns'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const DateRangePicker = ({
  defaultStartDate = subDays(new Date(), 6), 
  lastAvailableDate = new Date(),
  onDateChange
}) => {
  const [dateRange, setDateRange] = useState([defaultStartDate, lastAvailableDate]);
  const [startDate, endDate] = dateRange;

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
          width: '248px' 
        }}
        size='small'
        InputProps={{
          startAdornment: (
            <InputAdornment
              position='start'
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

  const handleDateChange = (update) => {
    setDateRange(update);

    if (update[0] && update[1]) {
      const [selectedStartDate, selectedEndDate] = update;

      //Formatea fechas a yyyy-MM-dd
      const formattedStartDate = selectedStartDate.toLocaleString('en-CA', { 
        timeZone: 'America/Argentina/Buenos_Aires', 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
      })
      const formattedEndDate = selectedEndDate.toLocaleString('en-CA', { 
        timeZone: 'America/Argentina/Buenos_Aires', 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
      })

      onDateChange([formattedStartDate, formattedEndDate]);
    }
  };

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={handleDateChange}
      locale={es}
      customInput={<CustomInput/>}
      dateFormat='dd/MM/yyyy'
      maxDate={lastAvailableDate}
      calendarStartDay={7}
    />
  );
};
