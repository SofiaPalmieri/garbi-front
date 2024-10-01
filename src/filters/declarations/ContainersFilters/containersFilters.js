import {
  addArrayFiltersIfApplies,
  addRangeFiltersIfApplies, CheckboxFilter, RangeBoxFilter
} from '../../../utils/filtersUtil.';

export const ContainersFiltersDeclaration = [
  {
    key: 'nivel_de_llenado',
    name: 'Nivel de Llenado',
    maxLabel: 'Máximo %',
    minLabel: 'Mínimo %',
    maxName: 'capacityMax',
    minName: 'capacityMin',
    render: RangeBoxFilter,
    addFilter: addRangeFiltersIfApplies('capacityMin', 'capacityMax')
  },
  {
    key: 'nivel_de_bateria',
    name: 'Nivel de bateria',
    maxLabel: 'Máximo %',
    minLabel: 'Mínimo %',
    maxName: 'batteryMax',
    minName: 'batteryMin',
    render: RangeBoxFilter,
    addFilter: addRangeFiltersIfApplies('batteryMin', 'batteryMax')
  },
  {
    key: 'typeOfLoad',
    name: 'Tipo de carga',
    values: [
      {
        key: 'Lateral',
        value: 'lateral'
      },
      {
        key: 'Bilateral',
        value: 'bilateral'
      }
    ],
    render: CheckboxFilter,
    addFilter: addArrayFiltersIfApplies
  },
]