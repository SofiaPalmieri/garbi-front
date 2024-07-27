import {
  useFetch 
} from '../../../hooks/useFetch';

export const useLogin = () => {
  const {
    commonFetch, isLoading 
  } = useFetch({
    url: '/public-api',
  });

  const login = ({
    email, password 
  }) => {
    return commonFetch({
      uri: '/login',
      method: 'POST',
      body: {
        email,
        password,
      },
    });
  };

  return {
    login,
    isLoading,
  };
};




export const useChangePassword = () => {
  const {
    commonFetch, isLoading 
  } = useFetch({
    url: '/public-api',
  });

  const changePassword = ({
    email, oldPassword, newPassword 
  }) => {
    return commonFetch({
      uri: '/change_password',
      method: 'POST',
      body: {
        email,
        oldPassword,
        newPassword,
      },
    });
  };

  return {
    changePassword,
    isLoading,
  };
};
