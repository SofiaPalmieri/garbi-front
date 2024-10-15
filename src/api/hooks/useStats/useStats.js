import {
  useGetStats 
} from './request'

export const useStats = () => {
  const {
    getStats,
    isLoading: isLoadingGetStats
  } = useGetStats();


  return {
    getStats: {
      getStats,
      isLoadingGetStats
    }
  }
}