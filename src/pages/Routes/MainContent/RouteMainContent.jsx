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
      asignadaPor: 'Supervisor',
    },
    {
      id: 2,
      fecha: '20/02/24',
      codigo: '#123457',
      lugar: 'Palermo',
      area: 'Área 1',
      duracion: '1hr 20min',
      horario: '5:00 - 6:20 hs',
      asignadaPor: 'Supervisor',
    },
    {
      id: 3,
      fecha: '20/02/24',
      codigo: '#123456',
      lugar: 'Palermo',
      area: 'Área 1',
      duracion: '1hr 30min',
      horario: '22:13 - 23:43 hs',
      asignadaPor: 'Supervisor',
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
                  <TableCell>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '21px',
                          textAlign: 'left',
                          color: '#00000099',
                        }}
                      >
                        {row.fecha}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    align='left'
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '21px',
                        textAlign: 'left',
                        color: '#00000099',
                      }}
                    >
                      {row.lugar} {row.codigo}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px',
                        textAlign: 'left',
                        color: '#000000DE',
                      }}
                    >
                      {row.area}
                    </Typography>
                  </TableCell>

                  <TableCell
                    align='right'
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px',
                        color: '#00000099',
                      }}
                    >
                      {row.duracion}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '21px',
                        color: '#00000099',
                      }}
                    >
                      {row.horario}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px',
                        color: '#00000099',
                      }}
                    >
                      {row.asignadaPor}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                  >
                    <Avatar>H</Avatar>
                  </TableCell>
                  <TableCell
                    align='center'
                  >
                    <AvatarGroup
                      max={2}
                    >
                      <Avatar
                        alt='Remy Sharp'
                      />

                      <Avatar
                        alt='Travis Howard'
                      />
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
