import {
  useFetch 
} from '../../../hooks/useFetch';
  
export const useGenerateOptimalRoute = () => {
  const {
    isLoading, commonFetch 
  } = useFetch({
    url: '/api/route',
  });
  
  const createOptimalRoute = () => {
    return commonFetch({
      method: 'GET',
    });
  };
  
  return {
    createOptimalRoute,
    isCreateOptimalRouteLoading: isLoading,
  };
};
  