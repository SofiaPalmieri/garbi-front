import {
  Avatar,
  Box,
  IconButton,
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
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

export default function RecommendationMainContent() {
  const rows = [
    {
      id: 1,
      title: 'Añadir un contenedor',
      subtitle: 'en Hilario Pueyrredón 1234 - Villa Crespo',
      date: '20/02',
      read: true,
      Icon: DeleteIcon
    },
    {
      id: 2,
      title: 'Eliminar un contenedor',
      subtitle: 'en Hilario Pueyrredón 1234 - Villa Crespo',
      date: '20/02',
      read: false,
      Icon: DeleteIcon
    },
    {
      id: 3,
      title: 'Reducir la frecuencia de recolección',
      subtitle: 'en el Área 2 de Villa del Parque',
      date: '16/05',
      read: true,
      Icon: UpdateIcon
    },
  ];

  return (
    <Box
      width='100%'
      padding='32px'
      overflow= 'hidden'
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
                  sx={{
                    backgroundColor: row.read ? '#f0f0f0' : 'inherit'
                  }}
                >
                  <TableCell 
                    sx={{
                      width: '1%',
                      paddingRight: '8px'
                    }}
                  >
                    <Box>
                      <Avatar>
                        <row.Icon />
                      </Avatar>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      width: 'auto'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#212121',
                      }}
                    >
                      {row.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#616161',
                      }}
                    >
                      {row.subtitle}
                    </Typography>
                  </TableCell>
                  
                  <TableCell
                    align='right'
                    sx={{
                      width: 80
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#616161',
                      }}
                    >
                      {row.date}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '1%'
                    }}
                  >
                    <Tooltip 
                      title={row.read ? 'Marcar como no leída' : 'Marcar como leída'}
                      arrow
                    >
                      <IconButton
                        edge='end'
                      >
                        {row.read ? <MarkunreadOutlinedIcon /> : <DraftsOutlinedIcon />}
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '1%',
                      paddingRight: '32px'
                    }}
                  >
                    <IconButton
                      edge='end'
                    >
                      <DeleteIcon />
                    </IconButton>
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
