import {
  addArrayFiltersIfApplies, CheckboxFilter 
} from '../utils/filtersUtil.';

export const routesFiltersDeclaration = [
  {
    key: 'duration',
    name: 'Duración',
    values: [
      {
        key: 'Menor a 1 hora',
        value: 'less_than_1'
      },
      {
        key: 'Entre 1 y 2 horas',
        value: 'between_1_and_2'
      },
      {
        key: 'Entre 2 y 4 horas',
        value: 'between_2_and_4'
      },
      {
        key: 'Mayor a 4 horas',
        value: 'more_than_4'
      }
    ],
    render: CheckboxFilter,
    addFilter: addArrayFiltersIfApplies
  }
]