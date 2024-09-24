// import {
//   Box,
//   CircularProgress,
//   Paper,
//   TableContainer
// } from '@mui/material';
// import {
//   useEffect,
//   useState
// } from 'react';
// import {
//   ReportStatusSelect
// } from '../../components/ReportStatusSelect';
// import {
//   ModalReportResolved
// } from '../../modales/ModalReportResolved/ModalReportResolved';
// import {
//   TimestampUtil
// } from '../../utils/timestampUtil';
// import {
//   ReportTable 
// } from '../../tables/ReportTable/ReportTable';



// const mapper = (reports) => {
//   return reports.map(
//     r => {
//       const {
//         date, time
//       } = TimestampUtil.convertToDateAndHour(r.timestamp)
//       const state = r.status[r.status.length - 1]

//       return {
//         id: r.id,
//         date: date,
//         time: time,
//         state: state.status,
//         // recolector o ciudadano,
//         description: r.description,
//         reportType: r.type.replace('_', ' '),
//         // falta lugar
//         // falta area,
//         // falta nombre apellido y foto del supervisor
//       }
//     }
//   )
// }


// // DEPRECADO
// export const ReportContent = () => {
  
//   useEffect(() => {
//     console.warn('ReportContent is deprecated and will be removed in future versions.');
//   }, []);


//   const {
//     fetchReports: {
//       fetchReports,
//       isLoadingFetchReports
//     }
//   } = useReports();


//   return (
//     <Box
//       sx={{
//         padding: '32px',
//         height: `calc(100% - ${HEIGHT_HEADER_FILTER_SIDE_COMPONENT})`,
//       }}
//     >
//       <Paper
//         sx={{
//           width: '100%',
//           height: '100%'
//         }}
//       >
//         <TableContainer
//           component={Paper}
//           sx={{
//             paddingX: '1rem',
//             height: '100%',
//             overflow: 'hidden'
//           }}
//         >
//           <SearcherPaginated
//             prevFetch={prevFetch}
//             nextFetch={nextFetch}
//             disabledNextBtn={disabledNextBtn}
//             disabledPrevBtn={disabledPrevBtn}
//           />
//           <Box
//             sx={{
//               height: 'calc(100% - 4.5rem)',
//               overflow: 'auto'
//             }}
//           >
//             {
//               isLoadingFetchReports ?
//                 <Box
//                   sx={{
//                     width: 1,
//                     display: 'flex',
//                     p: 2,
//                     justifyContent: 'center'
//                   }}
//                 >

//                   <CircularProgress />
//                 </Box>
//                 :
//                 <ReportTable
//                   reports={reports}
//                   handleOpenModalReportResolved={handleOpenModalReportResolved}
//                 />
//             }
//           </Box>
//         </TableContainer>
//       </Paper>
//     </Box>
//   );
// };
