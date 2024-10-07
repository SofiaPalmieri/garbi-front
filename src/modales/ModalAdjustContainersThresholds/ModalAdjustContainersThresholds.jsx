import CloseIcon from '@mui/icons-material/Close';
import {
  Box, Button, Modal, Typography, DialogContent
} from '@mui/material';
import Circle from '@mui/icons-material/Circle';
import {
  useForm 
} from 'react-hook-form';
import {
  InputForm 
} from '../../components/InputForm';
import {
  CancelAndSubmitButton 
} from '../../components/CancelAndSubmitButton/CancelAndSubmitButton';
import {
  yupResolver 
} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  thresholdFull: yup
    .number()
    .typeError('El valor debe ser un número') 
    .max(100, 'El valor no debe superar el 100%')
    .required('El límite de llenado es obligatorio'),
  
  thresholdWarning: yup
    .number()
    .typeError('El valor debe ser un número') 
    .min(0, 'El valor debe ser mayor o igual a 0') 
    .max(100, 'El valor no debe superar el 100%')
    .required('El límite de advertencia es obligatorio')
}).required();

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: '0px 6px 30px 5px #0000001F',
  borderRadius: '8px',
};

export const ModalAdjustContainersThreshold = ({
  open, handleClose, companyToModify, onSubmit
}) => {
  const company = companyToModify;

  const {
    control,
    handleSubmit,
    formState: {
      errors 
    }
  } = useForm({
    defaultValues: {
      thresholdFull: company?.threshold?.full,
      thresholdWarning: company?.threshold?.warning
    },
    resolver: yupResolver(schema)
  });

  const handleFormSubmit = (data) => {
    const reviewCompanyBody = {
      threshold: {
        full:data.thresholdFull,
        warning: data.thresholdWarning,
      },
      cuit: company.cuit,
      timestamp: new Date().toISOString(),
      dump: company.dump,
      address: company.address,
      truckTerminal: company.truckTerminal,
      email: company.email,
      id: company.id,
      name: company.name,
      phone: company.phone,
    };

    onSubmit(reviewCompanyBody); // Llamada a la función onSubmit
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box
        sx={{
          width: '32.5rem',
          ...style 
        }}
      >
        <Box
          sx={{
            height: '4rem',
            width: '100%',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '32px',
            }}
          >Ajustar límites</Typography>
          <Button
            onClick={handleClose}
          ><CloseIcon /></Button>
        </Box>

        <DialogContent>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center' 
              }}
            >
              <Circle
                sx={{
                  color: '#D32F2F',
                  marginRight: '8px' 
                }}
              />
              <Typography>es</Typography>
              <InputForm
                control={control}
                name={'thresholdFull'}
                label={'75%'}
                styleInput={{
                  width: '55px',
                  marginLeft: '8px',
                  marginRight: '8px' 
                }}
                errors={errors}
                fullWidth={false}
              />
              <Typography>o más de la capacidad del contenedor</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px' 
              }}
            >
              <Circle
                sx={{
                  color: '#2E7D32',
                  marginRight: '8px' 
                }}
              />
              <Typography>es</Typography>
              <InputForm
                control={control}
                name={'thresholdWarning'}
                label={'25%'}
                styleInput={{
                  width: '55px',
                  marginLeft: '8px',
                  marginRight: '8px' 
                }}
                errors={errors}
                fullWidth={false}
              />
              <Typography>o menos de la capacidad del contenedor</Typography>
            </Box>

            <CancelAndSubmitButton
              handleClose={handleClose}
              buttonSubmitMessage='MODIFICAR'
            />
          </form>
        </DialogContent>
      </Box>
    </Modal>
  );
};
