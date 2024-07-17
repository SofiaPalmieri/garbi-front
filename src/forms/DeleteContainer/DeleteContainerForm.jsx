import {
  Box, Typography
} from '@mui/material';
import {
  useForm
} from 'react-hook-form';


export const DeleteContainerForm = ({
  containerToDelete
}) => {
  console.log('🚀 ~ DeleteContainerForm ~ containerToDelete:', containerToDelete)
  useForm({
    defaultValues: {
      idContainer: containerToDelete?.id
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
          ¿Está seguro que desea eliminar el contenedor {' '}
          <Typography
            component='span'
            sx={{
              fontWeight: '500' 
            }}
          >
            {containerToDelete?.id}
          </Typography>
          ? No podrá deshacer esta acción.
        </Typography>
      </Box>
    </form>
  )
}

