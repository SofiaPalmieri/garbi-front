import {
  useCreateReport, 
  useFetchReports,
  useFetchReport,
  useReviewReport,
  useCloseReport,
} from './request';

export const useReports = () => {

  const {
    createReport, 
    isLoading: isCreateReportLoading 
  } = useCreateReport();

  const {
    fetchReports,
    isLoading: isLoadingFetchReports
  } = useFetchReports();

  const {
    fetchReport,
    isLoading: isLoadingFetchReport
  } = useFetchReport();

  const {
    reviewReport, 
    isLoading: isReviewReportLoading 
  } = useReviewReport();

  const {
    closeReport, 
    isLoading: isCloseReportLoading 
  } = useCloseReport();
  
  return {
    createReport: {
      createReport,
      isCreateReportLoading,
    },
    fetchReports: {
      fetchReports,
      isLoadingFetchReports
    },
    fetchReport: {
      fetchReport,
      isLoadingFetchReport
    },
    reviewReport: {
      reviewReport,
      isReviewReportLoading,
    },
    closeReport: {
      closeReport,
      isCloseReportLoading,
    },
  };
};
