import {
  useCreateEmployee 
} from './request';

export const useEmployees = () => {
  const {
    createEmployee, isLoading: isLoadingCreateEmployee
  } = useCreateEmployee();

  return {
    createEmployee: {
      createEmployee,
      isLoadingCreateEmployee,
    }
  };
};
