import {
  Box, Typography
} from '@mui/material'
import {
  useForm
} from 'react-hook-form';
import {
  SelectForm
} from '../../components/SelectForm/SelectForm';
import {
  OutlinedInputForm
} from '../../components/OutlinedInputForm';
import {
  CancelAndSubmitButton
} from '../../components/CancelAndSubmitButton/CancelAndSubmitButton';

export const GenerateOptimalRouteForm = ({
  handleClose,
  handleOpenRightSideOptimalRouteInfo
}) => {
  const {
    control,
    formState: {
      errors
    },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });


  return (
    <Box>
      <Box
        sx={{
          width: 1,
          padding: '1rem 1.5rem 1.3125rem'
        }}
      >
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1.66rem',
            letterSpacing: '0.025rem'
          }}

        >
          Seleccione área:
        </Typography>
        <Box
          sx={{
            width: 0.5,
            mt: '8px'
          }}
        >
          <SelectForm
            name={'area'}
            label={'Áreas'}
            control={control}
            errors={errors}
            options={[{
              value: 1,
              label: 'Área 1'
            }]}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          padding: '1rem 1.5rem 0rem'
        }}
      >
        <Typography
          component='div'
          sx={{
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1.66rem',
            letterSpacing: '0.025rem'
          }}
        >
          Generar ruta que solo pase por contenedores que igualen o superen el
          <Box
            sx={{
              width: '75px',
              display: 'inline-block',
              verticalAlign: 'middle',
              m: '0 12px'
            }}
          >
            <OutlinedInputForm
              control={control}
              name={'containerHeight'}
              label={'50'}
              errors={errors}
              endMessage={'%'}
            />
          </Box>
          de su capacidad
        </Typography>
      </Box>
      <CancelAndSubmitButton
        buttonSubmitMessage='GENERAR'
        handleClose={handleClose}
        typeButton='button'
        onSubmit={handleOpenRightSideOptimalRouteInfo}
      />
    </Box >
  )
}
