import { Box, Button, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const rows = [
    {
        id: 123456,
        barrio: "Villa del Parque",
        area: 2,
        direccion: "Av. Liberatador General",
        capacidad: "100%",
        bateria: "100%",
        tipoDeCarga: "Bilateral",
        alturaContenedor: "170 cm"
    },
    {
        id: 123456,
        barrio: "Villa del Parque",
        area: 2,
        direccion: "Av. Liberatador General",
        capacidad: "100%",
        bateria: "100%",
        tipoDeCarga: "Bilateral",
        alturaContenedor: "170 cm"
    },
    {
        id: 123456,
        barrio: "Villa del Parque",
        area: 2,
        direccion: "Av. Liberatador General",
        capacidad: "100%",
        bateria: "100%",
        tipoDeCarga: "Bilateral",
        alturaContenedor: "170 cm"
    }
];


export const ContainerPage = () => {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            height: '100%'
        }}>
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
                    }}>Gestión{'>'}Contenedores</Typography>
                </Box>
                <Divider />
                <Box sx={{
                    padding: '32px'
                }}>
                    <Paper sx={{
                        width: '100%',
                    }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
                            <FormControl sx={{ width: '18.75rem' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    size='small'
                                    placeholder='Buscar por ID o Dirección'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                edge="end"
                                            >
                                                {<SearchIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                            <Button size='medium' sx={{
                                backgroundColor: '#12422C',
                                color: 'white',
                                height: '36px',
                                width: '202px',
                                '&:hover': {
                                    'backgroundColor': '#12422C'
                                }
                            }} >
                                Nuevo Contenedor
                                <AddIcon sx={{
                                    marginLeft: '8px',
                                    fontSize: '20px'
                                }} />
                            </Button>
                        </Box>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >ID</TableCell>
                                        <TableCell align="center">Barrio</TableCell>
                                        <TableCell align="center">Área</TableCell>
                                        <TableCell align="center">Dirección</TableCell>
                                        <TableCell align="center">Capacidad</TableCell>
                                        <TableCell align="center">Bateria</TableCell>
                                        <TableCell align="center">Tipo de carga</TableCell>
                                        <TableCell align="center" sx={{
                                            borderRight: '1px solid #0000001F'
                                        }} >Altura contenedor</TableCell>
                                        <TableCell align="center">Acciones</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.direccion}

                                        >
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="center">{row.barrio}</TableCell>
                                            <TableCell align="center">{row.area}</TableCell>
                                            <TableCell align="center">{row.direccion}</TableCell>
                                            <TableCell align="center">
                                                <Box sx={{
                                                    borderRadius: '8px',
                                                    backgroundColor: '#D32F2F',
                                                    minHeight: '28px',
                                                    width: '72px',
                                                    color: 'white',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    margin: 'auto'

                                                }}>{row.capacidad}</Box>
                                            </TableCell>
                                            <TableCell align="center"><Box sx={{
                                                borderRadius: '8px',
                                                backgroundColor: '#D32F2F',
                                                minHeight: '28px',
                                                width: '72px',
                                                color: 'white',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                margin: 'auto'
                                            }}>{row.bateria}</Box></TableCell>
                                            <TableCell align="center">{row.tipoDeCarga}</TableCell>
                                            <TableCell align="center" sx={{
                                                borderRight: '1px solid #0000001F'
                                            }}>{row.alturaContenedor}</TableCell>
                                            <TableCell align='center'>
                                                <EditIcon sx={{
                                                    color: "#0000008F",
                                                    marginRight: '16px'
                                                }} />
                                                <DeleteIcon sx={{
                                                    color: "#0000008F"
                                                }} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={3}
                                rowsPerPage={3}
                                page={6}
                            />
                        </TableContainer>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}
