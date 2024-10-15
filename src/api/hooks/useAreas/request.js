import {
  useFetch
} from '../../../hooks/useFetch';
import {
  baseIntegrationUri
} from '../../config/apiClient';
import {
  HTTPMethods
} from '../../config/HTTPMethods';

const baseAreaUri = baseIntegrationUri + '/area'

export const useGetAreas = () => {

  const {
    commonFetch,
    isLoading
  } = useFetch({
    baseUri: baseAreaUri
  })


  const getAreas = () => {
    return commonFetch({
      method: HTTPMethods.GET,
    })
  }

  return {
    getAreas,
    isLoading
  }
}

export const usePostAreas = () => {
  const {
    commonFetch,
    isLoading
  } = useFetch({
    baseUri: baseAreaUri
  })

  const postAreas = (area) => {

    return commonFetch({
      method: HTTPMethods.POST,
      body: area
    })
  }

  return {
    postAreas,
    isLoading
  }
}

export const usePutAreas = () => {
  const {
    commonFetch,
    isLoading
  } = useFetch({
    baseUri: baseAreaUri
  })

  const putAreas = (areaId, area) => {

    return commonFetch({
      uri: '/' + areaId,
      method: HTTPMethods.PUT,
      body: area
    })
  }

  return {
    putAreas,
    isLoading
  }
}

export const useDeleteAreas = () => {
  const {
    commonFetch,
    isLoading
  } = useFetch({
    baseUri: baseAreaUri
  })

  const deleteArea = (areaId) => {

    return commonFetch({
      uri: '/' + areaId,
      method: HTTPMethods.DELETE,
    })
  }

  return {
    deleteArea,
    isLoading
  }
}
