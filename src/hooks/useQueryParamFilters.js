import {
  useCallback, useState
} from 'react'

export const useQueryParamFilters = (filters, fetchData) => {
  const [queryParamsFilter, setQueryParamFilters] = useState([])

  const fetchDataWithFilters = useCallback((lastKey) => {
    return fetchData(lastKey, queryParamsFilter)
  }, [queryParamsFilter])

  const whenFiltersSubmit = (data) => {
    let newQueryParamsFilter = queryParamsFilter.filter(
      query => !filters.some(f  => f.key == query.key)
    )

    for (const [key, value] of Object.entries(data)) {
      const filter = filters.find(f => f.key == key)

      filter.addFilter(key, value, newQueryParamsFilter)
    }

    setQueryParamFilters(newQueryParamsFilter)
  }


  const addQueryParamFilter = (newQueryParam) => {
    const keyExists = queryParamsFilter.some(
      (param) => param.key === newQueryParam.key
    );

    const updatedQueryParamsFilter = keyExists
      ? queryParamsFilter.map((param) =>
        param.key === newQueryParam.key ? {
          ...param,
          value: newQueryParam.value 
        } : param
      )
      : [...queryParamsFilter, newQueryParam];

    setQueryParamFilters(updatedQueryParamsFilter);
  }


  return {
    fetchDataWithFilters,
    whenFiltersSubmit,
    addQueryParamFilter
  }
} 