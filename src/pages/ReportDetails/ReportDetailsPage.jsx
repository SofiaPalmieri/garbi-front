import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import {
  CircularProgress, Divider 
} from '@mui/material';
import {
  Box 
} from '@mui/system';
import {
  ReportDetailStateFlow 
} from '../../components/ReportDetailStateFlow/ReportDetailStateFlow';
import {
  ReportDetails 
} from '../ReportDetails/ReportDetails';
import {
  ReportDetailsDescriptionContent 
} from './ReportDetailsDescriptionContent';
import {
  ReportDetailsDescriptionHeader 
} from './ReportDetailsDescriptionHeader';
import {
  useParams 
} from 'react-router-dom';
import {
  useReports 
} from '../../api/hooks/useReports/useReports';
import {
  useEffect, useState 
} from 'react';
import {
  TimestampUtil 
} from '../../utils/timestampUtil';
import {
  BreadcrumbsComponent 
} from '../../components/BreadcrumbsComponent/BreadcrumbsComponent';
import {
  HEIGHT_FULL_SCREEN 
} from '../../config';
import image from '../../../public/images/container.jpg'
const statusHistoryMapper = (report) => {
  const {
    status, observation, userId 
  } = report.item;

  // Simulando un historial de estado con base en el estado actual.
  const statusHistory = [
    {
      id: 0,
      user: {
        avatar: report.item.userId ? 'Recolector' : 'Ciudadano',
        fullName: report.item.userId ? 'Recolector' : 'Ciudadano',
      },
      from: 'NUEVO',
      date: TimestampUtil.convertToDateAndHour(report.item.createdAt).date,
      time: TimestampUtil.convertToDateAndHour(report.item.createdAt).time,
      observation: observation || '',
    }
  ];

  return statusHistory;
}

const sideDetailsMapper = (report) => {
  const {
    date, time 
  } = TimestampUtil.convertToDateAndHour(report.item.createdAt);
  const reportCreator = report.item.userId ? 'Recolector' : 'Ciudadano';

  const sideDetailsContent = [
    {
      icon: <CalendarMonthIcon
        sx={{
          color: '#2121213B' 
        }}
      />,
      title: 'Fecha de creación',
      description: `${date} - ${time}`
    },
    {
      icon: <PersonOutlineOutlinedIcon
        sx={{
          color: '#2121213B' 
        }}
      />,
      title: 'Reportado por',
      description: reportCreator
    },
    {
      icon: <RoomOutlinedIcon
        sx={{
          color: '#2121213B' 
        }}
      />,
      title: 'Ubicación',
      description: `${report.item.neighborhood || 'No especificado'}`,
      description2: `${report.item.street || ''} ${report.item.number || ''}`
    },
    {
      icon: <DeleteOutlineOutlinedIcon
        sx={{
          color: '#2121213B' 
        }}
      />,
      title: 'Contenedor',
      description: report.item.containerId,
    }
  ];

  return sideDetailsContent;
}

export const ReportDetailsPage = () => {
  const {
    id 
  } = useParams();

  const [reportData, setReportData] = useState(null);
  const [reportSideDetailsContent, setReportSideDetailsContent] = useState(null);
  const [reportStatusHistoryContent, setReportStatusHistoryContent] = useState(null);

  const {
    fetchReport: {
      fetchReport, isLoadingFetchReport 
    } 
  } = useReports();

  useEffect(() => {
    const asyncFetchReport = async () => {
      try {
        const reportResponse = await fetchReport(id);
        console.log('🚀 ~ asyncFetchReport ~ reportResponse:', reportResponse);

        const sideDetailsContent = sideDetailsMapper(reportResponse);
        setReportSideDetailsContent(sideDetailsContent);

        const statusHistoryContent = statusHistoryMapper(reportResponse);
        setReportStatusHistoryContent(statusHistoryContent);

        setReportData(reportResponse);
      } catch (error) {
        console.error('Error fetching report:', error);
      }
    };
    asyncFetchReport();
  }, [id]);

  return (
    <Box
      sx={{
        minHeight: HEIGHT_FULL_SCREEN,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '4.5rem',
          pl: '4rem',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <BreadcrumbsComponent
          prefix={'Reportes'}
          title={`Reporte #${id}`}
        />
      </Box>
      <Divider />
      {!reportData ? (
        <Box
          sx={{
            width: 1,
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            padding: {
              xs: '1rem 2rem 1.5rem',
              sm: '1.5rem 3rem 1.75rem',
              md: '2rem 4rem 2.25rem',
            },
            flex: 1,
            display: 'flex',
          }}
        >
          <Box
            sx={{
              width: 1,
              display: 'flex',
            }}
          >
            <Box
              sx={{
                height: 1,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                p: '0 24px',
                pb: '1.5rem'
              }}
            >
              <Box
                sx={{
                  height: '4rem',
                }}
              >
                <ReportDetailsDescriptionHeader
                  title={reportData?.item?.title}
                  state={reportData?.item?.type.replace(/_/g, ' ')}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  mb: '1.5rem',
                }}
              >
                <ReportDetailsDescriptionContent
                  description={reportData?.item?.description}
                  image={image}
                />
              </Box>
              <Box
                sx={{
                  width: 1,
                  height: '300px',
                }}
              >
                <ReportDetailStateFlow
                  statusHistory={reportStatusHistoryContent}
                />
              </Box>
            </Box>
            <Box
              sx={{
                minWidth: '18rem',
              }}
            >
              <ReportDetails
                reportId={id}
                content={reportSideDetailsContent}
                state={reportData?.item?.status}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
