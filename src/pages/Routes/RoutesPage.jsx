import RouteMainContent from './MainContent/RouteMainContent';
import {
  FilterSideComponent 
} from '../../components/FilterSideComponent';

export default function RoutesPage() {
  return (
    <FilterSideComponent
      title={'Recorridos'}
      component={() => <RouteMainContent />}
    />
  );
}
