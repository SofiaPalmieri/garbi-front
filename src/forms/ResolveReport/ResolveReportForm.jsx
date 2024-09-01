import {
  yupResolver 
} from '@hookform/resolvers/yup';
import {
  object, string 
} from 'yup';
import {
  Box, TextField
} from '@mui/material';
import {
  useForm 
} from 'react-hook-form';




import {
  CancelAndSubmitButton 
} from '../../components/CancelAndSubmitButton/CancelAndSubmitButton';


const changeReportStatusSchema = object({
  message: string().required('El mensaje es obligatorio'),
}).required();

export const ResolveReportForm = ({
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
      status: '',
      message: ''
    },
    resolver: yupResolver(changeReportStatusSchema),
  });

  /*const { //todo
    changeReportStatus: {
      changeReportStatus: changeReportStatus, isLoadingChangeReportStatus 
    },
  } = useReports();*/

  const onSubmit = async (data) => {
    //TODO
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box
        sx={{
          width: '100%',
          padding: '4px 24px',
        }}
      >
        <TextField //todo: create component or add props to InputForm
          name={'message'}
          label={'Mensaje'}
          errors={errors}
          control={control}
          multiline
          rows={4}
          fullWidth
        />
      </Box>

      <CancelAndSubmitButton
        buttonSubmitMessage='CONFIRMAR'
        handleClose={handleClose}
        onSubmit={handleSubmit(onSubmit)}
      />
    </form>
  );
};
