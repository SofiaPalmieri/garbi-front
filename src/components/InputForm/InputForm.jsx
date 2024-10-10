import {
  FormControl, TextField, Typography 
} from '@mui/material';
import {
  Controller 
} from 'react-hook-form';

export const InputForm = ({
  name,
  label,
  control,
  errors,
  styleInput,
  placeholder,
  variant = 'outlined',
  size = 'small',
  helperText = null,
  disabled = false,
  multiline = false,
  rows = 1,
  required = true,
  fullWidth=true
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required,
      }}
      defaultValue={''}
      render={({
        field 
      }) => (
        <FormControl
          size={size}
          fullWidth={fullWidth}
        >
          <TextField
            variant={variant}
            size={size}
            fullWidth
            label={label}
            {...field}
            helperText={helperText}
            disabled={disabled}
            multiline={multiline}
            rows={rows}
            placeholder={placeholder}
            sx={{
              ...styleInput,
              '& .MuiInputBase-input:-webkit-autofill': { //added this to prevent weird look when the browser autofills the field
                'webkitBoxShadow': '0 0 0 1000px white inset',
                'webkitTextFillColor': 'black',
              }
            }}
          />
          {errors && errors[name] && (
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
};
