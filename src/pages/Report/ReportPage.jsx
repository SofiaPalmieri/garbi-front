import {
  DateRangePicker 
} from '../../components/DateRangePicker/DateRangePicker';
import {
  useEffect, useState 
} from 'react';
import {
  useForm 
} from 'react-hook-form';
import {
  useAreas 
} from '../../api/hooks/useAreas/useAreas';
import {
  useReports
} from '../../api/hooks/useReports/useReports';
import {
  CommonTableList
} from '../../components/CommonTableList/CommonTableList';
import {
  FilterSideComponent
} from '../../components/FilterSideComponent';
import {
  HEIGHT_FULL_SCREEN
} from '../../config';
import {
  CommonFilters 
} from '../../filters/CommonFilters';
import {
  reportsFiltersDeclaration 
} from '../../filters/reportFilter';
import {
  useQueryParamFilters 
} from '../../hooks/useQueryParamFilters';
import {
  ReportTable
} from '../../tables/ReportTable/ReportTable';
import {
  addSelectFilterIfApplies, SelectBoxFilter 
} from '../../utils/filtersUtil.';
import {
  TimestampUtil
} from '../../utils/timestampUtil';
import {
  subDays 
} from 'date-fns'


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
        reportType: r.type.replace(/_/g, ' '),
        // falta lugar
        // falta area,
        // falta nombre del que report,
        // falta foto
      }
    }
  )
}


export const ReportPage = () => {

  const [reportsFilters, setReportFilters] = useState(reportsFiltersDeclaration)

  const {
    fetchReports: {
      fetchReports,
      isLoadingFetchReports
    }
  } = useReports();

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

      const completedReportFilters = [...reportsFilters]

      completedReportFilters.push({
        key: 'area',
        name: 'Área',
        values: areasOptions,
        render: SelectBoxFilter,
        addFilter: addSelectFilterIfApplies
      })

      setReportFilters(completedReportFilters)
    }

    getAreasAndCompleteFilters()
  }, [])

  const {
    control,
    handleSubmit
  } = useForm();

  const initialQueryParams = [
    {
      key: 'from',
      value: TimestampUtil.convertToDateForFilter(subDays(new Date(), 6))
    },
    {
      key: 'to',
      value: TimestampUtil.convertToDateForFilter(new Date())
    }
  ]

  const {
    fetchDataWithFilters: fetchReportsWithFilters,
    whenFiltersSubmit,
    addQueryParamFilter
  } = useQueryParamFilters(reportsFilters, fetchReports, initialQueryParams)

  const onSearcherSubmit = (value) => {
    addQueryParamFilter({
      key: 'search',
      value
    })
  }

  const handleDateRangeChange = (selectedDateRange) => {
    const [fromDate, toDate] = selectedDateRange
    
    addQueryParamFilter([
      {
        key: 'from',
        value: TimestampUtil.convertToDateForFilter(fromDate)
      },
      {
        key: 'to',
        value: TimestampUtil.convertToDateForFilter(toDate)
      }
    ])
  }


  return <FilterSideComponent
    title={'Reportes'}
    height={HEIGHT_FULL_SCREEN}
    renderFilters={
      () => <CommonFilters
        control={control}
        filters={reportsFilters}
      />
    }
    handleSubmit={handleSubmit(whenFiltersSubmit)}
    isLoading = {isLoadingGetAreas} 
    component={
      () =>
        <CommonTableList
          table={ReportTable}
          fetchData={fetchReportsWithFilters}
          isLoadingFetchData={isLoadingFetchReports}
          mapper={mapper}
          placeHolderInput={'Buscar por ID o Contenedor'}
          componentToRender={ 
            <DateRangePicker 
              onDateChange={handleDateRangeChange} 
            /> 
          }
          onSearcherSubmit = { onSearcherSubmit }
        />
    }
  />;
};
