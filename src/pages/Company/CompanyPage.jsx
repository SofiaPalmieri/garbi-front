import {
  Box, Paper, 
  TableCell, 
  TableRow
} from '@mui/material';
import {
  useState 
} from 'react';
import {
  SearcherAndButton 
} from '../../components/SearcherAndButton';
import {
  ModalCreateResource 
} from '../../modales/ModalCreateResource';
import {
  CreateCompanyForm 
} from '../../forms/CreateCompany/CreateCompanyForm';
import {
  TableWithEditAndDeleteButtons 
} from '../../components/TableWithEditAndDeleteButtons';

const containersInitial = [
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

const ContainerRowRender = (container) => {
  return (
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
  )
}


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

const CompanyPage = () => {
  const [containers, setContainers] = useState(containersInitial)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        width: '100%',
        height: '100%',
        padding: '4rem',
      }}
    >
      <ModalCreateResource
        title={'Nueva Empresa'}
        description={
          'Complete los siguientes campos para agregar una nueva empresa de recolección al sistema'
        }
        open={open}
        handleClose={handleClose}
        form={<CreateCompanyForm />}
      />

      <Paper
        sx={{
          width: '100%',
        }}
      >
        <SearcherAndButton
          placeholderInput={'Buscar por Razón social o Nombre'}
          buttonText={'nueva empresa'}
          inputWidth={'20rem'}
          onClick={handleOpen}
        />
        <TableWithEditAndDeleteButtons
          tableHeaders={tableHeaders}
          rows={containers}
          renderRow={ContainerRowRender}
          handleOnClickEditButton={handleOpenModifyContainerModal}
        />
      </Paper>
    </Box>
  );
};

export default CompanyPage;
