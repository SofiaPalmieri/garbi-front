import {
  Box, Typography
} from '@mui/material';
import {
  useForm
} from 'react-hook-form';
import {
  InputForm
} from '../../components/InputForm';
import {
  SelectForm
} from '../../components/SelectForm/SelectForm';
import {
  OutlinedInputForm 
} from '../../components/OutlinedInputForm';

export const CreateContainerForm = () => {
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
    <form>
      <Box
        sx={{
          width: '100%',
          padding: '16px 24px',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '16px',
            marginBottom: '16px',
          }}
        >
          Sensor asociado al contenedor
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '16px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '40px',
              gap: '24px',
            }}
          >
            <Box
              sx={{
                height: '40px',
                width: 'calc(50% - 12px)'
              }}
            >
              <InputForm
                control={control}
                name={'idSensor'}
                label={'ID del sensor'}
                errors={errors}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          padding: '16px 24px',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '16px',
            marginBottom: '16px',
          }}
        >
          Ubicación del contenedor
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '16px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '40px',
              gap: '24px',
            }}
          >
            <Box
              sx={{
                flex: 1,
                height: '40px',
              }}
            >
              <InputForm
                control={control}
                name={'address'}
                label={'Dirección'}
                errors={errors}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                height: '40px',
              }}
            >
              <InputForm
                control={control}
                name={'heightAddress'}
                label={'Altura'}
                errors={errors}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          padding: '16px 24px',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '16px',
            marginBottom: '16px',
          }}
        >
          Características
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '16px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '40px',
              gap: '24px',
            }}
          >
            <Box
              sx={{
                flex: 1,
                height: '40px',
              }}
            >
              <SelectForm
                name={'typeOfLoad'}
                label={'Tipo de carga'}
                control={control}
                errors={errors}
                options={[]}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                height: '40px',
              }}
            >
              <OutlinedInputForm
                control={control}
                name={'containerHeight'}
                label={'Altura del contenedor'}
                errors={errors}
                endMessage={'cm'}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  )
}
