import {
  useCreateCompany,
  useFetchCompanies,
  useModifyCompany
} from './request';

export const useCompanies = () => {

  const {
    createCompany, 
    isLoading: isCreateCompanyLoading 
  } = useCreateCompany();

  const {
    fetchCompanies,
    isLoading: isLoadingFetchCompanies
  } = useFetchCompanies();

  const {
    modifyCompany, 
    isLoading: isModifyCompanyLoading 
  } = useModifyCompany();

  return {
    createCompany: {
      createCompany,
      isCreateCompanyLoading,
    },
    fetchCompanies: {
      fetchCompanies,
      isLoadingFetchCompanies
    },
    modifyCompany: {
      modifyCompany,
      isModifyCompanyLoading,
    },
  };
};
