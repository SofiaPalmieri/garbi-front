import {
  Box,
  CircularProgress,
  Paper,
  TableContainer
} from '@mui/material';
import {
  useEffect,
  useState
} from 'react';
import {
  useReports
} from '../../api/hooks/useReports/useReports';
import {
  SearcherDateRangerPickerPaginated 
} from '../../components/SearcherDateRangePickerPaginated';
import {
  HEIGHT_HEADER_FILTER_SIDE_COMPONENT
} from '../../config';
import {
  ResolveReportForm
} from '../../forms/ResolveReport/ResolveReportForm';
import {
  usePagination 
} from '../../hooks/usePagination';
import {
  ModalReportResolved
} from '../../modales/ModalReportResolved/ModalReportResolved';
import {
  TimestampUtil
} from '../../utils/timestampUtil';
import {
  ReportTable 
} from '../../tables/ReportTable/ReportTable';



const mapper = (reports) => {

  return reports.map(
    r => {
      const {
        date, time
      } = TimestampUtil.convertToDateAndHour(r.timestamp)
      const state = r.status[r.status.length - 1]

      return {
        id: r.id,
        date: date,
        time: time,
        state: state.status,
        // recolector o ciudadano,
        description: r.description,
        reportType: r.type.replace('_', ' '),
        // falta lugar
        // falta area,
        // falta nombre del que report,
        // falta foto
      }
    }
  )
}

// DEPRECADO
export const ReportContent = () => {
  const [openModalReportResolved, setOpenModalReportResolved] = useState(false);
  const [selectedReportId, setSelectedReportId] = useState(null);
  const [modalReportResolvedTitle, setModalReportResolvedTitle] = useState('');

  useEffect(() => {
    console.warn('ReportContent is deprecated and will be removed in future versions.');
  }, []);

  const {
    fetchReports: {
      fetchReports,
      isLoadingFetchReports
    }
  } = useReports();

  const {
    data: reports,
    prevFetch,
    nextFetch,
    disabledPrevBtn,
    disabledNextBtn
  } = usePagination({
    fetch: fetchReports,
    mapper
  })

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
        height: `calc(100% - ${HEIGHT_HEADER_FILTER_SIDE_COMPONENT})`,
      }}
    >
      <ModalReportResolved
        title={modalReportResolvedTitle}
        open={openModalReportResolved}
        handleClose={handleCloseModalReportResolved}
        form={<ResolveReportForm
          handleClose={handleCloseModalReportResolved}
          reportId={selectedReportId}
        />}
      />
      <Paper
        sx={{
          width: '100%',
          height: '100%'
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            paddingX: '1rem',
            height: '100%',
            overflow: 'hidden'
          }}
        >
          <SearcherDateRangerPickerPaginated
            prevFetch={prevFetch}
            nextFetch={nextFetch}
            disabledNextBtn={disabledNextBtn}
            disabledPrevBtn={disabledPrevBtn}
          />
          <Box
            sx={{
              height: 'calc(100% - 4.5rem)',
              overflow: 'auto'
            }}
          >
            {
              isLoadingFetchReports ?
                <Box
                  sx={{
                    width: 1,
                    display: 'flex',
                    p: 2,
                    justifyContent: 'center'
                  }}
                >
                  <CircularProgress />
                </Box>
                :
                <ReportTable
                  reports={reports}
                  handleOpenModalReportResolved={handleOpenModalReportResolved}
                />
            }
          </Box>
        </TableContainer>
      </Paper>
    </Box>
  );
};
