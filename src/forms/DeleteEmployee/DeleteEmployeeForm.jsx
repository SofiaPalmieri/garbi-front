import {
  Box, Typography
} from '@mui/material';
import {
  useForm
} from 'react-hook-form';
import {
  CancelAndSubmitButton 
} from '../../components/CancelAndSubmitButton/CancelAndSubmitButton';
import {
  useEmployees 
} from '../../api/hooks/useEmployees/useEmployees';


export const DeleteEmployeeForm = ({
  employeeToDelete,
  handleClose,
  onSuccess
}) => {

  const {
    handleSubmit,
  } = useForm({
    defaultValues: {
      id: employeeToDelete?.id
    },
  });

  const {
    deleteEmployee: {
      deleteEmployee,
      isDeleteEmployeeLoading 
    },
  } = useEmployees();

  const onSubmit = async (data) => {
    try {
      const response = await deleteEmployee(data.id);

      //TODO later: validar que la respuesta sea la esperada, y sino tirar error.
      handleClose();
      onSuccess();
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };


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
            fontWeight: 300,
            lineHeight: '26.56px',
          }}
        >
          ¿Está seguro que desea eliminar al empleado {' '}
          <Typography
            component='span'
            sx={{
              fontWeight: '500' 
            }}
          >
            {employeeToDelete?.name} {employeeToDelete?.surname}
          </Typography>
          ? No podrá deshacer esta acción.
        </Typography>
      </Box>
      <CancelAndSubmitButton
        buttonSubmitMessage='ELIMINAR'
        handleClose={handleClose}
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isDeleteEmployeeLoading}
      />
    </form>
  )
}

