import {
  yupResolver
} from '@hookform/resolvers/yup';
import {
  object, string
} from 'yup';
import {
  Box, Typography, IconButton
} from '@mui/material';
import {
  useForm
} from 'react-hook-form';
import {
  InputForm 
} from './components/InputForm';
import {
  SelectForm 
} from './components/SelectForm/SelectForm';
import {
  CancelAndSubmitButton 
} from './components/CancelAndSubmitButton/CancelAndSubmitButton';
import {
  useEmployees 
} from './api/hooks/useEmployees/useEmployees';
import {
  CustomAlert 
} from './components/CustomAlert/CustomAlert';
import {
  Visibility, VisibilityOff
} from '@mui/icons-material';
import {
  useState 
} from 'react';
import {
  ref 
} from 'yup';

const cargos = [
  {
    value: 'Recolector',
    label: 'Recolector' 
  },
  {
    value: 'Supervisor',
    label: 'Supervisor' 
  }
];

const turnos = [
  {
    value: 'Noche',
    label: 'Noche' 
  },
  {
    value: 'Tarde',
    label: 'Tarde' 
  },
  {
    value: 'Mañana',
    label: 'Mañana' 
  }
];

const newEmployeeSchema = object({
  lastName: string()
    .required('El apellido es obligatorio')
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/, 'El apellido no puede contener números o caracteres especiales')
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .max(50, 'El apellido no debe exceder 50 caracteres'),
  firstName: string()
    .required('El nombre es obligatorio')
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/, 'El nombre no puede contener números o caracteres especiales')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no debe exceder 50 caracteres'),
  personalPhone: string()
    .required('El teléfono personal es obligatorio')
    .matches(/^\+?\d{10,12}$/, 'El teléfono personal no es válido'),
  personalEmail: string()
    .required('El email personal es obligatorio')
    .email('El email personal no es un email válido'),
  jobPosition: string().required('El cargo es obligatorio'),
  timeShift: string().required('El turno es obligatorio'),
  enterprisePhone: string()
    .required('El teléfono de la empresa es obligatorio')
    .matches(/^\+?\d{10,12}$/, 'El teléfono de la empresa no es válido'),
  enterpriseEmail: string()
    .required('El email de la empresa es obligatorio')
    .email('El email de la empresa no es válido'),
  password: string()
    .required('La contraseña es obligatoria')
    .min(4, 'La contraseña debe tener 4 caracteres')
    .max(4, 'La contraseña debe tener 4 caracteres'),
  confirmPassword: string()
    .required('La confirmación de la contraseña es obligatoria')
    .oneOf([ref('password')], 'Las contraseñas deben coincidir')
}).required();

  
  

export const RegistrationPage = ({
  handleClose, onSuccess 
}) => {
  const {
    control, handleSubmit, formState: {
      errors 
    } 
  } = useForm({
    defaultValues: {
      companyId: '',
      lastName: '',
      firstName: '',
      personalPhone: '',
      personalEmail: '',
      jobPosition: '',
      timeShift: '',
      enterprisePhone: '',
      enterpriseEmail: '',
      password: '',
      confirmPassword: ''
    },
    resolver: yupResolver(newEmployeeSchema),
  });

  const {
    createEmployee: {
      createEmployee, isCreateEmployeeLoading 
    } 
  } = useEmployees();
  const [showPassword, setShowPassword] = useState({
    current: false,
    confirm: false 
  });

  const handleShowPassword = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field] 
    }));
  };

  const user = JSON.parse(localStorage.getItem('user'));
  const companyId = user.companyId;

  const onSubmit = async (data) => {
    try {
      const response = await createEmployee({
        companyId: companyId,
        name: data.firstName,
        surname: data.lastName,
        personalPhone: data.personalPhone,
        personalEmail: data.personalEmail,
        companyPhone: data.enterprisePhone,
        companyEmail: data.enterpriseEmail,
        workingShift: data.timeShift,
        role: data.jobPosition
      });
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
      >{error.message}</li>
    ))
  ) : null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box
        sx={{
          width: '100%',
          padding: '16px 24px' 
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            marginBottom: '16px' 
          }}
        >Datos Personales</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px' 
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '24px' 
            }}
          >
            <InputForm
              control={control}
              name='lastName'
              label='Apellido'
            />
            <InputForm
              control={control}
              name='firstName'
              label='Nombre'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '24px' 
            }}
          >
            <InputForm
              control={control}
              name='personalPhone'
              label='Teléfono personal'
            />
            <InputForm
              control={control}
              name='personalEmail'
              label='Email personal'
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          padding: '16px 24px' 
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            marginBottom: '16px' 
          }}
        >Datos dentro de la empresa</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px' 
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '24px' 
            }}
          >
            <SelectForm
              name='jobPosition'
              label='Cargo'
              control={control}
              options={cargos}
            />
            <SelectForm
              name='timeShift'
              label='Turno'
              control={control}
              options={turnos}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '24px' 
            }}
          >
            <InputForm
              control={control}
              name='enterprisePhone'
              label='Teléfono de la empresa'
            />
            <InputForm
              control={control}
              name='enterpriseEmail'
              label='Email de la empresa'
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          padding: '16px 24px' 
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            marginBottom: '16px' 
          }}
        >Contraseña</Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '24px' 
          }}
        >
          <InputForm
            name='password'
            label='Contraseña'
            control={control}
            type={showPassword.current ? 'text' : 'password'}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => handleShowPassword('current')}
                >
                  {showPassword.current ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              )
            }}
          />
          <InputForm
            name='confirmPassword'
            label='Confirmar contraseña'
            control={control}
            type={showPassword.confirm ? 'text' : 'password'}
            helperText={errors.confirmPassword?.message}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => handleShowPassword('confirm')}
                >
                  {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              )
            }}
          />
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
        isLoading={isCreateEmployeeLoading}
      />
    </form>
  );
};
