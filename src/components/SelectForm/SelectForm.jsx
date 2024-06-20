import React from 'react';
import { Controller } from 'react-hook-form';
import { FormControl, Select, MenuItem, Typography, InputLabel } from '@mui/material';


export const SelectForm = ({ name, label, control, errors, options }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <FormControl size="small" fullWidth>
                 <InputLabel id={name + "-label"}>{label}</InputLabel>
                    <Select
                        size="small"
                        fullWidth
                        label={label}
                        {...field}
                    >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    {errors[name] && (
                        <Typography fontSize={'0.85rem'} paddingLeft={1.5} color={'red'}>
                            {errors[name].message}
                        </Typography>
                    )}
                </FormControl>
            )}
        />
    );
};