import {
  useGenerateOptimalRoute
} from './request';

export const useGenerateOptimalRoutes = () => {
  const {
    createOptimalRoute, isCreateOptimalRouteLoading 
  } = useGenerateOptimalRoute();

  return {
    createOptimalRoute: {
      createOptimalRoute,
      isCreateOptimalRouteLoading,
    },
  };
};
