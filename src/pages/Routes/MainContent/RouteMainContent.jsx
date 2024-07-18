import {
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
import {
  useEffect, useState 
} from 'react';
import {
  useRoutes 
} from '../../../api/hooks/useRoutes/useRoutes';
import {
  AvatarWithTooltip 
} from '../../../components/AvatarWithTooltip';
import profilePicture from '../../../assets/profile_picture.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function RouteMainContent() {
  const {
    getRoutes: {
      getRoutes: getRoutes 
    },
  } = useRoutes();
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const retrieveRoutes = async () => {
      const routes = await getRoutes();
      setRoutes(routes);
    };

    try {
      retrieveRoutes();
      console.log('routes: ' + routes.documents[0].managerId); //BE to create some
    } catch (e) {
      console.log(e);
    }
  }, []);
  
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
      supervisor_picture: profilePicture,
      recolector1: 'Pepe Pepin',
      recolector1_picture: profilePicture,
      recolector2: 'Roberto Roberti',
      recolector2_picture: null
    },
    {
      id: 2,
      fecha: '20/02/24',
      codigo: '#123457',
      lugar: 'Palermo',
      area: 'Área 1',
      duracion: '1hr 20min',
      horario: '5:00 - 6:20 hs',
      supervisor: 'Hernan Ramirez de la Serna',
      supervisor_picture: null,
      recolector1: 'Pepe Pepin',
      recolector1_picture: profilePicture,
      recolector2: 'Roberto Roberti',
      recolector2_picture: profilePicture
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
      supervisor_picture: profilePicture,
      recolector1: 'Pepe Pepin',
      recolector1_picture: null,
      recolector2: null,
      recolector2_picture: null
    },
  ];

  const isLargeScreen = useMediaQuery('(min-width:1200px)');
  const isMediumScreen = useMediaQuery('(min-width:900px)');

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
                      width: '1%',
                      padding: '16px' 
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
                    sx={{
                      minWidth: 240
                    }}
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
                      minWidth: 160,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#212121',
                      }}
                    >
                      {row.horario}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#616161',
                      }}
                    >
                      {row.duracion}
                    </Typography>
                  </TableCell>
                  {isMediumScreen && (
                    <>
                      <TableCell
                        align='center'
                        sx={{
                          width: '1%',
                          paddingRight: '0px',
                          paddingLeft: '48px'
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
                          paddingLeft: '8px'
                        }}
                      >
                        <AvatarWithTooltip
                          name={row.supervisor}
                          profilePicture={row.supervisor_picture}
                        />
                      </TableCell>
                    </>
                  )}
                  {isLargeScreen && (
                    <>
                      <TableCell
                        align='right'
                        sx={{
                          width: '1%',
                          paddingRight: '0px',
                          paddingLeft: '16px'
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
                          paddingLeft: '8px',
                        }}
                      >
                        <AvatarGroup
                          max={2}
                        >
                          <AvatarWithTooltip
                            name={row.recolector1}
                            profilePicture={row.recolector1_picture}
                          />
                          <AvatarWithTooltip
                            name={row.recolector2}
                            profilePicture={row.recolector2_picture}
                          />
                        </AvatarGroup>
                      </TableCell>
                    </>
                  )}
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
