import {
  useGetAllContainers,
  useGetContainers,
  useCreateContainer,
  useModifyContainer,
  useDeleteContainer
} from './request';

export const useContainers = () => {
  const {
    getContainers, isLoadingGetContainers 
  } = useGetContainers();

  const {
    getAllContainers,
    isLoadingGetAllContainers
  } = useGetAllContainers();

  const {
    createContainer, 
    isLoading: isCreateContainerLoading 
  } = useCreateContainer();

  const {
    modifyContainer, 
    isLoading: isModifyContainerLoading 
  } = useModifyContainer();

  const {
    deleteContainer, 
    isLoading: isDeleteContainerLoading 
  } = useDeleteContainer();

  return {
    getContainers: {
      getContainers,
      isLoadingGetContainers,
    },
    getAllContainers: {
      getAllContainers,
      isLoadingGetAllContainers
    },
    createContainer: {
      createContainer,
      isCreateContainerLoading,
    },
    modifyContainer: {
      modifyContainer,
      isModifyContainerLoading,
    },
    deleteContainer: {
      deleteContainer,
      isDeleteContainerLoading,
    },
  };
};
