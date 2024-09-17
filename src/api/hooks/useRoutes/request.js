import {
  LIMIT_DEFAULT 
} from '../../../config';
import {
  useFetch 
} from '../../../hooks/useFetch';
import {
  baseIntegrationUri 
} from '../../config/apiClient';
import {
  HTTPMethods 
} from '../../config/HTTPMethods';
import QueryBuilder from '../../queryBuilder/QueryBuilder';

const baseIntegrationRoute = baseIntegrationUri + '/route'

export const useFetchRoutes = () => {
  const {
    commonFetch, isLoading 
  } = useFetch({
    baseUri: baseIntegrationRoute,
  });

  const fetchRoutes = (lastKey = null, limit = LIMIT_DEFAULT) => {
    const queryBuilder = new QueryBuilder()

    const uri = queryBuilder
      .addParam('lastKey', lastKey)
      .addParam('limit', limit)
      .build()

    return commonFetch({
      uri,
      method: HTTPMethods.GET,
      timeout: 10000
    })
  }

  return {
    fetchRoutes,
    isLoading
  }
};

export const useSelectOptimalRoutes = () => {
  const {
    isLoading,
    commonFetch
  } = useFetch({
    baseUri: baseIntegrationRoute
  })

  const selectOptimalRoute = (optimalRouteId) => {
    return commonFetch({
      method: HTTPMethods.POST,
      body: {
        optimalRouteId
      }
    })
  }

  return {
    isLoading,
    selectOptimalRoute
  }
}