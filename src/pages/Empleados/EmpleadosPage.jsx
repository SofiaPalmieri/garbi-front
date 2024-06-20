import { Box, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SearcherAndButton } from '../../components/SearcherAndButton'
import { ModalCreateResource } from '../../modales/ModalCreateResource';
import { CreateEmployeeForm } from '../../forms/CreateEmployee/CreateEmployeeForm';

const EmpleadosPage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            height: '100%'
        }}>
            <ModalCreateResource
                title={"Nuevo Empleado"}
                description={"Complete los siguientes campos para agregar un nuevo empleado a la empresa"}
                open={open}
                handleClose = {handleClose}
                form = {<CreateEmployeeForm />}
            />
            <Box sx={{
                width: '256px',
                boxShadow: '0px 3px 1px -2px #00000033',
                backgroundColor: '#F5F5F5',
                padding: '16px 18px'
            }}>
                <Typography sx={{
                    color: '#00000099'
                }}>Filtros</Typography>

            </Box>
            <Box width={'100%'}>
                <Box sx={{
                    width: '100%',
                    padding: '16px 32px'
                }}>
                    <Typography sx={{
                        fontSize: '34px',
                        fontWeight: 400,
                        letterSpacing: '0.25px',
                        textAlign: 'left'
                    }}>Gestión{'>'}Empleados</Typography>
                </Box>
                <Divider />
                <Box sx={{
                    padding: '32px'
                }}>
                    <Paper sx={{
                        width: '100%',
                    }}>
                        <SearcherAndButton
                            placeholderInput={"Buscar por Nombre o Apellido"}
                            buttonText={"Nuevo Empleado"}
                            inputWidth={'18.75rem'}
                            onClick={handleOpen}
                        />
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}

export default EmpleadosPage