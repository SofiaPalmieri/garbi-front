import {
  useFetch
} from '../../../hooks/useFetch';


export const useCreateReport = () => {
  const {
    commonFetch, isLoading
  } = useFetch({
    url: '/api',
  });

  const createReport = (report) => {
    return commonFetch({
      uri: '/report',
      method: 'POST',
      body: report,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    },
    
    );
  };

  return {
    createReport,
    isLoading,
  };
};

