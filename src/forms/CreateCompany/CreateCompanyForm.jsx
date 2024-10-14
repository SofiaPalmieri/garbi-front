import {
  yupResolver 
} from '@hookform/resolvers/yup';
import {
  object, string 
} from 'yup';
import {
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
import {
  CustomAlert 
} from '../../components/CustomAlert/CustomAlert';
import {
  useCompanies 
} from '../../api/hooks/useCompanies/useCompanies';

const provincias = [
  {
    value: 'Buenos Aires',
    label: 'Buenos Aires',
  },
  {
    value: 'Córdoba',
    label: 'Córdoba',
  },
  {
    value: 'Santa Fe',
    label: 'Santa Fe',
  },
  // Agrega más provincias según sea necesario
];

const newCompanySchema = object({
  name: string()
    .required('La razón social es obligatoria')
    .min(2, 'La razón social debe tener al menos 2 caracteres')
    .max(50, 'La razón social no debe exceder 50 caracteres'),
  cuit: string()
    .required('El CUIT es obligatorio')
    .min(11, 'El CUIT debe tener 11 caracteres')
    .max(11, 'El CUIT debe tener 11 caracteres'),
  province: string().required('La provincia es obligatoria'),
  zone: string().required('La zona es obligatoria'),
  street: string().required('La calle es obligatoria'),
  number: string()
    .required('La altura es obligatoria')
    .matches(/^\d+$/, 'La altura no es válida'),
  adminEmail: string()
    .required('El email del admin es obligatorio')
    .email('El email ingresado no es válido'),
  phone: string()
    .required('El teléfono de contacto es obligatorio')
    .matches(/^\+?\d{10,12}$/, 'El teléfono de contacto no es válido'),
}).required();


export const CreateCompanyForm = ({
  handleClose, onSuccess
}) => {
  const {
    control,
    handleSubmit,
    formState: {
      errors 
    }
  } = useForm({
    defaultValues: {
      name: '',
      cuit: '',
      province: '',
      address: '',
      adminEmail:  '',
      phone: '',
    },
    resolver: yupResolver(newCompanySchema),
  });

  const {
    createCompany: {
      createCompany,
      isCreateCompanyLoading 
    },
  } = useCompanies();

  const onSubmit = async (data) => {
    try {
      const response = await createCompany({
        name: data.name, 
        cuit: data.cuit,
        address: {
          street: data.street,
          number: data.number,
          postalCode: '1234',
          province: data.province,
          neighborhood: data.zone,
        },
        phone: data.phone,
        email: data.adminEmail,
        threshold: {
          full: 80,
          warning: 40
        },
        truckTerminal: {
          lat: -34.56796791657094,
          lng: -58.40815129015922
        },
        dump: {
          lat: -34.57644431357097,
          lng: -58.44205029209349
        }
      })

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
                name={'name'}
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
          // height: '104px',
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
                name={'province'}
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
                name={'zone'}
                label={'Zona'}
              />
            </Box>
          </Box>
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
                name={'number'}
                label={'Altura'}
              />
            </Box>
          </Box>
        </Box>

        {/* <Box
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
                name={'province'}
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
              <SelectForm
                name={'province'}
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
                name={'address'}
                label={'Dirección'}
              />
            </Box>
          </Box>
        </Box> */}
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
                name={'adminEmail'}
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
                name={'phone'}
                label={'Teléfono de contacto'}
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
        isLoading={isCreateCompanyLoading}
      />
    </form>
  );
};
