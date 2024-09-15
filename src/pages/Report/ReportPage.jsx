import {
  FilterSideComponent 
} from '../../components/FilterSideComponent';
import {
  HEIGHT_FULL_SCREEN 
} from '../../config';
import {
  ReportContent 
} from './ReportContent';

export const ReportPage = () => {
  return <FilterSideComponent
    title={'Reportes'}
    height={HEIGHT_FULL_SCREEN}
    component={() => <ReportContent />}
  />;
};
