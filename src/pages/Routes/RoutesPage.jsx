import {
  FilterSideComponent 
} from '../../components/FilterSideComponent';
import {
  CommonTableList 
} from '../../components/CommonTableList/CommonTableList';
import {
  HEIGHT_FULL_SCREEN
} from '../../config';
import {
  TimestampUtil 
} from '../../utils/timestampUtil';
import {
  useRoutes 
} from '../../api/hooks/useRoutes/useRoutes';
import {
  RoutesTable 
} from '../../tables/RoutesTable/RoutesTable';
import profilePicture from '../../assets/profile_picture.jpg';


const mapper = (routes) => {
  return routes
    .filter(r => r.status.some(statusItem => statusItem.status === 'FINISHED')) //Excluye recorridos in progress, pq esta pantalla solo muestra los terminados.
    .filter(r => r.status.some(statusItem => statusItem.status === 'STARTED')) //el BE tiene rutas sin STARTED asiq pongo esto asi no se ve feo en una demo. TODO: borrar esta linea.
    .map(r => {
      const {
        date: date 
      } = TimestampUtil.convertToDateAndHour(r.timestamp)

      const totalMinutes = Math.round(r.directions.total_duration / 60);
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      let duration;
      if (hours > 0 && minutes != 0) {
        duration = `${hours} hr  ${minutes} min`;
      } else if (minutes == 0) {
        duration = `${hours} hr`;
      } else {
        duration = `${minutes} min`;
      }

      const startedStatus = r.status.find(statusItem => statusItem.status === 'STARTED');
      const startedTimestamp = startedStatus.timestamp;
      const {
        time: startTime 
      } = TimestampUtil.convertToDateAndHour(startedTimestamp);

      const finishedStatus = r.status.find(statusItem => statusItem.status === 'FINISHED');
      const finishedTimestamp = finishedStatus.timestamp;
      const {
        time: endTime 
      } = TimestampUtil.convertToDateAndHour(finishedTimestamp);


      return {
        id: r.id.slice(-6),
        date: date,
        area: 'Área 1', // falta recibir nombre de area del BE.
        duration: duration,
        startTime: startTime,
        endTime: endTime,
        manager: 'Hernan Ramirez', //falta recibir bien del BE supervisor y recolectores. ahora es cualquier cosa.
        manager_picture: profilePicture,
        collector1: 'Pepe Pepin',
        collector1_picture: null,
        collector2: 'Roberto Roberti',
        collector2_picture: null
      }
    }
    )
}


export const RoutesPage = () => {

  const {
    fetchRoutes: {
      fetchRoutes,
      isLoadingFetchRoutes
    },
  } = useRoutes();


  return (
    <FilterSideComponent
      title={'Recorridos'}
      height={HEIGHT_FULL_SCREEN}
      component={
        () => 
          <CommonTableList
            table={RoutesTable}
            fetchData={fetchRoutes}
            isLoadingFetchData={isLoadingFetchRoutes}
            mapper={mapper}
            placeHolderInput={'Buscar por Recolector o Supervisor'}
          />
      }
    />
  );
}
