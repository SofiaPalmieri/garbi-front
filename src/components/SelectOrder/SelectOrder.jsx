import {
  Box, FormControl, InputLabel, MenuItem, Select 
} from '@mui/material'
import {
  useState 
} from 'react'

const orderOptions = [
  {
    value: 'reciente',
    label: 'Más reciente',
  },
  {
    value: 'antiguo',
    label: 'Más antiguo',
  },
];

export const SelectOrder = ({
  handleChangeOrder 
}) => {
  const [sortOrder, setSortOrder] = useState('reciente');

  const onChangeOrder = (data) => {
    setSortOrder(data.target.value)
    handleChangeOrder(data.target.value)
  }

  return (
    <Box
      display='flex'
      justifyContent='flex-end'
      width={'170px'}
    >
      <FormControl
        size='small'
        variant='outlined'
        fullWidth
      >
        <InputLabel
          id='sort-select-label'
        >
          Ordenar por
        </InputLabel>
        <Select
          labelId='sort-select-label'
          value={sortOrder}
          label='Ordenar por'
          onChange={onChangeOrder}
        >
          {orderOptions.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
