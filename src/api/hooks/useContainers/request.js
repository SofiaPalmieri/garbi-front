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

const baseContainerUri = baseIntegrationUri + '/container'

export const useGetContainers = () => {
  const {
    isLoading, commonFetch
  } = useFetch({
    baseUri: baseContainerUri,
  });

  const getContainers = (lastKey = null, queryParamsFilter, limit = LIMIT_DEFAULT) => {
    const queryBuilder = new QueryBuilder()

    queryBuilder
      .addParam('lastKey', lastKey)
      .addParam('limit', limit)

    queryParamsFilter.forEach(element => {
      queryBuilder.addParam(element.key, element.value)
    });

    const uri = queryBuilder.build();

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

export const useGetAllContainers = () => {
  const {
    isLoading, commonFetch
  } = useFetch({
    baseUri: baseContainerUri,
  });

  const getAllContainers = () => {

    return commonFetch({
      uri: '/all',
      method: 'GET',
    });
  };

  return {
    getAllContainers,
    isLoadingGetAllContainers: isLoading,
  };
};

export const useCreateContainer = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    baseUri: baseContainerUri,
  });

  const createContainer = (containerBody) => {
    return commonFetch({
      method: HTTPMethods.POST,
      body: containerBody,
    });
  };

  return {
    createContainer,
    isLoading,
  };
};

export const useModifyContainer = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    baseUri: baseContainerUri,
  });

  const modifyContainer = (userId, containerBody) => {
    return commonFetch({
      uri: '/' + userId,
      method: HTTPMethods.PUT,
      body: containerBody,
    });
  };

  return {
    modifyContainer,
    isLoading,
  };
};

export const useDeleteContainer = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    baseUri: baseContainerUri,
  });

  const deleteContainer = (userId) => {
    return commonFetch({
      uri: '/' + userId,
      method: HTTPMethods.DELETE,
    });
  };

  return {
    deleteContainer,
    isLoading,
  };
};