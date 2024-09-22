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
import {
  ModifyContainerForm 
} from '../../forms/ModifyContainer/ModifyContainerForm';
import {
  DeleteContainerForm 
} from '../../forms/DeleteContainer/DeleteContainerForm';

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

  const [reloadTable, setReloadTable] = useState(0);
  const refreshList = () => {
    setReloadTable(prev => prev + 1);
  };

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
                onSuccess={refreshList}
              />}
            />

            <CommonTableList
              table={ContainerTable}
              fetchData={getContainers}
              isLoadingFetchData={isLoadingGetContainers}
              mapper={mapper}
              reloadTable={reloadTable}
              placeHolderInput={'Buscar por ID o Dirección'}
              inputWidth={'288px'}
              buttonText={'Nuevo contenedor'}
              onClick={handleOpenCreateContainerModal}
              modifyModalTitle={'Modificar datos del contenedor'}
              ModifyForm={ModifyContainerForm}
              deleteModalTitle={'Eliminar contenedor'}
              DeleteForm={DeleteContainerForm}
            />
          </>
      }
    />
  );
};
