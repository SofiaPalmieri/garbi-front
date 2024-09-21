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
  useState 
} from 'react';
import {
  ModalCreateResource 
} from '../../modales/ModalCreateResource';
import {
  CreateContainerForm 
} from '../../forms/CreateContainer';

const mapper = (data) => data

export const ContainerPage = () => {

  const [openCreateContainerModal, setOpenCreateContainerModal] = useState(false);
  const handleOpenCreateContainerModal = () => setOpenCreateContainerModal(true);
  const handleCloseCreateContainerModal = () => setOpenCreateContainerModal(false);

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
          <>
            <ModalCreateResource
              title={'Nuevo Contenedor'}
              description={'Complete los siguientes campos para agregar un nuevo contenedor'}
              open={openCreateContainerModal}
              handleClose={handleCloseCreateContainerModal}
              form={<CreateContainerForm
                handleClose={handleCloseCreateContainerModal}
              />}
            />

            <CommonTableList
              table={ContainerTable}
              fetchData={getContainers}
              isLoadingFetchData={isLoadingGetContainers}
              mapper={mapper}
              placeHolderInput={'Buscar por ID, Título o Contenedor'}
              buttonText={'Nuevo contenedor'}
              onClick={handleOpenCreateContainerModal}
            />
          </>
      }
    />
  );
};
