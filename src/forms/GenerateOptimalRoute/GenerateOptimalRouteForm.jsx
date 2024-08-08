import {
  Box, Typography, CircularProgress, Select, MenuItem, FormControl, InputLabel
} from '@mui/material';
import {
  Controller, useForm 
} from 'react-hook-form';
import {
  OutlinedInputForm
} from '../../components/OutlinedInputForm';
import {
  CancelAndSubmitButton 
} from '../../components/CancelAndSubmitButton/CancelAndSubmitButton';

import {
  yupResolver 
} from '@hookform/resolvers/yup';
import {
  object, string, number 
} from 'yup';

import {
  useGenerateOptimalRoutes 
} from '../../api/hooks/useGenerateOptimalRoute/useGenerateOptimalRoutes';

export const GenerateOptimalRouteForm = ({
  handleClose,
  handleOpenRightSideOptimalRouteInfo
}) => {
  const areas = ['Area 1', 'Area 2', 'Area 3'];
  const {
    createOptimalRoute, isCreateOptimalRouteLoading 
  } = useGenerateOptimalRoutes();

  const createOptimalRouteSchema = object({
    area: string().required('Debe seleccionar una opción'),
    percentage: number()
      .min(0, 'El valor debe ser al menos 0')
      .max(100, 'El valor debe ser como máximo 100')
      .transform((value) => (isNaN(value) || value === '' ? undefined : value))
      .required('El valor debe ser un número entre 0 y 100'),  
  }).required();

  const {
    control, handleSubmit, formState: {
      errors 
    }
  } = useForm({
    defaultValues: {
      area: '',
      percentage: '50',
    },
    resolver: yupResolver(createOptimalRouteSchema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();

    const optimalRouteForm = {
      area: data.area,
      percentage: data.percentage,
    };

    formData.append('optimalRouteForm', JSON.stringify(optimalRouteForm));

    try {
      const response = await createOptimalRoute(formData);
      if (response.success) {
        handleOpenRightSideOptimalRouteInfo(data);
        handleClose();  // Cerrar el formulario después de la acción exitosa
      }
    } catch (error) {
      console.error('Error generating optimal route:', error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
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
          <Controller
            name='area'
            control={control}
            render={({
              field 
            }) => (
              <FormControl
                variant='filled'
                size='medium'
                fullWidth
              >
                <InputLabel
                  id='area'
                >Área</InputLabel>
                <Select
                  size='medium'
                  fullWidth
                  variant='filled'
                  label='Área'
                  {...field}
                >
                  {areas.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                {errors.area && (
                  <Typography
                    fontSize='0.85rem'
                    paddingLeft={1.5}
                    color='red'
                  >
                    {errors.area.message}
                  </Typography>
                )}
              </FormControl>
            )}
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
              name='percentage'
              control={control}
              errors={errors}
              label={''}
              variant='filled'
              size='medium'
              endMessage={'%'}
            />
          </Box>
          de su capacidad
        </Typography>
      </Box>
      <CancelAndSubmitButton
        handleClose={handleClose}
        typeButton='submit'
        loadingBehaviour={isCreateOptimalRouteLoading ? (
          <CircularProgress
            size={24}
            color='inherit'
          />
        ) : (
          'GENERAR'
        )}
      />
    </form>
  );
}
