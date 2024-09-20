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
  TableRow
} from '@mui/material';

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


const containerRowRender = (container) => {
  return (
    <TableRow
      key={container.id}
      sx={{
        '& .MuiTableCell-root:last-child': {
          borderRight: 0,
        },
        '& .MuiTableCell-root': {
          height: '100%',
          paddingTop: 0,
          paddingBottom: 0
        },
        height: '3rem'
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
  data: containers 
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        paddingRight: '7.0625rem',
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
              containerRowRender(container)
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
              {containers.map(row => <TableRow
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
                    // onClick={() => handleOnClickEditButton(row)}
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
                    // onClick={() => handleOnClickDeleteButton(row)}
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
  )
}
