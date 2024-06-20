import { Box, Divider, Typography, FormControl, TextField, Button } from '@mui/material'
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
const CreateAreaPage = () => {
    const apiKeyGoogleMaps = import.meta.env.VITE_REACT_APP_API_KEY_GOOGLE_MAPS;
    const position = { lat: 43.64, lng: -79.41 }

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });


    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Box
                sx={{
                    width: 1,
                    padding: '16px 64px 13px'
                }}
            >
                <Typography
                    sx={{
                        fontSize: '34px',
                        fontWeight: 400,
                        lineHeight: '42px'
                    }}
                >
                    Crear nueva área
                </Typography>
            </Box>
            <Divider />
            <Box
                sx={{
                    flexGrow: 1,
                    padding: '24px 64px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '32px'
                }}>
                    <Typography
                        sx={{
                            color: '#000',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '166%',
                            letterSpacing: '0.4px'
                        }}

                    >
                        Complete los siguientes campos y luego indique el área en el mapa
                    </Typography>
                    <Button
                        sx={{
                            backgroundColor: '#12422C',
                            color: 'white',
                            height: '2.5rem',
                            '&:hover': {
                                backgroundColor: '#0a2e1f' // Color verde oscuro al hacer hover
                            }
                        }} type='submit'>
                        GUARDAR
                    </Button>
                </Box>
                <Box>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormControl>
                                <TextField
                                    size='medium'
                                    label="Nombre del área"
                                    {...field}
                                />
                                {errors.name && (
                                    <Typography fontSize={'0.85rem'} paddingLeft={1.5} color={'red'}>{errors.name.message}</Typography>
                                )}
                            </FormControl>
                        )
                        }
                    /></Box>
                <Box sx={{ height: '24px' }}></Box>
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <TextField
                                fullWidth
                                multiline
                                label="Descripción del área"
                                {...field}
                                minRows={4}
                                rows={4}
                            />
                            {errors.description && (
                                <Typography fontSize={'0.85rem'} paddingLeft={1.5} color={'red'}>{errors.description.message}</Typography>
                            )}
                        </FormControl>
                    )
                    }
                />
                <Box sx={{ height: '32px' }}></Box>
                <Box
                    sx={{
                        flexGrow: 1
                    }}
                >
                    <APIProvider
                        apiKey={apiKeyGoogleMaps}
                    >
                        <Map
                            defaultZoom={9}
                            defaultCenter={position}
                            mapId='658a52589c7a963'
                        />
                    </APIProvider>
                </Box>
            </Box>

        </Box >
    )
}

export default CreateAreaPage