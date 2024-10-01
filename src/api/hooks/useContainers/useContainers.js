import {
  useGetAllContainers,
  useGetContainers 
} from './request';

export const useContainers = () => {
  const {
    getContainers, isLoadingGetContainers 
  } = useGetContainers();

  const {
    getAllContainers,
    isLoadingGetAllContainers
  } = useGetAllContainers();

  return {
    getContainers: {
      getContainers,
      isLoadingGetContainers,
    },
    getAllContainers: {
      getAllContainers,
      isLoadingGetAllContainers
    }
  };
};
