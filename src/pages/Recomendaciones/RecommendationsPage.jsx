import RecommendationMainContent from './MainContent/RecommendationMainContent';
import {
  FilterSideComponent 
} from '../../components/FilterSideComponent';

export default function RecommendationsPage() {
  return (
    <FilterSideComponent
      title={'Recomendaciones'}
      component={() => <RecommendationMainContent />}
    />
  );
}
