import { FormControl, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

export const InputForm = ({ name, label, control, errors }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <FormControl size="small" fullWidth>
                    <TextField
                        size='small'
                        fullWidth
                        label={label}
                        {...field}
                    />
                    {errors[name] && (
                        <Typography fontSize={'0.85rem'} paddingLeft={1.5} color={'red'}>
                            {errors[name].message}
                        </Typography>
                    )}
                </FormControl>
            )
            }
        />
    )
}
