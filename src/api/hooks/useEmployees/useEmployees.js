import {
  useCreateEmployee,
  useFetchEmployees,
  useModifyEmployee,
  useDeleteEmployee,
  useFetchEmployee
} from './request';

export const useEmployees = () => {

  const {
    createEmployee, 
    isLoading: isCreateEmployeeLoading 
  } = useCreateEmployee();

  const {
    fetchEmployees,
    isLoading: isLoadingFetchEmployees
  } = useFetchEmployees();

  const {
    modifyEmployee, 
    isLoading: isModifyEmployeeLoading 
  } = useModifyEmployee();

  const {
    deleteEmployee, 
    isLoading: isDeleteEmployeeLoading 
  } = useDeleteEmployee();
  const {
    fetchEmployee, 
    isLoading: isFetchEmployeeLoading 
  } = useFetchEmployee();

  return {
    createEmployee: {
      createEmployee,
      isCreateEmployeeLoading,
    },
    fetchEmployees: {
      fetchEmployees,
      isLoadingFetchEmployees
    },
    modifyEmployee: {
      modifyEmployee,
      isModifyEmployeeLoading,
    },
    deleteEmployee: {
      deleteEmployee,
      isDeleteEmployeeLoading,
    },
    fetchEmployee: {
      fetchEmployee,
      isFetchEmployeeLoading,
    },
  };
};
