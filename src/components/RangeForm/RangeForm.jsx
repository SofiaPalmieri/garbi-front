import {
  Box, Typography
} from '@mui/material'
import {
  InputForm
} from '../InputForm'

export const RangeForm = ({
  title, minName, minLabel, maxName, maxLabel, control, errors, rootParent
}) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '1rem',
          fontWeight: 500,
          lineHeight: '24px'
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          mt: 0.5,
        }}
      >
        <Box
          sx={{
            minHeight: '60px'
          }}
        >
          <InputForm
            control={control}
            name={minName}
            label={minLabel}
            required={false}
            rootParent={rootParent}
            type={'number'}
            errors={errors}
            styleInput={{
              '& .MuiFormLabel-root': {
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: '20px',
              },
              '& .MuiInputBase-input, & .MuiInputBase-root': {
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: '20px',
              },
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: '#2121213B',
            height: '1px',
            width: '.75rem',
            mb: '25px'
          }}
        />
        <Box
          sx={{
            minHeight: '60px'
          }}
        >
          <InputForm
            control={control}
            name={maxName}
            label={maxLabel}
            rootParent={rootParent}
            type={'number'}
            required={false}
            errors={errors}
            styleInput={{
              '& .MuiFormLabel-root': {
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: '20px',
              },
              '& .MuiInputBase-input, & .MuiInputBase-root': {
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: '20px',
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
