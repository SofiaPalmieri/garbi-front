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

const baseReportsUri = baseIntegrationUri + '/report'

export const useCreateReport = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    baseUri: baseReportsUri,
  });

  const createReport = ({
    userId,containerId,title,description,address,phone,email,type,image 
  }) => {
    return commonFetch({
      method: HTTPMethods.POST,
      body: {
        userId,
        containerId,
        title,
        description,
        address,
        phone,
        email,
        type,
        image 
      },
    });
  };

  return {
    createReport,
    isLoading,
  };
};

export const useFetchReports = () => {
  const {
    commonFetch, isLoading 
  } = useFetch({
    baseUri: baseReportsUri,
  });

  const fetchReports = (lastKey = null) => {
    const queryBuilder = new QueryBuilder()

    const uri = queryBuilder
      .addParam('lastKey', lastKey)
      .build()

    return commonFetch({
      uri,
      method: HTTPMethods.GET
    })
  }

  return {
    fetchReports,
    isLoading
  }
}