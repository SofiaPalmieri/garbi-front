import {
  useCompanies
} from '../../api/hooks/useCompanies/useCompanies';
import {
  Box, 
  Divider,
} from '@mui/material';
import {
  BreadcrumbsComponent
} from '../../components/BreadcrumbsComponent';
import {
  useCallback, useState
} from 'react';
import {
  ModalCreateResource
} from '../../modales/ModalCreateResource';
import {
  CreateCompanyForm
} from '../../forms/CreateCompany/CreateCompanyForm';
import {
  ModifyCompanyForm
} from '../../forms/ModifyCompany/ModifyCompanyForm';
import {
  DeleteCompanyForm
} from '../../forms/DeleteCompany/DeleteCompanyForm';
import { 
  TableButtons 
} from '../../components/TableButtons/TableButtons';
import {
  CommonTableList
} from '../../components/CommonTableList/CommonTableList';
import {
  CompaniesTable
} from '../../tables/CompaniesTable/CompaniesTable';


const mapper = (data) => data

export const CompanyPage = () => {

  const [openCreateCompanyModal, setOpenCreateCompanyModal] = useState(false);
  const [openDeleteCompanyModal, setOpenDeleteCompanyModal] = useState(false);
  const [companyToDelete, setCompanyToDelete] = useState(false);
  const [openModifyCompanyModal, setOpenModifyCompanyModal] = useState(false);
  const [companyToModify, setCompanyToModify] = useState(false);
  const [reloadTable, setReloadTable] = useState(0);
  const [selectedElement, setSelectedElement] = useState(null);

  const refreshList = () => {
    setReloadTable(prev => prev + 1);
  };

  const handleOpenCreateCompanyModal = () => setOpenCreateCompanyModal(true);
  const handleCloseCreateCompanyModal = () => setOpenCreateCompanyModal(false);

  const handleOpenModifyCompanyModal = (companyToModify) => {
    setCompanyToModify(companyToModify)
    setOpenModifyCompanyModal(true)
  };
  const handleCloseModifyCompanyModal = () => {
    setOpenModifyCompanyModal(false)
    setCompanyToModify(null);
  };

  const handleOpenDeleteCompanyModal = (companyToDelete) => {
    setCompanyToDelete(companyToDelete)
    setOpenDeleteCompanyModal(true)
  };
  const handleCloseDeleteCompanyModal = () => {
    setOpenDeleteCompanyModal(false)
    setCompanyToDelete(null);
  };

  const {
    fetchCompanies: {
      fetchCompanies,
      isLoadingFetchCompanies
    }
  } = useCompanies();

  const fetchData = useCallback((lastKey) => {
    return fetchCompanies(lastKey)
  }, [])

  const handleRowClick = (element) => {
    setSelectedElement(element);
  };


  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        // padding: '4rem',
      }}
    >
      <Box >
        <Box
          sx={{
            width: '100%',
            padding: '16px 32px',
          }}
        >
          <BreadcrumbsComponent
            title={'Empresas'}
          />
        </Box>
        <Divider />
        <>
          <ModalCreateResource
            title={'Nueva Empresa'}
            description={'Complete los siguientes campos para agregar una nueva empresa de recolección al sistema'}
            open={openCreateCompanyModal}
            handleClose={handleCloseCreateCompanyModal}
            form={<CreateCompanyForm
              handleClose={handleCloseCreateCompanyModal}
              onSuccess={refreshList}
            />}
          />
          <ModalCreateResource
            title={'Modificar datos de la empresa'}
            open={openModifyCompanyModal}
            handleClose={handleCloseModifyCompanyModal}
            form={<ModifyCompanyForm
              companyToModify={companyToModify}
              handleClose={handleCloseModifyCompanyModal}
            />}
          />
          <ModalCreateResource
            title={'Eliminar empresa'}
            open={openDeleteCompanyModal}
            handleClose={handleCloseDeleteCompanyModal}
            form={<DeleteCompanyForm
              companyToDelete={companyToDelete}
              handleClose={handleCloseDeleteCompanyModal}
            />}
          />

          <CommonTableList
            table={CompaniesTable}
            fetchData={fetchData}
            isLoadingFetchData={isLoadingFetchCompanies}
            mapper={mapper}
            reloadTable={reloadTable}
            placeHolderInput={'Buscar por Nombre'}
            inputWidth={'288px'}
            handleRowClick={handleRowClick}
            componentToRender={
              <TableButtons
                selectedElement={selectedElement}
                handleOpenDeleteElementModal={handleOpenDeleteCompanyModal}
                handleOpenModifyElementModal={handleOpenModifyCompanyModal}
                handleOpenCreateElementModal={handleOpenCreateCompanyModal}
                mainButtonText={'Nueva empresa'}
              />
            }
          />
        </>
      </Box>
    </Box>
  );
}
