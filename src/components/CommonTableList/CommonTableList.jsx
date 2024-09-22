import {
  Box,
  CircularProgress,
  Paper,
  TableContainer
} from '@mui/material';
import {
  SearcherPaginated
} from '../SearcherPaginated';
import {
  HEIGHT_HEADER_FILTER_SIDE_COMPONENT
} from '../../config';
import {
  usePagination
} from '../../hooks/usePagination';
import {
  useEffect, useState
} from 'react';
import {
  ModalCreateResource
} from '../../modales/ModalCreateResource';


export const CommonTableList = ({
  table: Table, 
  fetchData, isLoadingFetchData, mapper, reloadTable, 
  placeHolderInput, inputWidth, 
  button=true, datePicker=true, buttonText, onClick,
  modifyModalTitle, ModifyForm,
  deleteModalTitle, DeleteForm
}) => {

  const {
    data,
    prevFetch,
    nextFetch,
    disabledPrevBtn,
    disabledNextBtn,
    refetchData
  } = usePagination({
    fetch: fetchData,
    mapper
  })

  useEffect(() => { //to reload table when a new row is added.
    refetchData();
  }, [reloadTable]);


  const [selectedElement, setSelectedElement] = useState(null);
  const handleRowClick = (element) => {
    setSelectedElement(element);
  };

  const [openModifyElementModal, setOpenModifyElementModal] = useState(false);
  const [elementToModify, setElementToModify] = useState(false);
  const handleOpenModifyElementModal = (elementToModify) => {
    setElementToModify(elementToModify)
    setOpenModifyElementModal(true)
  };
  const handleCloseModifyElementModal = () => {
    setOpenModifyElementModal(false)
    setElementToModify(null);
  };

  const [openDeleteElementModal, setOpenDeleteElementModal] = useState(false);
  const [elementToDelete, setElementToDelete] = useState(false);
  const handleOpenDeleteElementModal = (elementToDelete) => {
    setElementToDelete(elementToDelete)
    setOpenDeleteElementModal(true)
  };
  const handleCloseDeleteElementModal = () => {
    setOpenDeleteElementModal(false)
    setElementToDelete(null);
  };


  return (
    <Box
      sx={{
        padding: '32px',
        width: '100%',
        height: `calc(100% - ${HEIGHT_HEADER_FILTER_SIDE_COMPONENT})`,
      }}
    >
      <ModalCreateResource
        title={modifyModalTitle}
        open={openModifyElementModal}
        handleClose={handleCloseModifyElementModal}
        form={<ModifyForm
          elementToModify={elementToModify}
          handleClose={handleCloseModifyElementModal}
        />}
      />
      <ModalCreateResource
        title={deleteModalTitle}
        open={openDeleteElementModal}
        handleClose={handleCloseDeleteElementModal}
        form={<DeleteForm
          elementToDelete={elementToDelete}
          handleClose={handleCloseDeleteElementModal}
        />}
      />

      <Paper
        sx={{
          width: '100%',
          height: '100%'
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            paddingX: '1rem',
            height: '100%',
            overflow: 'hidden',
            width: '100%'
          }}
        >
          <SearcherPaginated
            prevFetch={prevFetch}
            nextFetch={nextFetch}
            disabledNextBtn={disabledNextBtn || isLoadingFetchData}
            disabledPrevBtn={disabledPrevBtn || isLoadingFetchData}
            placeholderInput={placeHolderInput}
            inputWidth={inputWidth}
            button={button}
            datePicker={datePicker}
            buttonText={buttonText}
            onClick={onClick}
            selectedElement={selectedElement}
            handleOpenModifyElementModal={handleOpenModifyElementModal}
            handleOpenDeleteElementModal={handleOpenDeleteElementModal}
          />
          <Box
            sx={{
              height: 'calc(100% - 4.5rem)',
              overflow: 'auto',
              width: '100%'
            }}
          >
            {
              isLoadingFetchData ?
                <Box
                  sx={{
                    width: 1,
                    display: 'flex',
                    p: 2,
                    justifyContent: 'center'
                  }}
                >
                  <CircularProgress />
                </Box>
                :
                <Table
                  data={data}
                  handleRowClick={handleRowClick}
                />
            }
          </Box>
        </TableContainer>
      </Paper>
    </Box>
  );
}
