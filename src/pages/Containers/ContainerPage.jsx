import {
  FilterSideComponent
} from '../../components/FilterSideComponent';
import {
  ContainerContent 
} from './ContainerContent';
import ContainerFilters from './ContainerFilters';


export const ContainerPage = () => {


  return (
    <FilterSideComponent
      prefix={'Gestión'}
      title={'Contenedores'}
      renderFilters={
        <ContainerFilters />
      }
      component={() => <ContainerContent />}
    />
  );
};
