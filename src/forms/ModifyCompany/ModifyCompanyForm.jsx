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


const companySchema = object({
  name: string()
    .required('La razón social es obligatoria')
    .min(2, 'La razón social debe tener al menos 2 caracteres')
    .max(50, 'La razón social no debe exceder 50 caracteres'),
  cuit: string()
    .required('El CUIT es obligatorio')
    .min(11, 'El CUIT debe tener 11 caracteres')
    .max(11, 'El CUIT debe tener 11 caracteres'),
  province: string().required('La provincia es obligatoria'),
  address: string().required('La dirección es obligatoria'),
  adminEmail: string()
    .required('El email del admin es obligatorio')
    .email('El email ingresado no es válido'),
  phone: string()
    .required('El teléfono de contacto es obligatorio')
    .matches(/^\+?\d{10,12}$/, 'El teléfono de contacto no es válido'),
}).required();


export const ModifyCompanyForm = ({
  companyToModify,
  handleClose,
  onSuccess
}) => {
  const {
    control,
    handleSubmit,
    formState: {
      errors 
    }
  } = useForm({
    defaultValues: {
      id: companyToModify.id,
      name: companyToModify.name,
      cuit: companyToModify.cuit,
      province: companyToModify.address.province,
      address: `${companyToModify.address.street} ${companyToModify.address.number}`,
      adminEmail:  companyToModify.email,
      phone: companyToModify.phone,
    },
    resolver: yupResolver(companySchema),
  });

  const {
    modifyCompany: {
      modifyCompany,
      isModifyCompanyLoading 
    },
  } = useCompanies();

  const onSubmit = async (data) => {
    try {
      const response = await modifyCompany(
        data.id,
        {
          name: data.name, 
          cuit: data.cuit,
          address: {
            street: data.address,
            number: '456',
            postalCode: '1234',
            province: data.province,
            neighborhood: 'Barrio Ejemplo',
          },
          phone: data.phone,
          email: data.adminEmail,
          threshold: {
            full: 80,
            warning: 40
          }
        }
      )

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
        buttonSubmitMessage='MODIFICAR'
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isModifyCompanyLoading}
      />
    </form>
  );
};
