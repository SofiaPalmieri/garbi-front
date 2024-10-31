
import {
  CheckboxList
} from '../components/CheckboxList/CheckboxList'
import {
  RangeForm 
} from '../components/RangeForm/RangeForm'
import {
  SelectForm
} from '../components/SelectForm/SelectForm'

// todo: sacar a un componente ? 
export const CheckboxFilter = ({
  filter, control
}) => (
  <CheckboxList
    key={filter.key}
    prefix={filter.key}
    control={control}
    name={filter.name}
    values={filter.values}
  />
)

// todo: sacar a un componente ? 
export const SelectBoxFilter = ({
  filter, control
}) => (
  <SelectForm
    key={filter.key}
    control={control}
    name={filter.key}
    required={false}
    label={'Área'}
    options={filter.values}
    optionalDefaultValue={'Limpiar Filtro'}
  />
)

export const RangeBoxFilter = ({
  filter, control, errors
}) => (
  <RangeForm
    key={filter.key}
    control={control}
    title={filter.name}
    rootParent = {filter.key}
    maxLabel={filter.maxLabel}
    maxName={filter.key + '.' + filter.maxName}
    minLabel={filter.minLabel}
    minName={filter.key + '.' + filter.minName}
    errors = {errors}
  />
)

// export const RangeBoxFilter = ({
//   filter, control
// }) => (

// )


export const addArrayFiltersIfApplies = (key, values, newQueryParamsFilter) => {
  let filtersToApply = getFiltersToApply(values)

  if (filtersToApply.length > 0) {
    newQueryParamsFilter.push({
      key,
      value: convertArrayToString(filtersToApply)
    })
  }
}

export const addSelectFilterIfApplies = (key, value, newQueryParamsFilter) => {
  if (value != '') {
    newQueryParamsFilter.push({
      key,
      value
    })
  }
}

export const addRangeFiltersIfApplies = (minName, maxName) => (key, value, newQueryParamsFilter) => {
  const minValue = value[minName] !== '' ? value[minName] : 0;
  const maxValue = value[maxName] !== '' ? value[maxName] : 100;

  newQueryParamsFilter.push(
    {
      key: minName,
      value: minValue
    },
    {
      key: maxName,
      value: maxValue
    }
  );
}



const getFiltersToApply = (filters) => {
  const filtersToApply = []

  for (const [key, value] of Object.entries(filters)) {
    if (value) {
      filtersToApply.push(key)
    }
  }

  return filtersToApply;
}

const convertArrayToString = (array) => `[${array.join(',')}]`