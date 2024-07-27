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
    userId,
    containerId,
    title,
    description,
    address,
    imagePath,
    email,
    type,  
  }) => {
    return commonFetch({
      uri: '/report',
      method: 'POST',
      body: {
        userId,
        containerId,
        title,
        description,
        address,
        imagePath,
        email,
        type,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
    
  return {
    createReport,
    isLoading,
  };
};
  
