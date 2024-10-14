import {
  useCreateCompany,
  useFetchCompanies,
  useModifyCompany,
  useDeleteCompany
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

  const {
    deleteCompany, 
    isLoading: isDeleteCompanyLoading 
  } = useDeleteCompany();

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
    deleteCompany: {
      deleteCompany,
      isDeleteCompanyLoading,
    },
  };
};
