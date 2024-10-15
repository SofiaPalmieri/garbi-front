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
  CancelAndSubmitButton 
} from '../../components/CancelAndSubmitButton/CancelAndSubmitButton';
import {
  yupResolver 
} from '@hookform/resolvers/yup';
import {
  object, string 
} from 'yup';
import {
  useContainers 
} from '../../api/hooks/useContainers/useContainers';
import {
  CustomAlert 
} from '../../components/CustomAlert/CustomAlert';


const typesOfLoad = [
  {
    value: 'BILATERAL',
    label: 'Bilateral',
  },
  {
    value: 'LATERAL',
    label: 'Lateral',
  },
];

const newContainerSchema = object({
  sensorId: string().required('El ID del sensor es obligatorio'),
  street: string()
    .required('La calle es obligatoria')
    .matches(/^[a-zA-ZÀ-ÿ\s.]+$/, 'La calle no puede contener números o caracteres especiales'),
  heightAddress: string()
    .required('La altura es obligatoria')
    .matches(/^\d+$/, 'La altura no es válida'),
  typeOfLoad: string().required('El tipo de carga es obligatorio'),
  containerHeight: string()
    .required('La altura del contenedor es obligatoria')
    .matches(/^\d+$/, 'La altura del contenedor no es válida')
}).required();

export const CreateContainerForm = ({
  handleClose, onSuccess
}) => {
  const {
    control,
    handleSubmit,
    formState: {
      errors
    },
  } = useForm({
    defaultValues: {
      companyId: '',
      sensorId: '',
      street: '',
      heightAddress: '',
      typeOfLoad: '',
      containerHeight: '',
    },
    resolver: yupResolver(newContainerSchema),
  });

  const {
    createContainer: {
      createContainer,
      isCreateContainerLoading 
    },
  } = useContainers();

  const user = JSON.parse(localStorage.getItem('user'));
  const companyId = user.companyId;

  const onSubmit = async (data) => {
    try {
      const response = await createContainer({
        companyId: companyId,
        sensorId: data.sensorId,
        street: data.street,
        heightAddress: data.heightAddress,
        type: data.typeOfLoad,
        height: Number(data.containerHeight)
      });

      //TODO later: validar que la respuesta sea la esperada, y sino tirar error.
      handleClose();
      onSuccess();
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const errorMessages = errors ? (
    Object.values(errors).map((error, index) => (
      <li 
        key={index}
      >
        {error.message}
      </li>
    ))
  ) : null;


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
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
                name={'sensorId'}
                label={'ID del sensor'}
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
                name={'street'}
                label={'Calle'}
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
                options={typesOfLoad}
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
                name={'containerHeight'}
                label={'Altura del contenedor'}
                endMessage={'cm'}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {Object.keys(errors).length > 0 && (
        <CustomAlert
          severity='error'
          title='Error con los datos ingresados'
          message={errorMessages}
        />
      )}

      <CancelAndSubmitButton
        handleClose={handleClose}
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isCreateContainerLoading}
      />
    </form>
  )
}
