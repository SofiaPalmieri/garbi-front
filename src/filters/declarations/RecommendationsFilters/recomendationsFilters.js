import {
  addArrayFiltersIfApplies, CheckboxFilter
} from '../../../utils/filtersUtil.';


export const recommendationsFiltersDeclaration = [
  {
    key: 'typeOfRecommendation',
    name: 'Tipo de recomendación',
    values: [
      {
        key: 'Añadir contenedor',
        value: 'añadir_contenedor'
      },
      {
        key: 'Eliminar contenedor',
        value: 'eliminar_contenedor'
      },
      {
        key: 'Aumentar frecuencia',
        value: 'aumentar_frecuencia'
      },
      {
        key: 'Reducir frecuencia',
        value: 'reducir_frecuencia'
      },
    ],
    render: CheckboxFilter,
    addFilter: addArrayFiltersIfApplies
  },
  {
    key: 'messages',
    name: 'Mensajes',
    values: [
      {
        key: 'Leídos',
        value: 'leidos'
      },
      {
        key: 'No leídos',
        value: 'no_leidos'
      },
    ],
    render: CheckboxFilter,
    addFilter: addArrayFiltersIfApplies
  }
]