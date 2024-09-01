import {
  yupResolver 
} from '@hookform/resolvers/yup';
import {
  object, string 
} from 'yup';
import {
  Box
} from '@mui/material';
import {
  useForm 
} from 'react-hook-form';
import {
  CancelAndSubmitButton 
} from '../../components/CancelAndSubmitButton/CancelAndSubmitButton';
import {
  InputForm 
} from '../../components/InputForm';


const changeReportStatusSchema = object({
  message: string().required('El mensaje es obligatorio'),
}).required();

export const ResolveReportForm = ({
  handleClose, reportId
}) => {
  const {
    control,
    handleSubmit,
    formState: {
      errors 
    },
  } = useForm({
    defaultValues: {
      id: reportId,
      status: '',
      message: ''
    },
    resolver: yupResolver(changeReportStatusSchema),
  });

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
        <InputForm
          name={'message'}
          label={'Mensaje'}
          control={control}
          errors={errors}
          multiline={true}
          rows={4}
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
