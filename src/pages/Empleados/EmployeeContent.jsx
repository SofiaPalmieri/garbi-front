import {
  Box, Paper,
  TableCell,
  TableRow,
  Typography
} from '@mui/material';
import {
  useState
} from 'react';
import {
  SearcherAndButton
} from '../../components/SearcherAndButton';
import {
  CreateEmployeeForm
} from '../../forms/CreateEmployee/CreateEmployeeForm';
import {
  ModalCreateResource
} from '../../modales/ModalCreateResource';
import {
  TableWithEditAndDeleteButtons
} from '../../components/TableWithEditAndDeleteButtons';

const employeesInitial = [
  {
    id: 1,
    lastName: 'García',
    firstName: 'Juan',
    position: 'Developer',
    shift: 'Morning',
    companyEmail: 'juan.garcia@empresa.com',
    companyPhone: '+34 600 123 456'
  },
  {
    id: 2,
    lastName: 'Martínez',
    firstName: 'Ana',
    position: 'Designer',
    shift: 'Afternoon',
    companyEmail: 'ana.martinez@empresa.com',
    companyPhone: '+34 600 654 321'
  },
  {
    id: 3,
    lastName: 'López',
    firstName: 'Carlos',
    position: 'Manager',
    shift: 'Evening',
    companyEmail: 'carlos.lopez@empresa.com',
    companyPhone: '+34 600 789 012'
  }
];

const tableHeaders = [
  {
    value: 'Apellido',
    minWidth: 160
  },
  {
    value: 'Nombre',
    minWidth: 144
  },
  {
    value: 'Cargo',
    minWidth: 120
  },
  {
    value: 'Turno',
    minWidth: 120
  },
  {
    value: 'Email de la empresa',
    minWidth: 256
  },
  {
    value: 'Teléfono de la empresa',
    minWidth: 188
  }
];
const EmployeeRowRender = (employee) => {
  return (
    <TableRow
      key={employee.id}
      sx={{
        height: '48px',
        '& .MuiTableCell-root:last-child': {
          borderRight: 0,
        },
        '& .MuiTableCell-root': {
          height: '100%',
          paddingTop: 0,
          paddingBottom: 0
        }
      }}
    >
      <TableCell
        component='th'
        scope='row'
      >
        <Typography
          sx={{
            fontSize: '.875rem',
            fontWeight: 400,
            lineHeight: ' 1.2512rem',
            color: '#000000DE'
          }}
        >
          {employee.lastName}
        </Typography>
      </TableCell>
      <TableCell
        align='center'
      >
        <Typography
          sx={{
            fontSize: '.875rem',
            fontWeight: 400,
            lineHeight: ' 1.2512rem',
            color: '#000000DE'
          }}
        >
          {employee.firstName}
        </Typography>
      </TableCell>
      <TableCell
        align='center'
      ><Typography
        sx={{
            fontSize: '.875rem',
            fontWeight: 400,
            lineHeight: ' 1.2512rem',
            color: '#000000DE'
          }}
      >
          {employee.position}
        </Typography>
      </TableCell>
      <TableCell
        align='center'
      >
        <Typography
          sx={{
            fontSize: '.875rem',
            fontWeight: 400,
            lineHeight: ' 1.2512rem',
            color: '#000000DE'
          }}
        >
          {employee.shift}
        </Typography>
      </TableCell>
      <TableCell
        align='center'
      >
        <Typography
          sx={{
            fontSize: '.875rem',
            fontWeight: 400,
            lineHeight: ' 1.2512rem',
            color: '#000000DE'
          }}
        >
          {employee.companyEmail}
        </Typography>
      </TableCell>
      <TableCell
        align='center'
      >
        <Typography
          sx={{
            fontSize: '.875rem',
            fontWeight: 400,
            lineHeight: ' 1.2512rem',
            color: '#000000DE'
          }}
        >
          {employee.companyPhone}
        </Typography>
      </TableCell>
    </TableRow>
  )
}




export const EmployeeContent = () => {
  const [employees, setEmployees] = useState(employeesInitial)
  const [openCreateEmployeeModal, setOpenCreateEmployeeModal] = useState(false);
  const handleOpenCreateEmployeeModal = () => setOpenCreateEmployeeModal(true);
  const handleCloseCreateEmployeeModal = () => setOpenCreateEmployeeModal(false);

  const [openModifyEmployeeModal, setOpenModifyEmployeeModal] = useState(false);
  const [employeeToModify, setEmployeeToModify] = useState(false);

  const handleOpenModifyContainerModal = (employeeToModify) => {
    setEmployeeToModify(employeeToModify)
    setOpenModifyEmployeeModal(true)
  };
  const handleCloseModifyCompanyModal = () => {
    setOpenModifyEmployeeModal(false)
    setEmployeeToModify(null);
  };
  return (
    <Box
      sx={{
        padding: '32px',
      }}
    >
      <ModalCreateResource
        title={'Nuevo Empleado'}
        description={'Complete los siguientes campos para agregar un nuevo empleado a la empresa'}
        open={openCreateEmployeeModal}
        handleClose={handleCloseCreateEmployeeModal}
        form={<CreateEmployeeForm />}
      />
      <Paper
        sx={{
          width: '100%',
        }}
      >
        <SearcherAndButton
          placeholderInput={'Buscar por Nombre o Apellido'}
          buttonText={'Nuevo Empleado'}
          inputWidth={'18.75rem'}
          onClick={handleOpenCreateEmployeeModal}
        />
        <TableWithEditAndDeleteButtons
          tableHeaders={tableHeaders}
          rows={employees}
          renderRow={EmployeeRowRender}
          handleOnClickEditButton={handleOpenCreateEmployeeModal}
        />
      </Paper>
    </Box>
  );
};
