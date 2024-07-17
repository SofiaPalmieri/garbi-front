import {
  FilterSideComponent 
} from '../../components/FilterSideComponent';
import {
  EmployeeContent 
} from './EmployeeContent';

const EmployeePage = () => {
  return (
    <FilterSideComponent
      title={'Gestión > Empleados'}
      component={() => <EmployeeContent />}
    />
  );
};

export default EmployeePage;
