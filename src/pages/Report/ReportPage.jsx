import React from 'react';
import { FilterSideComponent } from '../../components/FilterSideComponent';
import { ReportContent } from './ReportContent';

export const ReportPage = () => {
    return (
        <FilterSideComponent
            title={'Reportes'}
            component={() => <ReportContent />}
        />
    )
}
