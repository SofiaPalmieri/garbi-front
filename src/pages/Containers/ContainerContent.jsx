import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
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

const rows = [
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box
      sx={{
        padding: '32px',
      }}
    >
      <ModalCreateResource
        title={'Nuevo Contenedor'}
        description={'Complete los siguientes campos para agregar un nuevo contenedor'}
        open={open}
        handleClose={handleClose}
        form={<CreateContainerForm />}
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
          onClick={handleOpen}
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
              {rows.map((row) => (
                <TableRow
                  key={row.direccion}
                >
                  <TableCell
                    component='th'
                    scope='row'
                  >
                    {row.id}
                  </TableCell>
                  <TableCell
                    align='center'
                  >{row.barrio}</TableCell>
                  <TableCell
                    align='center'
                  >{row.area}</TableCell>
                  <TableCell
                    align='center'
                  >{row.direccion}</TableCell>
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
                      {row.capacidad}
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
                      {row.bateria}
                    </Box>
                  </TableCell>
                  <TableCell
                    align='center'
                  >{row.tipoDeCarga}</TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      borderRight: '1px solid #0000001F',
                    }}
                  >
                    {row.alturaContenedor}
                  </TableCell>
                  <TableCell
                    align='center'
                  >
                    <EditIcon
                      sx={{
                        color: '#0000008F',
                        marginRight: '16px',
                      }}
                    />
                    <DeleteIcon
                      sx={{
                        color: '#0000008F',
                      }}
                    />
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
