import {
  DatePickerCustom 
} from '../../components/DatePickerCustom/DatePickerCustom';
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
  useAreas 
} from '../../api/hooks/useAreas/useAreas';
import {
  RoutesTable 
} from '../../tables/RoutesTable/RoutesTable';
import profilePicture from '../../assets/profile_picture.jpg';
import {
  useForm 
} from 'react-hook-form';
import {
  useEffect, useState 
} from 'react';
import {
  CommonFilters 
} from '../../filters/CommonFilters';
import {
  routesFiltersDeclaration 
} from '../../filters/routesFilter';
import {
  useQueryParamFilters 
} from '../../hooks/useQueryParamFilters';
import {
  addSelectFilterIfApplies, SelectBoxFilter 
} from '../../utils/filtersUtil.';
import {
  useSearchQueryParam 
} from '../../hooks/useSearchQueryParam';
import {
  getInitialQueryParam, handleDateChange 
} from '../../hooks/useDatePicker';


const mapper = (routes) => {
  return routes
    .map(r => {
      const {
        date: date 
      } = TimestampUtil.convertToDateAndHour(r.timestamp)

      let startTime = null;
      let endTime = null;
      let duration = 'Pendiente';

      const startedStatus = r.status.find(statusItem => statusItem.status === 'STARTED');
      const finishedStatus = r.status.find(statusItem => statusItem.status === 'FINISHED');

      const startedTimestamp = startedStatus?.timestamp;
      if (startedTimestamp) { // recorrido empezado. Si no estuviera empezado, queda Pendiente.
        const {
          time: startedTime 
        } = TimestampUtil.convertToDateAndHour(startedTimestamp);
        startTime = startedTime;
      }

      if (finishedStatus) { // recorrido finalizado
        const finishedTimestamp = finishedStatus.timestamp;
        const {
          time: finishedTime 
        } = TimestampUtil.convertToDateAndHour(finishedTimestamp);
        endTime = ` - ${finishedTime}`;

        duration = TimestampUtil.formatMinutes(r.directions.total_duration / 60)
      } else if (startedTimestamp) { // recorridos en curso: empezado pero no finalizado
        duration = 'En curso';
        startTime = `Comenzó a las ${startTime}`;
        endTime = null;
      }


      return {
        id: r.id,
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

  const [routesFilters, setRoutesFilters] = useState(routesFiltersDeclaration)

  const {
    getAreas: {
      getAreas,
      isLoadingGetAreas
    }
  } = useAreas()


  // this useEffect is to retrieve areas from BE and complete filters
  useEffect(() => {
    const getAreasAndCompleteFilters = async () => {
      const {
        result: areas 
      } = await getAreas()

      const areasOptions = areas.map(area => ({
        value: area.id,
        label: area.name
      }))

      const completedRoutesFilters = [...routesFilters]

      completedRoutesFilters.unshift({
        key: 'area',
        name: 'Área',
        values: areasOptions,
        render: SelectBoxFilter,
        addFilter: addSelectFilterIfApplies
      })

      setRoutesFilters(completedRoutesFilters)
    }

    getAreasAndCompleteFilters()
  }, [])

  const {
    control,
    handleSubmit
  } = useForm();

  const initialDate = new Date()
  const initialQueryParam = getInitialQueryParam(initialDate)

  const {
    fetchDataWithFilters: fetchRoutesWithFilters,
    whenFiltersSubmit,
    addQueryParamFilter,
    removeQueryParamFilter
  } = useQueryParamFilters(routesFilters, fetchRoutes, initialQueryParam)

  const onSearcherSubmit = useSearchQueryParam(addQueryParamFilter, removeQueryParamFilter)

  const onDateChange = handleDateChange(addQueryParamFilter);

  return (
    <FilterSideComponent
      prefix={'Gestión'}
      title={'Recorridos'}
      height={HEIGHT_FULL_SCREEN}
      renderFilters={
        () => <CommonFilters
          control={control}
          filters={routesFilters}
        />
      }
      handleSubmit={handleSubmit(whenFiltersSubmit)}
      isLoading = {isLoadingGetAreas} 
      component={
        () => 
          <CommonTableList
            table={RoutesTable}
            onSearcherSubmit={onSearcherSubmit}
            fetchData={fetchRoutesWithFilters}
            isLoadingFetchData={isLoadingFetchRoutes}
            mapper={mapper}
            placeHolderInput={'Buscar por Supervisor'}
            inputWidth={'240px'}
            componentToRender={ 
              <DatePickerCustom
                onDateChange={onDateChange}
              /> 
            }
          />
      }
    />
  );
}
