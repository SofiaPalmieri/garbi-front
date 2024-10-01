import {
  addRangeFiltersIfApplies, RangeBoxFilter 
} from '../../../utils/filtersUtil.';

export const ContainersFiltersDeclaration = [
  {
    key: 'nivel_de_llenado',
    name: 'Nivel de Llenado',
    maxLabel: 'Máximo %',
    minLabel: 'Mínimo %',
    maxName: 'maxLlenado',
    minName: 'minLlenado',
    render: RangeBoxFilter,
    addFilter: addRangeFiltersIfApplies('minLlenado', 'maxLlenado')
  }
]