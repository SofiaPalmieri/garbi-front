export const useSearchQueryParam = (addQueryParamFilter, removeQueryParamFilter) => {
    
    
  const onSearcherSubmit = (value) => {

    if (value === '')
      return removeQueryParamFilter('search')

    addQueryParamFilter({
      key: 'search',
      value
    })
  }

  return onSearcherSubmit
}