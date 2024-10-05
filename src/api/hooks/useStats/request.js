
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

const baseIntegrationStats = baseIntegrationUri + '/statistics/'

export const useGetStats = () => {
  const {
    commonFetch,
    isLoading
  } = useFetch({
    baseUri: baseIntegrationStats
  })

  const getStats = (id, from, to) => {
    const queryBuilder = new QueryBuilder(`${id}`)

    queryBuilder
      .addParam('from', from)
      .addParam('to', to)

    const uri = queryBuilder.build();

    console.log('🚀 ~ getStats ~ uri:', uri)

    return commonFetch({
      uri,
      method: HTTPMethods.GET,
    })
  }

  return {
    getStats,
    isLoading
  }
}