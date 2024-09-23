import {
  addArrayFiltersIfApplies, CheckboxFilter 
} from '../../utils/filtersUtil.';
  
export const employeesFiltersDeclaration = [
  {
    key: 'role',
    name: 'Cargo',
    values: [
      {
        key: 'Recolector',
        value: 'recolector'
      },
      {
        key: 'Supervisor',
        value: 'supervisor'
      },
    ],
    render: CheckboxFilter,
    addFilter: addArrayFiltersIfApplies
  },
  {
    key: 'workingShift',
    name: 'Turno',
    values: [
      {
        key: 'Mañana',
        value: 'mañana'
      },
      {
        key: 'Tarde',
        value: 'tarde'
      },
      {
        key: 'Noche',
        value: 'noche'
      },
    ],
    render: CheckboxFilter,
    addFilter: addArrayFiltersIfApplies
  }
]