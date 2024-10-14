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
import {
  LIMIT_DEFAULT 
} from '../../../config';

const baseCompaniesUri = baseIntegrationUri + '/company'

export const useCreateCompany = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    baseUri: baseCompaniesUri,
  });

  const createCompany = (companyBody) => {
    return commonFetch({
      method: HTTPMethods.POST,
      body: companyBody,
    });
  };

  return {
    createCompany,
    isLoading,
  };
};

export const useFetchCompanies = () => {
  const {
    commonFetch, isLoading 
  } = useFetch({
    baseUri: baseCompaniesUri,
  });

  const fetchCompanies = (lastKey = null, limit = LIMIT_DEFAULT) => {
    const queryBuilder = new QueryBuilder()

    queryBuilder
      .addParam('lastKey', lastKey)
      .addParam('limit', limit)

    const uri = queryBuilder.build();
    

    return commonFetch({
      uri,
      method: HTTPMethods.GET
    })
  }


  return {
    fetchCompanies,
    isLoading
  }
};

export const useModifyCompany = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    baseUri: baseCompaniesUri,
  });

  const modifyCompany = (companyId, companyBody) => {
    return commonFetch({
      uri: '/' + companyId,
      method: HTTPMethods.PUT,
      body: companyBody,
    });
  };

  return {
    modifyCompany,
    isLoading,
  };
};

export const useDeleteCompany = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    baseUri: baseCompaniesUri,
  });

  const deleteCompany = (companyId) => {
    return commonFetch({
      uri: '/' + companyId,
      method: HTTPMethods.DELETE,
    });
  };

  return {
    deleteCompany,
    isLoading,
  };
};