import {
  FormControl, InputAdornment, TextField, Typography
} from '@mui/material';
import {
  Controller
} from 'react-hook-form';

export const OutlinedInputForm = ({
  name,
  label,
  control,
  errors,
  endMessage,
  size = 'small',
  helperText = null,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: true,
      }}
      render={({
        field
      }) => (
        <FormControl
          size={size}
          fullWidth
        >
          <TextField
            variant={'outlined'}
            size={size}
            fullWidth
            label={label}
            {...field}
            helperText={helperText}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position='end'
                >
                  {endMessage}
                </InputAdornment>
              ),
            }}
          />
          {errors[name] && (
            <Typography
              fontSize={'0.85rem'}
              paddingLeft={1.5}
              color={'red'}
            >
              {errors[name].message}
            </Typography>
          )}
        </FormControl>
      )}
    />
  );
}
