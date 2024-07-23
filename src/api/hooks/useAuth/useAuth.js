import {
  useChangePassword, useLogin, useCreateReport 
} from './request';

export const useAuth = () => {
  const {
    login, isLoading: isLoginLoading 
  } = useLogin();

  const {
    createReport, isLoading: isCreateReportLoading 
  } = useCreateReport();

  const {
    changePassword, isLoading: isChangePasswordLoading 
  } = useChangePassword();

  return {
    login: {
      login,
      isLoginLoading,
    },
    changePassword: {
      changePassword,
      isChangePasswordLoading,
    },
    createReport: {
      createReport,
      isCreateReportLoading,
    },
  };
};
