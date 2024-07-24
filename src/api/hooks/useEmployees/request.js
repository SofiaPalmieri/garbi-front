import {
  useFetch 
} from '../../../hooks/useFetch';

export const useCreateEmployee = () => {
  const {
    commonFetch, isLoading 
  } = useFetch({
    url: '/api/user',
  });

  const createEmployee = ({
    companyId, name, surname, phone, email, password, workingDay, role 
  }) => {
    return commonFetch({
      uri: '/register',
      method: 'POST',
      body: {
        companyId,
        name, 
        surname, 
        phone, 
        email, 
        //companyPhone, //TODO: add when BE is ready
        //companyEmail, //TODO: add when BE is ready
        password, 
        workingDay,
        role
      },
    });
  };

  return {
    createEmployee,
    isLoading,
  };
};
