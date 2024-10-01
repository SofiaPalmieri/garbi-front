import {
  TimestampUtil
} from '../utils/timestampUtil';

export const getInitialQueryParam = (initialDate) => {
  return [
    {
      key: 'date',
      value: TimestampUtil.convertToDateForFilter(initialDate)
    }
  ]
}

export const handleDateChange = (addQueryParamFilter) => {
  const onDateChange = (selectedDate) => {
    addQueryParamFilter(
      {
        key: 'date',
        value: TimestampUtil.convertToDateForFilter(selectedDate)
      }
    )
  }
  
  return onDateChange
} 
