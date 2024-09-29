import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import {
  CircularProgress,
  Divider 
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
  ReportDetailsTitle
} from './ReportDetailsTitle';
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


const statusHistory = [
  {
    id: 1,
    user: {
      avatar: 'logo',
      fullName: 'Roberto Sanchez'
    },
    from: 'En revisión',
    to: 'Resuelto',
    date: '30/05/2024',
    time: '19.32 hs',
    observation: 'Problema resuelto. La tapa fue arreglada.'
  },
  {
    id: 2,
    user: {
      avatar: 'logo',
      fullName: 'Roberto Sanchez'
    },
    from: 'Nuevo',
    to: 'En revisión',
    date: '29/05/2024',
    time: '18.31 hs',
  },
  {
    id: 3,
    user: {
      avatar: 'logo',
      fullName: 'Ciudadano'
    },
    from: 'Nuevo',
    date: '28/05/2024',
    time: '17.30 hs',
  }
]

const sideDetailsMapper = (report) => {
  const {
    date, time
  } = TimestampUtil.convertToDateAndHour(report.timestamp)

  const reportCreator = report.userId ? 'Recolector' : 'Ciudadano'

  const splitedArea = report.address.split(' - ')
  const neighborhood = splitedArea[1]
  const address = splitedArea[0]
  const area = 'Área 2' //TODO: change when BE sends the area name.

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
      titleIcon: <OpenInNewOutlinedIcon
        sx={{
          width: '20px',
          height: '20px',
          marginLeft: '5px'
        }}
      />,
      title: 'Ubicación',
      description: `${neighborhood} - ${area}`,
      description2: address
    },
    {
      icon: <DeleteOutlineOutlinedIcon
        sx={{
          color: '#2121213B'
        }}
      />,
      title: 'Contenedor',
      description: report.containerId,
      button: 'HISTORIAL',
      buttonIcon: <OpenInNewOutlinedIcon
        sx={{
          width: '20px',
          height: '20px',
          marginLeft: '5px'
        }}
      />
    }
  ]

  return sideDetailsContent
}

export const ReportDetailsPage = () => {
  const {
    id 
  } = useParams()

  const [reportData, setReportData] = useState(null);
  const [reportSideDetailsContent, setReportSideDetailsContent] = useState(null);

  const {
    fetchReport: {
      fetchReport: fetchReport, isLoadingFetchReport
    },
  } = useReports();

  useEffect(() => {
    const asyncFetchReport = async () => {
      try {
        const reportReponse = await fetchReport(id)
        console.log('🚀 ~ asyncFetchReport ~ reportReponse:', reportReponse)
        const sideDetailsContent = sideDetailsMapper(reportReponse)
        setReportSideDetailsContent(sideDetailsContent)
        setReportData(reportReponse)
      } catch (error) {
        console.error('Error fetching report:', error)
      }
    };
    asyncFetchReport()
  }, [])


  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          width: 1,
        }}
      >
        <ReportDetailsTitle
          title={id}
        />
      </Box>
      <Divider />
      {!reportData ? (
        <Box
          sx={{
            width: 1,
            height: '70vh',
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
            flex: 1,
            padding: '2rem 4rem 0'
          }}
        >
          <Box
            sx={{
              width: 1,
              height: '100%'
            }}
          >
            <Box
              sx={{
                height: 1,
                width: 1,
                display: 'flex'
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
                    height: '6.25vh',
                  }}
                >
                  <ReportDetailsDescriptionHeader
                    title={reportData?.title}
                    state={reportData?.type.replace(/_/g, ' ')}
                  />
                </Box>
                <Box
                  sx={{
                    height: '34.18vh',
                    mb: '1.5rem',
                  }}
                >
                  <ReportDetailsDescriptionContent
                    description={reportData?.description}
                  />
                </Box>
                <Box
                  sx={{
                    height: '37.3vh',
                    width: 1
                  }}

                >
                  <ReportDetailStateFlow
                    statusHistory={statusHistory}
                  />
                </Box>

              </Box>
              <Box
                sx={{
                  width: '16rem',
                  height: '18.625rem',
                }}
              >
                <ReportDetails
                  reportId={id}
                  content={reportSideDetailsContent}  // Pasa el array de objetos tal cual está
                  state={reportData?.currentStatus}
                />
              </Box>
            </Box>
          </Box>
        </Box >
      )}
    </Box >
  )
};