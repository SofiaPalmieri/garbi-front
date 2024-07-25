import {
  yupResolver 
} from '@hookform/resolvers/yup';
import {
  object, string 
} from 'yup';
import {
  Alert,
  AlertTitle,
  Box,
  Typography,
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

const provincias = [
  {
    value: 'buenosAires',
    label: 'Buenos Aires',
  },
  {
    value: 'cordoba',
    label: 'Córdoba',
  },
  {
    value: 'santaFe',
    label: 'Santa Fe',
  },
  // Agrega más provincias según sea necesario
];

const newCompanySchema = object({
  razonSocial: string()
    .required('La razón social es obligatoria')
    .min(2, 'La razón social debe tener al menos 2 caracteres')
    .max(50, 'La razón social no debe exceder 50 caracteres'),
  cuit: string()
    .required('El CUIT es obligatorio')
    .min(11, 'El CUIT debe tener 11 caracteres')
    .max(11, 'El CUIT debe tener 11 caracteres'),
  provincia: string().required('La provincia es obligatoria'),
  direccion: string().required('La dirección es obligatoria'),
  mailDelAdmin: string()
    .required('El email del admin es obligatorio')
    .email('El email ingresado no es válido'),
  telefono: string()
    .required('El teléfono de contacto es obligatorio')
    .matches(/^\+?\d{10,12}$/, 'El teléfono de contacto no es válido'),
}).required();


export const CreateCompanyForm = ({
  handleClose
}) => {
  const {
    control,
    handleSubmit,
    formState: {
      errors 
    }
  } = useForm({
    defaultValues: {
      razonSocial: '',
      cuit: '',
      provincia: '',
      direccion: '',
      mailDelAdmin:  '',
      telefono: '',
    },
    resolver: yupResolver(newCompanySchema),
  });

  const onSubmit = async (data) => {
    /*TODO*/
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
          Datos de la empresa
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
                name={'razonSocial'}
                label={'Razón Social'}
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
                name={'cuit'}
                label={'CUIT'}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '104px',
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
          Ubicación en la que va a operar
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
                name={'provincia'}
                label={'Provincia'}
                control={control}
                options={provincias}
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
                name={'direccion'}
                label={'Dirección'}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '104px',
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
          Datos de contacto
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
                name={'mailDelAdmin'}
                label={'Email del Admin'}
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
                name={'telefono'}
                label={'Teléfono de contacto'}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {Object.keys(errors).length > 0 && (
        <Box
          sx={{
            paddingInline: '24px'
          }}
        >  
          <Alert
            severity='error'
          >
            <AlertTitle>Error con los datos ingresados</AlertTitle>
            <Box
              component='ul'
              sx={{
                paddingLeft: '16px',
                margin: 0,
                wordWrap: 'break-word',
              }}
            >
              {errorMessages}
            </Box>
          </Alert>
        </Box>
      )}

      <CancelAndSubmitButton
        handleClose={handleClose}
        onSubmit={onSubmit}
      />
    </form>
  );
};
