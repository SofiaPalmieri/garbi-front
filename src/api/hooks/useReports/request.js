import {
  useFetch 
} from '../../../hooks/useFetch';
  
  
export const useCreateReport = () => {
  const {
    commonFetch, isLoading 
  } = useFetch({
    url: '/api',
  });
  
  const createReport = ({
    title, typeOfProblem, description, address, containerID, email 
  }) => {
    return commonFetch({
      uri: '/report',
      method: 'POST',
      body: {
        title, 
        typeOfProblem, 
        description, 
        address, 
        containerID, 
        email 
      },
    });
  };
    
  return {
    createReport,
    isLoading,
  };
};
  
  
  
