import {
  useGetEmployees, useCreateEmployee, useModifyEmployee
} from './request';

export const useEmployees = () => {
  const {
    getEmployees, isLoading: isLoadingGetEmployees
  } = useGetEmployees();

  const {
    createEmployee, isLoading: isLoadingCreateEmployee
  } = useCreateEmployee();

  const {
    modifyEmployee, isLoading: isLoadingModifyEmployee
  } = useModifyEmployee();

  return {
    getEmployees: {
      getEmployees,
      isLoadingGetEmployees,
    },
    createEmployee: {
      createEmployee,
      isLoadingCreateEmployee,
    },
    modifyEmployee: {
      modifyEmployee,
      isLoadingModifyEmployee,
    }
  };
};
