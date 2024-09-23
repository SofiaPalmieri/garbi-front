import {
  useContainers 
} from '../../api/hooks/useContainers/useContainers';
import {
  CommonTableList 
} from '../../components/CommonTableList/CommonTableList';
import {
  FilterSideComponent
} from '../../components/FilterSideComponent';
import {
  HEIGHT_FULL_SCREEN 
} from '../../config';
import {
  ContainerTable 
} from '../../tables/ContainerTable/ContainerTable';

import {
  useCallback 
} from 'react';

const mapper = (data) => data

export const ContainerPage = () => {

  const {
    getContainers: {
      getContainers,
      isLoadingGetContainers
    }
  } = useContainers();

  const getContainersCallback = useCallback((lastKey) => {
    return getContainers(lastKey)
  }, [])

  return (
    <FilterSideComponent
      prefix={'Gestión'}
      title={'Contenedores'}
      height={HEIGHT_FULL_SCREEN}
      component={
        () =>
          <CommonTableList
            table={ContainerTable}
            fetchData={getContainersCallback}
            isLoadingFetchData={isLoadingGetContainers}
            mapper={mapper}
            placeHolderInput={'Buscar por ID, Título o Contenedor'}
          />
      }
    />
  );
};
