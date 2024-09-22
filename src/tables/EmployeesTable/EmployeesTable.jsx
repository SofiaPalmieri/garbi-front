import {
  Box,
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

const employeeRowRender = (employee, handleRowClick, selectedEmployee) => {
  return (
    <TableRow
      key={employee.id}
      onClick={() => handleRowClick(employee)}
      sx={{
        height: '48px',
        cursor: 'pointer',
        backgroundColor: selectedEmployee?.id === employee.id ? 'rgba(18, 66, 44, 0.15)' : 'transparent',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
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
  data: employees,
  setSelectedElement
}) => {

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const handleRowClick = (employee) => {
    if (selectedEmployee?.id === employee.id) {
      setSelectedElement(null);
      setSelectedEmployee(null);
    } else {
      setSelectedElement(employee);
      setSelectedEmployee(employee);
    }
  };

  
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%'
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
              employeeRowRender(employee, handleRowClick, selectedEmployee)
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
