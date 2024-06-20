import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Modal, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { SearcherAndButton } from '../../components/SearcherAndButton';
import { Controller, useForm } from 'react-hook-form';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: '0px 6px 30px 5px #0000001F',
    borderRadius: '8px'
};

const provincias = [
    { value: 'buenosAires', label: 'Buenos Aires' },
    { value: 'cordoba', label: 'Córdoba' },
    { value: 'santaFe', label: 'Santa Fe' },
    // Agrega más provincias según sea necesario
];



const CompanyPage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            padding: '4rem'
        }}>
            <Modal
                open={open}
                onClose={handleClose}
                disableAutoFocus={true}
            >
                <Box sx={{ width: '32.5rem', height: '522px', ...style }}>
                    <Box sx={{
                        height: '4rem',
                        width: '100%',
                        padding: '16px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Typography
                            sx={{
                                fontSize: '20px',
                                fontWeight: 500,
                                lineHeight: '32px',
                            }}
                        >
                            Nueva Empresa
                        </Typography>
                        <Button sx={{padding: 0, minWidth: 0, borderRadius: '50%'}} onClick={handleClose}>
                            <CloseIcon />
                        </Button>
                    </Box>
                    <Divider />

                    <Box
                        sx={{
                            height: '78px',
                            padding: '12px 24px'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 300,
                                lineHeight: '26.56px'
                            }}
                        >
                            Complete los siguientes campos para agregar una nueva empresa de recolección al sistema
                        </Typography>
                    </Box>
                    <Divider />
                    <Box
                        sx={{
                            width: '100%',
                            height: '104px',
                            padding: '16px 24px'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '16px',
                                marginBottom: '16px'
                            }}
                        >
                            Datos de la empresa
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '24px',
                                width: '100%',
                                height: '40px'
                            }}
                        >
                            <Box
                                sx={{
                                    flex: 1,
                                    height: '40px'
                                }}
                            >
                                <Controller
                                    name="razonSocial"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormControl size="small" fullWidth sx={{ minHeight: '80px' }}>
                                            <TextField
                                                size='small'
                                                fullWidth
                                                label="Razón Social"
                                                {...field}
                                            />
                                            {errors.razonSocial && (
                                                <Typography fontSize={'0.85rem'} paddingLeft={1.5} color={'red'}>{errors.razonSocial.message}</Typography>
                                            )}
                                        </FormControl>

                                    )
                                    }
                                />

                            </Box>
                            <Box
                                sx={{
                                    flex: 1,
                                    height: '40px'
                                }}
                            >
                                <Controller
                                    name="cuit"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormControl fullWidth size='small'>
                                            <TextField
                                                size='small'
                                                fullWidth
                                                label="CUIT"
                                                {...field}
                                            />
                                            {errors.cuit && (
                                                <Typography fontSize={'0.85rem'} paddingLeft={1.5} color={'red'}>{errors.cuit.message}</Typography>
                                            )}
                                        </FormControl>
                                    )
                                    }
                                />
                            </Box>
                        </Box>

                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            height: '104px',
                            padding: '16px 24px'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '16px',
                                marginBottom: '16px'
                            }}
                        >
                            Ubicación en la que va a operar
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '24px',
                                width: '100%',
                                height: '40px'
                            }}
                        >
                            <Box
                                sx={{
                                    flex: 1,
                                    height: '40px'
                                }}
                            >
                                <Controller
                                    name="provincia"
                                    control={control}
                                    rules={{ required: "Este campo es obligatorio" }}
                                    render={({ field }) => (
                                        <FormControl size="small" fullWidth sx={{ minHeight: '80px' }}>
                                            <InputLabel id="provincia-label">Provincia</InputLabel>
                                            <Select
                                                labelId="provincia-label"
                                                id="provincia-select"
                                                label="Provincia"
                                                {...field}
                                            >
                                                {provincias.map((provincia) => (
                                                    <MenuItem key={provincia.value} value={provincia.value}>
                                                        {provincia.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            {errors.provincia && (
                                                <Typography fontSize={'0.85rem'} paddingLeft={1.5} color={'red'}>
                                                    {errors.provincia.message}
                                                </Typography>
                                            )}
                                        </FormControl>
                                    )}
                                />

                            </Box>
                            <Box
                                sx={{
                                    flex: 1,
                                    height: '40px'
                                }}
                            >
                                <Controller
                                    name="direccion"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormControl fullWidth size='small'>
                                            <TextField
                                                size='small'
                                                fullWidth
                                                label="Dirección"
                                                {...field}
                                            />
                                            {errors.direccion && (
                                                <Typography fontSize={'0.85rem'} paddingLeft={1.5} color={'red'}>{errors.direccion.message}</Typography>
                                            )}
                                        </FormControl>
                                    )
                                    }
                                />
                            </Box>
                        </Box>

                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            height: '104px',
                            padding: '16px 24px'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '16px',
                                marginBottom: '16px'
                            }}
                        >
                            Datos de contacto
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '24px',
                                width: '100%',
                                height: '40px'
                            }}
                        >
                            <Box
                                sx={{
                                    flex: 1,
                                    height: '40px'
                                }}
                            >
                                <Controller
                                    name="mailDelAdmin"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormControl size="small" fullWidth sx={{ minHeight: '80px' }}>
                                            <TextField
                                                size='small'
                                                fullWidth
                                                label="Mail del Admin"
                                                {...field}
                                            />
                                            {errors.mailDelAdmin && (
                                                <Typography fontSize={'0.85rem'} paddingLeft={1.5} color={'red'}>{errors.mailDelAdmin.message}</Typography>
                                            )}
                                        </FormControl>

                                    )
                                    }
                                />

                            </Box>
                            <Box
                                sx={{
                                    flex: 1,
                                    height: '40px'
                                }}
                            >
                                <Controller
                                    name="telefono"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormControl fullWidth size='small'>
                                            <TextField
                                                size='small'
                                                fullWidth
                                                label="Teléfono de contacto"
                                                {...field}
                                            />
                                            {errors.telefono && (
                                                <Typography fontSize={'0.85rem'} paddingLeft={1.5} color={'red'}>{errors.telefono.message}</Typography>
                                            )}
                                        </FormControl>
                                    )
                                    }
                                />
                            </Box>
                        </Box>

                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            height: '68px',
                            padding: '16px 24px'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'end',
                                gap: '8px'
                            }}
                        >

                            <Button
                                color="secondary"
                                sx={{
                                    backgroundColor: 'secondary.main',
                                    color: 'secondary.contrastText',
                                    padding: '8px',
                                    '&:hover': {
                                        backgroundColor: 'secondary.dark',
                                    },
                                }}
                                type='submit'
                            >
                                Cancelar
                            </Button>
                            <Button
                                sx={{
                                    backgroundColor: '#12422C',
                                    color: 'white',
                                    paddingLeft: '16px',
                                    paddingRight: '16px',
                                    '&:hover': {
                                        backgroundColor: '#0a2e1f' // Color verde oscuro al hacer hover
                                    }
                                }}
                                type="submit"
                            >
                                CREAR
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal >

            <Paper sx={{
                width: '100%'
            }}>
                <SearcherAndButton
                    placeholderInput={"Buscar por Razón social o Nombre"}
                    buttonText={"nueva empresa"}
                    inputWidth={'20rem'}
                    onClick={handleOpen}
                />
            </Paper>

        </Box >
    )
}

export default CompanyPage