import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import {
  useState 
} from 'react';
import {
  ModalCreateResource
} from '../../modales/ModalCreateResource';
import {
  ModifyEmployeeForm 
} from '../../forms/ModifyEmployee/ModifyEmployeeForm';
import {
  DeleteEmployeeForm 
} from '../../forms/DeleteEmployee/DeleteEmployeeForm';


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

const employeeRowRender = (employee) => {
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
          {employee.surname}
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
          {employee.name}
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
          {employee.role}
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
          {employee.workingShift}
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

export const EmployeesTable = ({
  data: employees
}) => {

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

  
  return (
    <Box
      sx={{
        position: 'relative',
        paddingRight: '7.0625rem',
        width: '100%'
      }}
    >
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

      <TableContainer>
        <Table
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              {tableHeaders.map((header, index) => (
                <TableCell
                  key={index}
                  align={header.align || 'center'}
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
            {employees.map(employee => (
              employeeRowRender(employee)
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
                    borderLeft: '.0625rem solid #0000001F'
                  }}
                >Acciones
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map(row => <TableRow
                key={row.id + '-action'}
                sx={{
                  height: '3rem'
                }}
              >
                <TableCell
                  align='center'
                  sx={{
                    height: '100%',
                    padding: 0,
                    borderLeft: '.0625rem solid #0000001F'
                  }}
                >
                  <Button
                    sx={{
                      width: 'fit-content',
                      minWidth: 'unset',
                      borderRadius: '50%'
                    }}
                    onClick={() => handleOpenModifyEmployeeModal(row)}
                  >
                    <EditIcon
                      sx={{
                        color: '#0000008F',
                      }}
                    />

                  </Button>
                  <Button
                    sx={{
                      width: 'fit-content',
                      minWidth: 'unset',
                      borderRadius: '50%'
                    }}
                    onClick={() => handleOpenDeleteEmployeeModal(row)}
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
  );
};
