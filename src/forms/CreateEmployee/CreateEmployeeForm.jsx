import { Box, FormControl, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { InputForm } from '../../components/InputForm';
import { SelectForm } from '../../components/SelectForm/SelectForm';


const cargos = [
  { value: 'Recolector', label: 'Recolector' },
  { value: 'Supervisor', label: 'Supervisor' },
];

const turnos = [
  { value: 'Noche', label: 'Noche' },
  { value: 'Tarde', label: 'Tarde' },
  { value: 'manana', label: 'Mañana' },
];

export const CreateEmployeeForm = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form>
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
            lineHeight: '16px',
            marginBottom: '16px'
          }}
        >
          Datos Personales
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '16px'
          }}
        >
          <Box sx={{
            display: 'flex',
            width: '100%',
            height: '40px',
            gap: '24px'
          }}>
            <Box
              sx={{
                flex: 1,
                height: '40px'
              }}
            >
              <InputForm
                control={control}
                name={'lastName'}
                label={'Apellido'}
                errors={errors}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                height: '40px'
              }}
            >
              <InputForm
                control={control}
                name={'firstName'}
                label={'Nombre'}
                errors={errors}
              />
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            width: '100%',
            height: '40px',
            gap: '24px'
          }}>
            <Box
              sx={{
                flex: 1,
                height: '40px'
              }}
            >
              <InputForm
                control={control}
                name={'phone'}
                label={'Teléfono personal'}
                errors={errors}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                height: '40px'
              }}
            >
              <InputForm
                control={control}
                name={'personalEmail'}
                label={'Email personal'}
                errors={errors}
              />
            </Box>
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
            lineHeight: '16px',
            marginBottom: '16px'
          }}
        >
          Datos dentro de la empresa
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '16px'
          }}
        >
          <Box sx={{
            display: 'flex',
            width: '100%',
            height: '40px',
            gap: '24px'
          }}>
            <Box
              sx={{
                flex: 1,
                height: '40px'
              }}
            >
              <SelectForm
                name={"jobPosition"}
                label={"Cargo"}
                control={control}
                errors={errors}
                options={cargos}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                height: '40px'
              }}
            >
              <SelectForm
                name={"timeShift"}
                label={"Turno"}
                control={control}
                errors={errors}
                options={turnos}
              />
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            width: '100%',
            height: '40px',
            gap: '24px'
          }}>
            <Box
              sx={{
                flex: 1,
                height: '40px'
              }}
            >
              <InputForm
                control={control}
                name={'phoneCompany'}
                label={'Teléfono de la empresa'}
                errors={errors}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                height: '40px'
              }}
            >
              <InputForm
                control={control}
                name={'enterpriseEmail'}
                label={'Email de la empresa'}
                errors={errors}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  )
}
