import {
  useCallback, useState
} from 'react'

export const useQueryParamFilters = (filters, fetchData) => {
  const [queryParamsFilter, setQueryParamsFilters] = useState([])

  const fetchDataWithFilters = useCallback((lastKey) => {
    return fetchData(lastKey, queryParamsFilter)
  }, [queryParamsFilter])

  const whenFiltersSubmit = (data) => {
    // deja los que no pertenecen al panel
    let newQueryParamsFilter = queryParamsFilter.filter(
      query => !filters.some(f => f.key == query.key)
    )

    for (const [key, value] of Object.entries(data)) {
      const filter = filters.find(f => f.key == key)

      filter.addFilter(key, value, newQueryParamsFilter)
    }

    setQueryParamsFilters(newQueryParamsFilter)
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