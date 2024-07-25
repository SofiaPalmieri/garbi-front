import {
  FilterSideComponent 
} from '../../components/FilterSideComponent';
import {
  ContainerContent 
} from './ContainerContent';

export const ContainerPage = () => {
  return (
    <FilterSideComponent
      prefix={'Gestión'}
      title={'Contenedores'}
      component={() => <ContainerContent />}
    />
  );
};
