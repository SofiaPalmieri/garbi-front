import {
  useFetch
} from '../../../hooks/useFetch';
import {
  baseIntegrationUri
} from '../../config/apiClient';
import {
  HTTPMethods
} from '../../config/HTTPMethods';
  
const baseCompanyUri = baseIntegrationUri + '/company'
  
export const useReviewCompany = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    baseUri: baseCompanyUri,
  });
  
  const reviewCompany = (companyId, reviewCompanyBody) => {
    return commonFetch({
      uri: '/' + companyId,
      method: HTTPMethods.PUT,
      body: reviewCompanyBody
    })
  }
  
  return {
    reviewCompany,
    isLoading
  }
};

export const useFetchCompany = () => {
  const {
    commonFetch, isLoading 
  } = useFetch({
    baseUri: baseCompanyUri,
  });

  const getCompany = (companyId) => {
    return commonFetch({
      uri: '/' + companyId,
      method: HTTPMethods.GET,
    });
  };

  return {
    getCompany,
    isLoading,
  };
};

  
  