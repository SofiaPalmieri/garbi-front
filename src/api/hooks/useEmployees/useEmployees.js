import {
  useGetEmployees, useCreateEmployee 
} from './request';

export const useEmployees = () => {
  const {
    getEmployees, isLoading: isLoadingGetEmployees
  } = useGetEmployees();
  const {
    createEmployee, isLoading: isLoadingCreateEmployee
  } = useCreateEmployee();

  return {
    getEmployees: {
      getEmployees,
      isLoadingGetEmployees,
    },
    createEmployee: {
      createEmployee,
      isLoadingCreateEmployee,
    }
  };
};
