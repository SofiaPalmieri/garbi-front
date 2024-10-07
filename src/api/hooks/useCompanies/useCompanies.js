import {
  useReviewCompany,
  useFetchCompany
} from './request';
  
export const useCompanies = () => {
  
  const {
    reviewCompany, 
    isLoading: isReviewCompanyLoading 
  } = useReviewCompany();
  const {
    getCompany, 
    isLoading: isGetCompanyLoading 
  } = useFetchCompany();
  
  return {
    reviewCompany: {
      reviewCompany,
      isReviewCompanyLoading,
    },
    getCompany: {
      getCompany,
      isGetCompanyLoading,
    },
  };
};
  