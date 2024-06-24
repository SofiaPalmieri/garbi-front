import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function RoutesSideBar() {
    return (
        <Box sx={{
            width: '256px',
            boxShadow: '0px 3px 1px -2px #00000033',
            backgroundColor: '#F5F5F5',
            padding: '16px 18px',
            marginTop:"450px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent:"flex-end"
        }}>
            <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{
                    backgroundColor: "#12422C",alignItems:"flex-end"
                }}
            >
                Aplicar
            </Button>
        </Box>
  
    );
  }