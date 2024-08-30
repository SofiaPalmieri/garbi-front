import {
  useFetch 
} from '../../../hooks/useFetch';

export const useGetEmployees = () => {
  const {
    commonFetch, isLoading 
  } = useFetch({
    url: '/integration/user',
  });

  const getEmployees = () => {
    return commonFetch({
      method: 'GET',
    });
  };

  return {
    getEmployees,
    isLoadingGetEmployees: isLoading,
  };
};

export const useCreateEmployee = () => {
  const {
    commonFetch, isLoading 
  } = useFetch({
    url: '/api/user',
  });

  const createEmployee = ({
    companyId, name, surname, personalPhone, personalEmail, companyPhone, companyEmail, workingShift, role 
  }) => {
    return commonFetch({
      uri: '/register',
      method: 'POST',
      body: {
        companyId,
        name, 
        surname, 
        personalPhone, 
        personalEmail, 
        companyPhone,
        companyEmail,
        password: '', //TODO: delete when BE is ready
        workingShift,
        role
      },
    });
  };

  return {
    createEmployee,
    isLoading,
  };
};
