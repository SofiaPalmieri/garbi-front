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
    value: 'Mañana',
    label: 'Mañana',
  },
];


export const ModifyEmployeeForm = ({
  elementToModify,
  handleClose
}) => {

  const {
    control,
    formState: {
      errors
    },
  } = useForm({
    defaultValues: {
      id: elementToModify?.id,
      companyId: elementToModify?.companyId,
      lastName: elementToModify?.surname,
      firstName: elementToModify?.name,
      personalPhone: elementToModify?.personalPhone,
      personalEmail: elementToModify?.personalEmail,
      jobPosition: elementToModify?.role,
      timeShift: elementToModify?.workingShift,
      enterprisePhone: elementToModify?.companyPhone,
      enterpriseEmail: elementToModify?.companyEmail
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
      
      <CancelAndSubmitButton
        handleClose={handleClose}
        buttonSubmitMessage='MODIFICAR'
      />
    </form>
  )
}

