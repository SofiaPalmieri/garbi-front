import {
  useCreateEmployee,
  useFetchEmployees,
  useModifyEmployee,
  useDeleteEmployee
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
  };
};
