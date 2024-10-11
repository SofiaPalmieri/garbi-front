import {
  useDeleteAreas,
  useGetAreas, 
  usePostAreas,
  usePutAreas
} from './request'


export const useAreas = () => {
  const {
    getAreas,
    isLoading: isLoadingGetAreas
  } = useGetAreas()

  const {
    postAreas,
    isLoading: isLoadingPostAreas
  } = usePostAreas();

  const {
    putAreas,
    isLoading: isLoadingPutAreas
  } = usePutAreas();

  const {
    deleteArea,
    isLoading: isLoadingDeleteArea
  } = useDeleteAreas();

  return {
    getAreas: {
      getAreas,
      isLoadingGetAreas
    },
    postAreas: {
      postAreas,
      isLoadingPostAreas
    },
    putAreas: {
      putAreas,
      isLoadingPutAreas
    },
    deleteArea: {
      deleteArea,
      isLoadingDeleteArea
    }
  }
}
