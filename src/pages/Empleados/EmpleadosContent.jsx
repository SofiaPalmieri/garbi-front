import { Box, Paper } from '@mui/material';
import React, { useState } from 'react';
import { SearcherAndButton } from '../../components/SearcherAndButton';
import { CreateEmployeeForm } from '../../forms/CreateEmployee/CreateEmployeeForm';
import { ModalCreateResource } from '../../modales/ModalCreateResource';

export const EmpleadosContent = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{
            padding: '32px'
        }}>
            <ModalCreateResource
                title={"Nuevo Empleado"}
                description={"Complete los siguientes campos para agregar un nuevo empleado a la empresa"}
                open={open}
                handleClose={handleClose}
                form={<CreateEmployeeForm />}
            />
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
    )
}
