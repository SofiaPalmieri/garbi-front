import {
  TimestampUtil
} from '../utils/timestampUtil';
import {
  subDays
} from 'date-fns'

// todo: renombrar esta funcion a getInitialQueryParamsForDateRangePicker
export const getInitialQueryParams = (fromDate = subDays(new Date(), 6), toDate = new Date()) => {
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
