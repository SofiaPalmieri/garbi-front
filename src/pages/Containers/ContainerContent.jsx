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
        }}
      >
        <SearcherAndButton
          placeholderInput={'Buscar por ID o Dirección'}
          buttonText={'Nuevo contenedor'}
          inputWidth={'18.75rem'}
          onClick={handleOpenCreateContainerModal}
        />
        <TableContainer
          component={Paper}
        >
          <Table
            sx={{
              minWidth: 650,
            }}
            aria-label='simple table'
          >
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell
                  align='center'
                >Barrio</TableCell>
                <TableCell
                  align='center'
                >Área</TableCell>
                <TableCell
                  align='center'
                >Dirección</TableCell>
                <TableCell
                  align='center'
                >Capacidad</TableCell>
                <TableCell
                  align='center'
                >Bateria</TableCell>
                <TableCell
                  align='center'
                >Tipo de carga</TableCell>
                <TableCell
                  align='center'
                  sx={{
                    borderRight: '1px solid #0000001F',
                  }}
                >
                  Altura contenedor
                </TableCell>
                <TableCell
                  align='center'
                >Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((container) => (
                <TableRow
                  key={container.id}
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
                  <TableCell
                    align='center'
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={3}
            rowsPerPage={3}
            page={6}
          />
        </TableContainer>
      </Paper>
    </Box>
  );
};
