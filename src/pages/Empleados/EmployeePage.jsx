import {
  useEmployees 
} from '../../api/hooks/useEmployees/useEmployees';
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
  EmployeesTable 
} from '../../tables/EmployeesTable/EmployeesTable';
import {
  useState 
} from 'react';
import {
  ModalCreateResource
} from '../../modales/ModalCreateResource';
import {
  CreateEmployeeForm
} from '../../forms/CreateEmployee/CreateEmployeeForm';
import {
  ModifyEmployeeForm 
} from '../../forms/ModifyEmployee/ModifyEmployeeForm';
import {
  DeleteEmployeeForm 
} from '../../forms/DeleteEmployee/DeleteEmployeeForm';
import { 
  TableButtons 
} from '../../components/TableButtons/TableButtons';


const mapper = (data) => data

export const EmployeePage = () => {

  const [openCreateEmployeeModal, setOpenCreateEmployeeModal] = useState(false);
  const handleOpenCreateEmployeeModal = () => setOpenCreateEmployeeModal(true);
  const handleCloseCreateEmployeeModal = () => setOpenCreateEmployeeModal(false);

  const [openModifyEmployeeModal, setOpenModifyEmployeeModal] = useState(false);
  const [employeeToModify, setEmployeeToModify] = useState(false);
  const handleOpenModifyEmployeeModal = (employeeToModify) => {
    setEmployeeToModify(employeeToModify)
    setOpenModifyEmployeeModal(true)
  };
  const handleCloseModifyEmployeeModal = () => {
    setOpenModifyEmployeeModal(false)
    setEmployeeToModify(null);
  };

  const [openDeleteEmployeeModal, setOpenDeleteEmployeeModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(false);
  const handleOpenDeleteEmployeeModal = (employeeToDelete) => {
    setEmployeeToDelete(employeeToDelete)
    setOpenDeleteEmployeeModal(true)
  };
  const handleCloseDeleteEmployeeModal = () => {
    setOpenDeleteEmployeeModal(false)
    setEmployeeToDelete(null);
  };

  const {
    fetchEmployees: {
      fetchEmployees,
      isLoadingFetchEmployees
    }
  } = useEmployees();

  const [reloadTable, setReloadTable] = useState(0);
  const refreshList = () => {
    setReloadTable(prev => prev + 1);
  };

  const [selectedElement, setSelectedElement] = useState(null);
  const handleRowClick = (element) => {
    setSelectedElement(element);
  };


  return (
    <FilterSideComponent
      prefix={'Gestión'}
      title={'Empleados'}
      height={HEIGHT_FULL_SCREEN}
      component={
        () =>
          <>
            <ModalCreateResource
              title={'Nuevo Empleado'}
              description={'Complete los siguientes campos para agregar un nuevo empleado a la empresa'}
              open={openCreateEmployeeModal}
              handleClose={handleCloseCreateEmployeeModal}
              form={<CreateEmployeeForm
                handleClose = {handleCloseCreateEmployeeModal}
                onSuccess={refreshList}
              />}
            />
            <ModalCreateResource
              title={'Modificar datos del empleado'}
              open={openModifyEmployeeModal}
              handleClose={handleCloseModifyEmployeeModal}
              form={<ModifyEmployeeForm
                employeeToModify={employeeToModify}
                handleClose={handleCloseModifyEmployeeModal}
              />}
            />
            <ModalCreateResource
              title={'Eliminar empleado'}
              open={openDeleteEmployeeModal}
              handleClose={handleCloseDeleteEmployeeModal}
              form={<DeleteEmployeeForm
                employeeToDelete={employeeToDelete}
                handleClose={handleCloseDeleteEmployeeModal}
              />}
            />

            <CommonTableList
              table={EmployeesTable}
              fetchData={fetchEmployees}
              isLoadingFetchData={isLoadingFetchEmployees}
              mapper={mapper}
              reloadTable={reloadTable}
              placeHolderInput={'Buscar por Nombre o Apellido'}
              inputWidth={'288px'}
              handleRowClick={handleRowClick}
              componentToRender={
                <TableButtons
                  selectedElement={selectedElement}
                  handleOpenDeleteElementModal={handleOpenDeleteEmployeeModal}
                  handleOpenModifyElementModal={handleOpenModifyEmployeeModal}
                  handleOpenCreateElementModal={handleOpenCreateEmployeeModal}
                  mainButtonText={'Nuevo empleado'}
                />
              }
            />
          </>
      }
    />
  );
};
