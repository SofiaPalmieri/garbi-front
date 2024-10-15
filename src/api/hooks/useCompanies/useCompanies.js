import {
  useCreateCompany,
  useFetchCompanies,
  useModifyCompany,
  useDeleteCompany,
  useFetchCompany
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
    getCompany, 
    isLoading: isGetCompanyLoading 
  } = useFetchCompany();

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
    getCompany: {
      getCompany,
      isGetCompanyLoading
    }
  };
};
