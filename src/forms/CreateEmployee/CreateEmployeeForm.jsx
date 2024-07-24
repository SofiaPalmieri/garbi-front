import {
  yupResolver 
} from '@hookform/resolvers/yup';
import {
  object, string 
} from 'yup';
import {
  Alert, AlertTitle, Box, Typography 
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
  useEmployees 
} from '../../api/hooks/useEmployees/useEmployees';

const cargos = [
  {
    value: 'Recolector',
    label: 'Recolector',
  },
  {
    value: 'Supervisor',
    label: 'Supervisor',
  },
];

const turnos = [
  {
    value: 'Noche',
    label: 'Noche',
  },
  {
    value: 'Tarde',
    label: 'Tarde',
  },
  {
    value: 'manana',
    label: 'Mañana',
  },
];

const newEmployeeSchema = object({
  lastName: string()
    .required('El apellido es obligatorio')
    .matches(/^[a-zA-Z\s]+$/, 'El apellido no puede contener números o caracteres especiales')
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .max(50, 'El apellido no debe exceder 50 caracteres'),
  firstName: string()
    .required('El nombre es obligatorio')
    .matches(/^[a-zA-Z\s]+$/, 'El nombre no puede contener números o caracteres especiales')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no debe exceder 50 caracteres'),
  personalPhone: string()
    .required('El teléfono personal es obligatorio')
    .matches(/^\+?\d{10,12}$/, 'El teléfono personal no es válido'),
  personalEmail: string()
    .email('El email personal no es un email válido')
    .required('El email personal es obligatorio'),
  jobPosition: string().required('El cargo es obligatorio'),
  timeShift: string().required('El turno es obligatorio'),
  enterprisePhone: string()
    .required('El teléfono de la empresa es obligatorio')
    .matches(/^\+?\d{10,12}$/, 'El teléfono de la empresa no es válido'),
  enterpriseEmail: string()
    .email('El email de la empresa no es válido')
    .required('El email de la empresa es obligatorio')
}).required();

export const CreateEmployeeForm = ({
  handleClose
}) => {
  const {
    control,
    handleSubmit,
    formState: {
      errors 
    },
  } = useForm({
    defaultValues: {
      lastName: '',
      firstName: '',
      personalPhone: '',
      personalEmail: '',
      jobPosition:  '',
      timeShift: '',
      enterprisePhone: '',
      enterpriseEmail: ''
    },
    resolver: yupResolver(newEmployeeSchema),
  });

  const {
    createEmployee: {
      createEmployee: createEmployee, isLoadingCreateEmployee 
    },
  } = useEmployees();

  const onSubmit = async (data) => {
    try{
      const response = await createEmployee({
        companyId: '6642c093eb730d1cd07762b0', //todo: get it from the current user
        name: data.firstName, 
        surname: data.lastName, 
        phone: data.personalPhone, 
        email: data.personalEmail, 
        //companyPhone: data.enterprisePhone, //TODO: add when BE is ready
        //companyEmail: data.enterpriseEmail, //TODO: add when BE is ready
        password: 'Contra12', //TODO: delete when BE is ready
        workingDay: [ //TODO: decide with the team what we want from this
          {
            'day': 'Lunes',
            'startTime': '2024-07-24T19:40:44.057Z',
            'endTime': '2024-07-24T19:40:44.057Z'
          }
        ], 
        role: data.jobPosition //TODO: see what the BE needs here
      });
  
      if (response.success) {
        handleClose();
      } else {
        console.error('Failed to submit form', response);
      }
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
          Datos Personales
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
                name={'lastName'}
                label={'Apellido'}
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
                name={'firstName'}
                label={'Nombre'}
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
                name={'personalPhone'}
                label={'Teléfono personal'}
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
                name={'personalEmail'}
                label={'Email personal'}
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
          Datos dentro de la empresa
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
                name={'jobPosition'}
                label={'Cargo'}
                control={control}
                options={cargos}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                height: '40px',
              }}
            >
              <SelectForm
                name={'timeShift'}
                label={'Turno'}
                control={control}
                options={turnos}
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
                name={'enterprisePhone'}
                label={'Teléfono de la empresa'}
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
                name={'enterpriseEmail'}
                label={'Email de la empresa'}
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
        onSubmit={handleSubmit(onSubmit)}
      />
    </form>
  );
};
