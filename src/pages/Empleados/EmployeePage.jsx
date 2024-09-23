import {
  FilterSideComponent 
} from '../../components/FilterSideComponent';
import {
  CommonFilters 
} from '../../filters/CommonFilters';
import {
  employeesFiltersDeclaration 
} from '../../filters/EmployeesFilters/employeesFilters';
import {
  useState 
} from 'react';
import {
  useForm 
} from 'react-hook-form';
import {
  useEmployees 
} from '../../api/hooks/useEmployees/useEmployees';
import {
  useEffect 
} from 'react';
import {
  useQueryParamFilters 
} from '../../hooks/useQueryParamFilters';
import {
  CommonTableList 
} from '../../components/CommonTableList/CommonTableList';
import {
  EmployeeTable 
} from './EmployeeContent';
import {
  HEIGHT_FULL_SCREEN 
} from '../../config';





const EmployeePage = () => {

  const [employeesFilters, setEmployeesFilters] = useState(employeesFiltersDeclaration)

  const mapper = (data) => data

  const {
    fetchEmployees: {
      fetchEmployees,
      isLoadingFetchEmployees
    }
  } = useEmployees();

  useEffect(() => {
   

    const completedEmployeesFilters = [...employeesFilters]

    setEmployeesFilters(completedEmployeesFilters)

  }, [])


  const {
    fetchDataWithFilters: fetchEmployeesWithFilters,
    whenFiltersSubmit
  } = useQueryParamFilters(employeesFilters, fetchEmployees)

  const {
    control,
    handleSubmit
  } = useForm();

  return <FilterSideComponent
    title={'Empleados'}
    height={HEIGHT_FULL_SCREEN}
    renderFilters={
      () => <CommonFilters
        control={control}
        filters={employeesFilters}
      />
    }
    handleSubmit={handleSubmit(whenFiltersSubmit)}
    component={
      () =>
        <CommonTableList
          table={EmployeeTable}
          fetchData={fetchEmployeesWithFilters}
          isLoadingFetchData={isLoadingFetchEmployees}
          mapper={mapper}
          placeHolderInput={'Buscar por ID, Título o Contenedor'}
          datePicker={false}
        />
    }
  />;
};

export default EmployeePage;
