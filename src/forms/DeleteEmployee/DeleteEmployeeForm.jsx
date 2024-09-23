import {
  Box, Typography
} from '@mui/material';
import {
  useForm
} from 'react-hook-form';
import {
  CancelAndSubmitButton 
} from '../../components/CancelAndSubmitButton/CancelAndSubmitButton';


export const DeleteEmployeeForm = ({
  employeeToDelete,
  handleClose
}) => {

  useForm({
    defaultValues: {
      idEmployee: employeeToDelete?.id
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
      />
    </form>
  )
}

