import {
  TimestampUtil
} from '../utils/timestampUtil';

export const getInitialQueryParams = (fromDate, toDate) => {
  return [
    {
      key: 'from',
      value: TimestampUtil.convertToDateForFilter(fromDate)
    },
    {
      key: 'to',
      value: TimestampUtil.convertToDateForFilter(toDate)
    }
  ]
}

export const handleDateRangeChange = (addMultipleQueryParamFilter) => {
  const onDateRangeChange = (selectedDateRange) => {
    const [selectedFromDate, selectedToDate] = selectedDateRange
    
    addMultipleQueryParamFilter([
      {
        key: 'from',
        value: TimestampUtil.convertToDateForFilter(selectedFromDate)
      },
      {
        key: 'to',
        value: TimestampUtil.convertToDateForFilter(selectedToDate)
      }
    ])
  }
  
  return onDateRangeChange
} 
