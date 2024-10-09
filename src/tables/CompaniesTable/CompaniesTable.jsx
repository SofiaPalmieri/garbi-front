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
    value: 'Razón social',
    minWidth: 160
  },
  {
    value: 'CUIT',
    minWidth: 144
  },
  {
    value: 'Provincia',
    minWidth: 200
  },
  {
    value: 'Dirección',
    minWidth: 176
  },
  {
    value: 'Fecha de inicio',
    minWidth: 136
  },
  {
    value: 'Mail admin',
    minWidth: 144
  }
];

const companyRowRender = (company, handleRowClick, isSelected) => {
  return (
    <TableRow
      key={company.id}
      onClick={() => handleRowClick(company)}
      sx={{
        height: '48px',
        cursor: 'pointer',
        backgroundColor: isSelected ? 'rgba(18, 66, 44, 0.15)' : 'transparent',
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
      >
        <Typography
          sx={{
            fontSize: '.875rem',
            fontWeight: 400,
            lineHeight: ' 1.2512rem',
            color: '#000000DE'
          }}
        >
          {company.companyName}
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
          {company.CUIT}
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
          {company.province}
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
          {company.address}
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
          {company.startDate}
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
          {company.adminEmail}
        </Typography>
      </TableCell>
    </TableRow>
  )
}

export const CompaniesTable = ({
  data: companies,
  handleRowClick: setSelectedElement
}) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const handleRowClick = (company) => {
    if (selectedCompany?.id === company.id) {
      setSelectedElement(null);
      setSelectedCompany(null);
    } else {
      setSelectedElement(company);
      setSelectedCompany(company);
    }
  };


  return (
    <Box
      // sx={{
      //   width: '100%',
      //   height: '100%',
      //   padding: '4rem',
      // }}
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
            {companies.map(company => (
              companyRowRender(company, handleRowClick, selectedCompany?.id === company.id )
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
