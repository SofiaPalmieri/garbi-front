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

const mapper = (data) => data

export const EmployeePage = () => {

  const [openCreateEmployeeModal, setOpenCreateEmployeeModal] = useState(false);
  const handleOpenCreateEmployeeModal = () => setOpenCreateEmployeeModal(true);
  const handleCloseCreateEmployeeModal = () => setOpenCreateEmployeeModal(false);

  const {
    fetchEmployees: {
      fetchEmployees,
      isLoadingFetchEmployees
    }
  } = useEmployees();

  const [reloadTable, setReloadTable] = useState(0);
  const refreshEmployeeList = () => {
    setReloadTable(prev => prev + 1);
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
                onSuccess={refreshEmployeeList}
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
              buttonText={'Nuevo empleado'}
              onClick={handleOpenCreateEmployeeModal}
              modifyModalTitle={'Modificar datos del empleado'}
              ModifyForm={ModifyEmployeeForm}
              deleteModalTitle={'Eliminar empleado'}
              DeleteForm={DeleteEmployeeForm}
            />
          </>
      }
    />
  );
};
