import {
  useReviewCompany,
} from './request';
  
export const useCompanies = () => {
  
  const {
    reviewCompany, 
    isLoading: isReviewCompanyLoading 
  } = useReviewCompany();
  
  return {
    reviewCompany: {
      reviewCompany,
      isReviewCompanyLoading,
    },
  };
};
  