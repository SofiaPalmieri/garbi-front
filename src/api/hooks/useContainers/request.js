import {
  LIMIT_DEFAULT 
} from '../../../config';
import {
  useFetch
} from '../../../hooks/useFetch';
import {
  baseIntegrationUri
} from '../../config/apiClient';
import QueryBuilder from '../../queryBuilder/QueryBuilder';

const baseContainerUri = baseIntegrationUri + '/container'

export const useGetContainers = () => {
  const {
    isLoading, commonFetch
  } = useFetch({
    baseUri: baseContainerUri,
  });

  const getContainers = (lastKey = null, limit = LIMIT_DEFAULT) => {
    const queryBuilder = new QueryBuilder()


    const uri = queryBuilder
      .addParam('lastKey', lastKey)
      .addParam('limit', limit)
      .build()


    return commonFetch({
      uri,
      method: 'GET',
    });
  };

  return {
    getContainers,
    isLoadingGetContainers: isLoading,
  };
};
