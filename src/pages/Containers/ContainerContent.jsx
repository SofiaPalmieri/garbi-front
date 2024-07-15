import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import {
  SearcherAndButton
} from '../../components/SearcherAndButton';
import {
  ModalCreateResource
} from '../../modales/ModalCreateResource';
import {
  useState
} from 'react';
import {
  CreateContainerForm
} from '../../forms/CreateContainer';
import {
  ModifyContainerForm
} from '../../forms/ModifyContainer/ModifyContainerForm';

const rows = [
  {
    id: 1234,
    barrio: 'Villa del Parque',
    area: 2,
    direccion: 'Av. Liberatador General',
    capacidad: '100%',
    bateria: '100%',
    tipoDeCarga: 'Bilateral',
    alturaContenedor: '170 cm',
  },
  {
    id: 12345,
    barrio: 'Villa del Parque',
    area: 2,
    direccion: 'Av. Liberatador General',
    capacidad: '100%',
    bateria: '100%',
    tipoDeCarga: 'Bilateral',
    alturaContenedor: '170 cm',
  },
  {
    id: 123456,
    barrio: 'Villa del Parque',
    area: 2,
    direccion: 'Av. Liberatador General',
    capacidad: '100%',
    bateria: '100%',
    tipoDeCarga: 'Bilateral',
    alturaContenedor: '170 cm',
  },
];

const tableHeaders = [
  {
    value: 'ID',
    minWidth: 88 
  },
  {
    value: 'Barrio',
    minWidth: 152 
  },
  {
    value: 'Área',
    minWidth: 88 
  },
  {
    value: 'Dirección',
    minWidth: 200 
  },
  {
    value: 'Capacidad',
    minWidth: 112 
  },
  {
    value: 'Bateria',
    minWidth: 104 
  },
  {
    value: 'Tipo de carga',
    minWidth: 120 
  },
  {
    value: 'Altura contenedor',
    minWidth: 152,
    sx: {
      borderRight: '1px solid #0000001F',
    }
  }
];

export const ContainerContent = () => {
  const [openCreateContainerModal, setOpenCreateContainerModal] = useState(false);
  const [openModifyContainerModal, setOpenModifyContainerModal] = useState(false);
  const [containerToModify, setContainerToModify] = useState(false);

  const handleOpenCreateContainerModal = () => setOpenCreateContainerModal(true);
  const handleCloseCreateContainerModal = () => setOpenCreateContainerModal(false);

  const handleOpenModifyContainerModal = (containerToModify) => {
    setContainerToModify(containerToModify)
    setOpenModifyContainerModal(true)
  };
  const handleCloseModifyContainerModal = () => {
    setOpenModifyContainerModal(false)
    setContainerToModify(null);
  };


  return (
    <Box
      sx={{
        padding: '32px',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <ModalCreateResource
        title={'Nuevo Contenedor'}
        description={'Complete los siguientes campos para agregar un nuevo contenedor'}
        open={openCreateContainerModal}
        handleClose={handleCloseCreateContainerModal}
        form={<CreateContainerForm />}
      />
      <ModalCreateResource
        title={'Modificar datos del contenedor'}
        open={openModifyContainerModal}
        handleClose={handleCloseModifyContainerModal}
        form={<ModifyContainerForm
          containerToModify={containerToModify}
        />}
        buttonSubmitMessage='MODIFICAR'
      />
      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <SearcherAndButton
          placeholderInput={'Buscar por ID o Dirección'}
          buttonText={'Nuevo contenedor'}
          inputWidth={'18.75rem'}
          onClick={handleOpenCreateContainerModal}
        />
        <Box
          sx={{
            position: 'relative',
            paddingRight: '113px'
          }}
        >
          <TableContainer>
            <Table
              aria-label='simple table'
            >
              <TableHead>
                <TableRow>
                  {tableHeaders.map((header, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        minWidth: header.minWidth 
                      }}
                    >
                      {header.value}
                    </TableCell>
                  ))}

                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((container) => (
                  <TableRow
                    key={container.id}
                    sx={{
                      '& .MuiTableCell-root:last-child': {
                        borderRight: 0,
                      },
                    }}
                  >
                    <TableCell
                      component='th'
                      scope='row'
                    >
                      {container.id}
                    </TableCell>
                    <TableCell
                      align='center'
                    >{container.barrio}</TableCell>
                    <TableCell
                      align='center'
                    >{container.area}</TableCell>
                    <TableCell
                      align='center'
                    >{container.direccion}</TableCell>
                    <TableCell
                      align='center'
                    >
                      <Box
                        sx={{
                          borderRadius: '8px',
                          backgroundColor: '#D32F2F',
                          minHeight: '28px',
                          width: '72px',
                          color: 'white',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          margin: 'auto',
                        }}
                      >
                        {container.capacidad}
                      </Box>
                    </TableCell>
                    <TableCell
                      align='center'
                    >
                      <Box
                        sx={{
                          borderRadius: '8px',
                          backgroundColor: '#D32F2F',
                          minHeight: '28px',
                          width: '72px',
                          color: 'white',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          margin: 'auto',
                        }}
                      >
                        {container.bateria}
                      </Box>
                    </TableCell>
                    <TableCell
                      align='center'
                    >{container.tipoDeCarga}</TableCell>
                    <TableCell
                      align='center'
                      sx={{
                        borderRight: '1px solid #0000001F',
                      }}
                    >
                      {container.alturaContenedor}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              top: 0
            }}
          >
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align='center'
                      sx={{
                        width: 113,
                        borderLeft: '1px solid #0000001F'
                      }}
                    >Acciones
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(container =>
                    <TableRow
                      key={container.id + '-action'}
                      sx={{
                        height: '61px' 
                      }}
                    >
                      <TableCell
                        align='center'
                        sx={{
                          height: '61px',
                          padding: 0,
                          borderLeft: '1px solid #0000001F'
                        }}
                      >
                        <Button
                          sx={{
                            width: 'fit-content',
                            minWidth: 'unset',
                            borderRadius: '50%'
                          }}
                        >
                          <EditIcon
                            sx={{
                              color: '#0000008F',
                            }}
                            onClick={() => handleOpenModifyContainerModal(container)}
                          />

                        </Button>
                        <Button
                          sx={{
                            width: 'fit-content',
                            minWidth: 'unset',
                            borderRadius: '50%'
                          }}
                        >
                          <DeleteIcon
                            sx={{
                              color: '#0000008F',
                            }}
                          />

                        </Button>
                      </TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={3}
          rowsPerPage={3}
          page={6}
        />

      </Paper>
    </Box >
  );
};
