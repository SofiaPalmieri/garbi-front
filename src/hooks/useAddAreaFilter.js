import {
  useEffect 
} from 'react'
import {
  useAreas 
} from '../api/hooks/useAreas/useAreas'
import {
  addSelectFilterIfApplies, SelectBoxFilter 
} from '../utils/filtersUtil.'

export const useAddAreaFilter = (filters, setFilters, position = {
  first: false 
}) => {
  const {
    getAreas: {
      getAreas,
      isLoadingGetAreas
    }
  } = useAreas()


  // this useEffect is to retrieve areas from BE and complete filters
  useEffect(() => {
    const getAreasAndCompleteFilters = async () => {
      const {
        result: areas
      } = await getAreas()

      const areasOptions = areas.map(area => ({
        value: area.id,
        label: area.name
      }))

      const completedFilters = [...filters]

      if (position.first) {
        completedFilters.unshift({
          key: 'area',
          name: 'Área',
          values: areasOptions,
          render: SelectBoxFilter,
          addFilter: addSelectFilterIfApplies
        })
      } else {
        completedFilters.push({
          key: 'area',
          name: 'Área',
          values: areasOptions,
          render: SelectBoxFilter,
          addFilter: addSelectFilterIfApplies
        })
      }

      setFilters(completedFilters)
    }

    getAreasAndCompleteFilters()
  }, [])

  return isLoadingGetAreas
}