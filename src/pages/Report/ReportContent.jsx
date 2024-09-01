import {
  Avatar,
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
  styled,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  ModalReportResolved 
} from '../../modales/ModalReportResolved/ModalReportResolved';
import {
  useState 
} from 'react';
import {
  ResolveReportForm 
} from '../../forms/ResolveReport/ResolveReportForm';

const SmallKeyboardArrowDownIcon = (color) =>
  styled(KeyboardArrowDownIcon)(({
    _ 
  }) => ({
    fontSize: '16px',
    color: color + '!important',
  }));

const estados = {
  NUEVO: {
    color: '#EF6C0080',
    colorText: '#EF6C00',
    text: 'NUEVO',
  },

  'EN REVISION': {
    color: '#2196F380',
    colorText: '#2196F3',
    text: 'EN REVISIÓN',
  },

  RECHAZADO: {
    color: '#2E7D32',
    colorText: '#2E7D32',
    text: 'RECHAZADO',
  },

  RESUELTO: {
    color: '#2E7D32',
    colorText: '#2E7D32',
    text: 'RESUELTO',
  },
};

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
                    <FormControl
                      size='small'
                      sx={{
                        width: '144px',
                        display: 'flex',
                        justifyContent: 'center',
                        '& .MuiOutlinedInput-root': {
                          '& .MuiSvgIcon-root': {
                            right: '20px',
                          },
                          '& fieldset': {
                            borderColor: estados[row.estado].color,
                          },
                          '&:hover fieldset': {
                            borderColor: estados[row.estado].color,
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: estados[row.estado].color,
                          },
                        },
                      }}
                    >
                      <InputLabel
                        shrink={false}
                        sx={{
                          fontSize: '13px',
                          fontWeight: 500,
                          lineHeight: '22px',
                          color: estados[row.estado].colorText + ' !important',
                          left: '50px',
                          transform: 'translateX(-50%) translate(14px, 4px) scale(1)',
                        }}
                      >
                        {estados[row.estado].text}
                      </InputLabel>
                      <Select
                        labelId='estado-label'
                        id='estado-select'
                        IconComponent={SmallKeyboardArrowDownIcon(estados[row.estado].colorText)}
                        sx={{
                          height: '30px',
                        }}
                        onChange={(event) => {
                          const selectedValue = event.target.value;
                          if (selectedValue === 3) {
                            handleOpenModalReportResolved(row.id, 'Cambiar a Rechazado');
                          } else if (selectedValue === 4) {
                            handleOpenModalReportResolved(row.id, 'Cambiar a Resuelto');
                          }
                        }}
                      >
                        <MenuItem
                          value={1}
                        >NUEVO</MenuItem>
                        <MenuItem
                          value={2}
                        >EN REVISIÓN</MenuItem>
                        <MenuItem
                          value={3}
                        >RECHAZADO</MenuItem>
                        <MenuItem
                          value={4}
                        >RESUELTO</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell
                    align='center'
                  >
                    <Avatar>H</Avatar>
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
