import {
  useCreateReport 
} from './request';

export const useReports = () => {
   
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
  