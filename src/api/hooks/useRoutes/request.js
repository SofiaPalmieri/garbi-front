import {
  useFetch 
} from '../../../hooks/useFetch';

export const useGetRoutes = () => {
  const {
    isLoading, commonFetch 
  } = useFetch({
    url: '/api/route',
  });

  const getRoutes = () => {
    return commonFetch({
      method: 'GET',
    });
  };

  return {
    getRoutes,
    isLoadingGetRoutes: isLoading,
  };
};
