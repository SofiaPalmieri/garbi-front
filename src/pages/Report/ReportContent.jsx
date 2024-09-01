import {
  Box,
  Chip,
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
  ModalReportResolved 
} from '../../modales/ModalReportResolved/ModalReportResolved';
import {
  useState 
} from 'react';
import {
  ResolveReportForm 
} from '../../forms/ResolveReport/ResolveReportForm';
import {
  ReportStatusSelect 
} from '../../components/ReportStatusSelect';
import {
  AvatarWithTooltip 
} from '../../components/AvatarWithTooltip';
import profilePicture from '../../assets/profile_picture.jpg';


const rows = [
  {
    id: 1,
    fecha: '19/02/24',
    hora: '09:20 hs',
    recolector: 'Recolector | #123458',
    descripcion: 'Contenedor roto',
    tipoDeReporte: 'Contenedor en mal estado',
    lugar: 'Villa del Parque',
    area: 'Área 1',
    estado: 'NUEVO',
    creadorNombre: 'Juan Perez',
    creadorFoto: null
  },
  {
    id: 2,
    fecha: '19/02/24',
    hora: '09:20 hs',
    recolector: 'Recolector | #123458',
    descripcion: 'Contenedor roto',
    tipoDeReporte: 'Basura en la calle',
    lugar: 'Villa del Parque',
    area: 'Área 1',
    estado: 'EN REVISION',
    creadorNombre: 'Juan Perez',
    creadorFoto: profilePicture
  },
  {
    id: 3,
    fecha: '19/02/24',
    hora: '09:20 hs',
    recolector: 'Recolector | #123458',
    descripcion: 'Contenedor roto',
    tipoDeReporte: 'Basura en la calle',
    lugar: 'Villa del Parque',
    area: 'Área 1',
    estado: 'RECHAZADO',
    creadorNombre: null,
    creadorFoto: null
  },
  {
    id: 4,
    fecha: '19/02/24',
    hora: '09:20 hs',
    recolector: 'Recolector | #123458',
    descripcion: 'Contenedor roto',
    tipoDeReporte: 'Contenedor en mal estado',
    lugar: 'Villa del Parque',
    area: 'Área 1',
    estado: 'RESUELTO',
    creadorNombre: 'Juan Perez',
    creadorFoto: null
  },
];

export const ReportContent = () => {
  const [openModalReportResolved, setOpenModalReportResolved] = useState(false);
  const [selectedReportId, setSelectedReportId] = useState(null);
  const [modalReportResolvedTitle, setModalReportResolvedTitle] = useState('');

  const handleOpenModalReportResolved = (reportId, title) => {
    setSelectedReportId(reportId);
    setModalReportResolvedTitle(title);
    setOpenModalReportResolved(true);
  };
  const handleCloseModalReportResolved = () => setOpenModalReportResolved(false);
  

  return (
    <Box
      sx={{
        padding: '32px',
      }}
    >
      <ModalReportResolved
        title={modalReportResolvedTitle}
        open={openModalReportResolved}
        handleClose={handleCloseModalReportResolved}
        form={<ResolveReportForm
          handleClose = {handleCloseModalReportResolved}
          reportId={selectedReportId}
        />}
      />
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
                      <Typography
                        sx={{
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '21px',
                          textAlign: 'left',
                          color: '#00000099',
                        }}
                      >
                        {row.hora}
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
                      {row.recolector}
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
                      {row.descripcion}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='right'
                  >
                    <Chip
                      size='small'
                      label={row.tipoDeReporte}
                      variant='outlined'
                    />
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
                      {row.lugar}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '21px',
                        color: '#00000099',
                      }}
                    >
                      {row.area}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                  >
                    <ReportStatusSelect
                      row={row}
                      handleOpenModalReportResolved={handleOpenModalReportResolved}
                    />
                  </TableCell>
                  <TableCell
                    align='center'
                  >
                    <AvatarWithTooltip
                      name={row.creadorNombre}
                      profilePicture={row.creadorFoto}
                    />
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
};
