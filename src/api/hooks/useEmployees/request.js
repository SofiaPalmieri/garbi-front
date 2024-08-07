import {
  useFetch 
} from '../../../hooks/useFetch';

export const useCreateEmployee = () => {
  const {
    commonFetch, isLoading 
  } = useFetch({
    url: '/api/user',
  });

  const generateRandomPassword = (length) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };

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
        password: generateRandomPassword(12),
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
