import {
  useCallback, useState
} from 'react'

export const useQueryParamFilters = (filters, fetchData, initialQueryParams) => {
  const [queryParamsFilter, setQueryParamsFilters] = useState(initialQueryParams)

  const fetchDataWithFilters = useCallback((lastKey) => {
    return fetchData(lastKey, queryParamsFilter)
  }, [queryParamsFilter])

  const whenFiltersSubmit = (data) => {
    let newQueryParamsFilter = queryParamsFilter.filter(
      query => !filters.some(f => f.key == query.key)
    )

    for (const [key, value] of Object.entries(data)) {
      const filter = filters.find(f => f.key == key)

      filter.addFilter(key, value, newQueryParamsFilter)
    }

    setQueryParamsFilters(newQueryParamsFilter)
  }


  const addQueryParamFilter = (newQueryParams) => {
    let updatedQueryParamsFilter = [...queryParamsFilter]
  
    newQueryParams.forEach((newParam) => {
      const keyExists = updatedQueryParamsFilter.some(
        (param) => param.key === newParam.key
      )
  
      if (keyExists) {
        updatedQueryParamsFilter = updatedQueryParamsFilter.map((param) =>
          param.key === newParam.key ? { 
            ...param, 
            value: newParam.value 
          } : param
        )
      } else {
        updatedQueryParamsFilter.push(newParam);
      }
    })
  
    setQueryParamsFilters(updatedQueryParamsFilter);
  }

  const removeQueryParamFilter = (key) => {
    const updatedFilters = queryParamsFilter.filter((filter) => filter.key !== key);

    setQueryParamsFilters(updatedFilters);
  };


  return {
    fetchDataWithFilters,
    whenFiltersSubmit,
    addQueryParamFilter,
    removeQueryParamFilter
  }
} 