import {
  useEffect, useState 
} from 'react';
import {
  useAreas 
} from './useAreas'

export const useFetchAreas = () => {
  const [areas, setAreas] = useState([])

  const {
    getAreas: {
      getAreas: getAreas,
      isLoadingGetAreas
    }
  } = useAreas();

  useEffect(() => {
    const retrieveAreas = async () => {
      const areasRetrieved = await getAreas()
      setAreas(areasRetrieved.result)
    }

    retrieveAreas()
  }, [])

  return [
    areas,
    isLoadingGetAreas
  ]
}