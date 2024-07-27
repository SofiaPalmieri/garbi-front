import {
  useCreateReport 
} from './request';

export const useAuth = () => {
   
  const {
    createReport, isLoading: isCreateReportLoading 
  } = useCreateReport();
  
  return {
    createReport: {
      createReport,
      isCreateReportLoading,
    },
  };
};
  