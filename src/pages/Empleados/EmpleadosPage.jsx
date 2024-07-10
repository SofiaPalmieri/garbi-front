import {
  FilterSideComponent 
} from '../../components/FilterSideComponent';
import {
  EmpleadosContent 
} from './EmpleadosContent';

const EmpleadosPage = () => {
  return (
    <FilterSideComponent
      title={'Gestión > Empleados'}
      component={() => <EmpleadosContent />}
    />
  );
};

export default EmpleadosPage;
