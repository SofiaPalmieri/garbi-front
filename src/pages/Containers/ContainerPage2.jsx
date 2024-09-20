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

const mapper = (data) => data

export const ContainerPage2 = () => {

  const {
    getContainers: {
      getContainers,
      isLoadingGetContainers
    }
  } = useContainers();

  return (
    <FilterSideComponent
      prefix={'Gestión'}
      title={'Contenedores'}
      height={HEIGHT_FULL_SCREEN}
      component={
        () =>
          <CommonTableList
            table={ContainerTable}
            fetchData={getContainers}
            isLoadingFetchData={isLoadingGetContainers}
            mapper={mapper}
            placeHolderInput={'Buscar por ID, Título o Contenedor'}
          />
      }
    />
  );
};
