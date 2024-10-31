import {
  Box 
} from '@mui/material';


export const CommonFilters = ({
  filters, control, errors
}) => {
  return (
    <Box
      sx = {{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      {
        filters.map(filter => (
          filter.render({
            filter,
            control,
            errors
          })
        ))
      }
    </Box>
  )
}
