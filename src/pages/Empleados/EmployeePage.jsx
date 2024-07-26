import {
  FilterSideComponent 
} from '../../components/FilterSideComponent';
import {
  EmployeeContent 
} from './EmployeeContent';

const EmployeePage = () => {
  return (
    <FilterSideComponent
      prefix={'Gestión'}
      title={'Empleados'}
      component={() => <EmployeeContent />}
    />
  );
};

export default EmployeePage;
