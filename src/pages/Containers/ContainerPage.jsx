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
import { 
  TableButtons 
} from '../../components/TableButtons/TableButtons';

const mapper = (data) => data

export const ContainerPage = () => {

  const [openCreateContainerModal, setOpenCreateContainerModal] = useState(false);
  const handleOpenCreateContainerModal = () => setOpenCreateContainerModal(true);
  const handleCloseCreateContainerModal = () => setOpenCreateContainerModal(false);

  const [openModifyContainerModal, setOpenModifyContainerModal] = useState(false);
  const [containerToModify, setContainerToModify] = useState(false);
  const handleOpenModifyContainerModal = (containerToModify) => {
    setContainerToModify(containerToModify)
    setOpenModifyContainerModal(true)
  };
  const handleCloseModifyContainerModal = () => {
    setOpenModifyContainerModal(false)
    setContainerToModify(null);
  };

  const [openDeleteContainerModal, setOpenDeleteContainerModal] = useState(false);
  const [containerToDelete, setContainerToDelete] = useState(false);
  const handleOpenDeleteContainerModal = (containerToDelete) => {
    setContainerToDelete(containerToDelete)
    setOpenDeleteContainerModal(true)
  };
  const handleCloseDeleteContainerModal = () => {
    setOpenDeleteContainerModal(false)
    setContainerToDelete(null);
  };

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

  const [selectedElement, setSelectedElement] = useState(null);
  const handleRowClick = (element) => {
    setSelectedElement(element);
  };

  const ComponentToRender = () => {
    return(
      <TableButtons
        selectedElement={selectedElement}
        handleOpenDeleteElementModal={handleOpenDeleteContainerModal}
        handleOpenModifyElementModal={handleOpenModifyContainerModal}
        handleOpenCreateElementModal={handleOpenCreateContainerModal}
        mainButtonText={'Nuevo contenedor'}
      />
    )
  }


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
            <ModalCreateResource
              title={'Modificar datos del contenedor'}
              open={openModifyContainerModal}
              handleClose={handleCloseModifyContainerModal}
              form={<ModifyContainerForm
                containerToModify={containerToModify}
                handleClose={handleCloseModifyContainerModal}
              />}
            />
            <ModalCreateResource
              title={'Eliminar contenedor'}
              open={openDeleteContainerModal}
              handleClose={handleCloseDeleteContainerModal}
              form={<DeleteContainerForm
                containerToDelete={containerToDelete}
                handleClose={handleCloseDeleteContainerModal}
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
              handleRowClick={handleRowClick}
              ComponentToRender={ComponentToRender}
            />
          </>
      }
    />
  );
};
