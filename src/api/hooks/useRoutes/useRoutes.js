import {
  useGetRoutes 
} from './request';

export const useRoutes = () => {
  const {
    getRoutes, isLoadingGetRoutes 
  } = useGetRoutes();

  return {
    getRoutes: {
      getRoutes,
      isLoadingGetRoutes,
    },
  };
};
