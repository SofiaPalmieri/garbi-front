import {
  Avatar,
  AvatarGroup,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';

export default function RouteMainContent() {
  const rows = [
    {
      id: 1,
      fecha: '19/02/24',
      codigo: '#123456',
      lugar: 'Villa del Parque',
      area: 'Área 2',
      duracion: '55 min',
      horario: '20:30 - 21:25 hs',
      supervisor: 'Hernan Ramirez',
      recolector1: 'Pepe Pepin',
      recolector2: 'Roberto Roberti'
    },
    {
      id: 2,
      fecha: '20/02/24',
      codigo: '#123457',
      lugar: 'Palermo',
      area: 'Área 1',
      duracion: '1hr 20min',
      horario: '5:00 - 6:20 hs',
      supervisor: 'Hernan Ramirez',
      recolector1: 'Pepe Pepin',
      recolector2: 'Roberto Roberti'
    },
    {
      id: 3,
      fecha: '20/02/24',
      codigo: '#123456',
      lugar: 'Palermo',
      area: 'Área 1',
      duracion: '1hr 30min',
      horario: '22:13 - 23:43 hs',
      supervisor: 'Hernan Ramirez',
      recolector1: 'Pepe Pepin',
      recolector2: 'Roberto Roberti'
    },
  ];

  return (
    <Box
      width='100%'
      padding='32px'
    >
      <Paper
        sx={{
          width: '100%',
        }}
      >
        <TableContainer
          component={Paper}
        >
          <Table
            sx={{
              minWidth: 650,
            }}
            aria-label='simple table'
          >
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell 
                    align='left'
                    sx={{
                      width: '1%' 
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#616161',
                      }}
                    >
                      {row.fecha}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='left'
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#212121',
                      }}
                    >
                      {row.lugar}
                      <Typography
                        component='span'
                        sx={{
                          fontSize: '14px',
                          color: '#616161',
                          marginLeft: '16px'
                        }}
                      >
                        {row.codigo}
                      </Typography>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#616161',
                      }}
                    >
                      {row.area}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='right'
                    sx={{
                      paddingRight: '64px'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#212121',
                      }}
                    >
                      {row.duracion}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#616161',
                      }}
                    >
                      {row.horario}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      width: '1%',
                      paddingRight: '0px' 
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#616161',
                      }}
                    >
                      Supervisor
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      width: '1%',
                      paddingRight: '64px'
                    }}
                  >
                    <Tooltip  
                      title={row.supervisor}
                      arrow
                      placement='top'
                    >
                      <Avatar>H</Avatar>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    align='right'
                    sx={{
                      width: '1%',
                      padding: '0px'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#616161',
                      }}
                    >
                      Recolectores
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='right'
                    sx={{
                      width: '1%',
                      margin: '0px'
                    }}
                  >
                    <AvatarGroup
                      max={2}
                    >
                      <Tooltip  
                        title={row.recolector1}
                        arrow
                        placement='top'
                      >
                        <Avatar/>
                      </Tooltip>
                      <Tooltip  
                        title={row.recolector2}
                        arrow
                        placement='top'
                      >
                        <Avatar/>
                      </Tooltip>
                    </AvatarGroup>
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
}
