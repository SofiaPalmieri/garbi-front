import {
  FilterSideComponent 
} from '../../components/FilterSideComponent';
import HomeMainContent from './HomeMainContent';

export default function HomePage() {
  return <FilterSideComponent
    title={'Mapa'}
    component={() => <HomeMainContent />}
  />;
}
