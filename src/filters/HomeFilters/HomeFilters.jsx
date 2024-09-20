import {
  Box, Typography 
} from '@mui/material'
import {
  SelectForm 
} from '../../components/SelectForm/SelectForm'
import {
  InputForm 
} from '../../components/InputForm';


export const HomeFilters = ({
  control, areas 
}) => {
  console.log('🚀 ~ HomeFilters ~ areas:', areas)
  return (
    <Box>
      <Box>
        <SelectForm
          name={'areaId'}
          label={'Área'}
          control={control}
          options={areas.map(area => ({
            value: area.id,
            label: area.name
          }))}
        />
      </Box>
      <Box
        sx={{
          mt: '2rem'
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 500,
              lineHeight: '24px'
            }}
          >
            Nivel de llenado
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              mt: 0.5
            }}
          >
            <Box>
              <InputForm
                control={control}
                name={'minLlenado'}
                label={'Mínimo %'}
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
                width: '.75rem'
              }}
            />
            <Box>
              <InputForm
                control={control}
                name={'maxLlenado'}
                label={'Máximo %'}
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
      </Box>
      <Box
        sx={{
          mt: '2rem'
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 500,
              lineHeight: '24px'
            }}
          >
            Nivel de batería
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              mt: 0.5
            }}
          >
            <Box>
              <InputForm
                control={control}
                name={'minBateria'}
                label={'Mínimo %'}
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
                width: '.75rem'
              }}
            />
            <Box>
              <InputForm
                control={control}
                name={'maxBateria'}
                label={'Máximo %'}
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
      </Box>
    </Box >
  )
}
