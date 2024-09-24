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
        value: 'lessThanOneHour=true'
      },
      {
        key: 'Entre 1 y 2 horas',
        value: 'oneToTwoHours=true'
      },
      {
        key: 'Entre 2 y 4 horas',
        value: 'twoToFourHours=true'
      },
      {
        key: 'Mayor a 4 horas',
        value: 'moreThanFourHours=true'
      }
    ],
    render: CheckboxFilter,
    addFilter: addArrayFiltersIfApplies
  }
]