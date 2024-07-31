import {
  FormControl, InputLabel, MenuItem, Select, Box 
} from '@mui/material';
import * as React from 'react';

export default function ContainerFilters(){

  const [value, selectValue] = React.useState('');
  const barrios = [
    'Agronomía',
    'Almagro',
    'Balvanera',
    'Barracas',
    'Belgrano',
    'Boedo',
    'Caballito',
    'Chacarita',
    'Coghlan',
    'Colegiales',
    'Constitución',
    'Flores',
    'Floresta',
    'La Boca',
    'La Paternal',
    'Liniers',
    'Mataderos',
    'Monserrat',
    'Monte Castro',
    'Nueva Pompeya',
    'Núñez',
    'Palermo',
    'Parque Avellaneda',
    'Parque Chacabuco',
    'Parque Chas',
    'Parque Patricios',
    'Puerto Madero',
    'Recoleta',
    'Retiro',
    'Saavedra',
    'San Cristóbal',
    'San Nicolás',
    'San Telmo',
    'Vélez Sársfield',
    'Versalles',
    'Villa Crespo',
    'Villa del Parque',
    'Villa Devoto',
    'Villa General Mitre',
    'Villa Lugano',
    'Villa Luro',
    'Villa Ortúzar',
    'Villa Pueyrredón',
    'Villa Real',
    'Villa Riachuelo',
    'Villa Santa Rita',
    'Villa Soldati',
    'Villa Urquiza'
  ];

  const tipoDeCarga = ['Lateral', 'Bilateral'];
  
  const handleChange = (event) => {
    selectValue(event.target.value);
  };

    
  return (
    <Box>
      <Box
        mb={3}
      >
        <FormControl
          size='medium'
          variant='outlined'
          fullWidth
        >
          <InputLabel
            id='select-label'
          >Barrio</InputLabel>
          <Select
            labelId='select-label'
            id='select-demo'
            value={value}
            label='Barrio'
            onChange={handleChange}
          >
            {barrios.map((barrio) => (
              <MenuItem
                key={barrio}
                value={barrio}
              >
                {barrio}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        mb={3}
      >
        <FormControl
          size='medium'
          variant='outlined'
          fullWidth
        >
          <InputLabel
            id='select-label'
          >Tipo de carga</InputLabel>
          <Select
            labelId='select-label'
            id='select-demo'
            value={value}
            label='tipoDeCarga'
            onChange={handleChange}
          >
            {tipoDeCarga.map((tipoDeCarga) => (
              <MenuItem
                key={tipoDeCarga}
                value={tipoDeCarga}
              >
                {tipoDeCarga}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
        
    </Box>
    
        
  )
}