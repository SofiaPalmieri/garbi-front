import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  useState 
} from 'react';

const tableHeaders = [
  {
    value: 'ID',
    minWidth: 88,
    align: 'center'
  },
  {
    value: 'Barrio',
    minWidth: 152,
    align: 'center'
  },
  {
    value: 'Área',
    minWidth: 88,
    align: 'center'
  },
  {
    value: 'Dirección',
    minWidth: 200,
    align: 'center'
  },
  {
    value: 'Capacidad',
    minWidth: 112,
    align: 'center'
  },
  {
    value: 'Bateria',
    minWidth: 104,
    align: 'center'
  },
  {
    value: 'Tipo de carga',
    minWidth: 120,
    align: 'center'
  },
  {
    value: 'Altura contenedor',
    minWidth: 152,
    align: 'center',
    sx: {
      borderRight: '1px solid #0000001F',
    }
  }
];


const containerRowRender = (container, handleRowClick, selectedContainer) => {
  return (
    <TableRow
      key={container.id}
      onClick={() => handleRowClick(container)}
      sx={{
        height: '48px',
        cursor: 'pointer',
        backgroundColor: selectedContainer?.id === container.id ? 'rgba(18, 66, 44, 0.15)' : 'transparent',
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
        },
      }}
    >
      <TableCell
        component='th'
        scope='row'
        align='center'
      >
        {container.id}
      </TableCell>
      <TableCell
        align='center'
      >{container.address.neighborhood}</TableCell>
      <TableCell
        align='center'
      >{container?.area} falta</TableCell>
      <TableCell
        align='center'
      >{container.address.street + ' ' + container.address.number}</TableCell>
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
          {container.capacity}
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
          {container.battery}
        </Box>
      </TableCell>
      <TableCell
        align='center'
      >{container.type}</TableCell>
      <TableCell
        align='center'
        sx={{
          borderRight: '1px solid #0000001F',
        }}
      >
        {container.height} cm
      </TableCell>
    </TableRow>
  )
}

export const ContainerTable = ({
  data: containers,
  setSelectedElement
}) => {

  const [selectedContainer, setSelectedContainer] = useState(null);
  const handleRowClick = (container) => {
    if (selectedContainer?.id === container.id) {
      setSelectedElement(null);
      setSelectedContainer(null);
    } else {
      setSelectedElement(container);
      setSelectedContainer(container);
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
            {containers.map(container => (
              containerRowRender(container, handleRowClick, selectedContainer)
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
