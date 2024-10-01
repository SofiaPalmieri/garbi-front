import {
  useFetchRoutes,
  useFetchRoute,
  useSelectOptimalRoutes
} from './request';

export const useRoutes = () => {
  const {
    fetchRoutes,
    isLoading: isLoadingFetchRoutes
  } = useFetchRoutes();

  const {
    fetchRoute,
    isLoading: isLoadingFetchRoute
  } = useFetchRoute();

  const {
    isLoading: isLoadingSelectRoute,
    selectOptimalRoute
  } = useSelectOptimalRoutes()

  return {
    fetchRoutes: {
      fetchRoutes,
      isLoadingFetchRoutes
    },
    fetchRoute: {
      fetchRoute,
      isLoadingFetchRoute
    },
    selectOptimalRoute: {
      isLoadingSelectRoute,
      selectOptimalRoute
    }
  };
};
