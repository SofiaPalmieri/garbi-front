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
  useQueryParamFilters
} from '../../hooks/useQueryParamFilters';
import {
  ReportTable
} from '../../tables/ReportTable/ReportTable';



import {
  subDays 
} from 'date-fns'
import {
  useSearchQueryParam 
} from '../../hooks/useSearchQueryParam';
import {
  getInitialQueryParams, handleDateRangeChange 
} from '../../hooks/useDateRangePicker';
import {
  reportsFiltersDeclaration 
} from '../../filters/declarations/ReportFilters/reportFilter';

const mapper = (reports) => {

  return reports.map(
    r => {
      const creator = r.userId ? 'Recolector' : 'Ciudadano'

      return {
        id: r.id,
        date: r.createdAt,
        state: r.currentStatus,
        typeOfUser: creator,
        description: r.title,
        reportType: r.type.replace(/_/g, ' '),
        // falta lugar
        // falta area,
        assignedManagerName: r.managerName
        // falta assignedManagerPhoto
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
    console.log('🚀 ~ getReports ~ fetchReports:', fetchReports)
    
    const getReports = async () => {
      const {
        result: reports
      } = await fetchReports()

    }

    getReports()
  }, [])

  const {
    control,
    handleSubmit
  } = useForm();
  
  const fromDate = subDays(new Date(), 6)
  const toDate = new Date()
  const initialQueryParams = getInitialQueryParams(fromDate, toDate)

  const {
    fetchDataWithFilters: fetchReportsWithFilters,
    whenFiltersSubmit,
    addQueryParamFilter,
    addMultipleQueryParamFilter,
    removeQueryParamFilter
  } = useQueryParamFilters(reportsFilters, fetchReports, initialQueryParams)

  const onSearcherSubmit = useSearchQueryParam(addQueryParamFilter, removeQueryParamFilter)

  const onDateRangeChange = handleDateRangeChange(addMultipleQueryParamFilter);


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
    isLoading={isLoadingGetAreas}
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
              onDateChange={onDateRangeChange} 
            /> 
          }
          onSearcherSubmit = { onSearcherSubmit }
        />
    }
  />;
};
