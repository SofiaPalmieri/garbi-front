import {
  useState 
} from 'react';
import {
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  styled 
} from '@mui/system';

const SmallKeyboardArrowDownIcon = (color) =>
  styled(KeyboardArrowDownIcon)(({
    _ 
  }) => ({
    fontSize: '16px',
    color: color + '!important',
  }));

const estados = {
  NUEVO: {
    color: '#EF6C0080',
    colorText: '#EF6C00',
    text: 'NUEVO',
  },

  'EN REVISION': {
    color: '#2196F380',
    colorText: '#2196F3',
    text: 'EN REVISIÓN',
  },

  RECHAZADO: {
    color: '#2E7D32',
    colorText: '#2E7D32',
    text: 'RECHAZADO',
  },

  RESUELTO: {
    color: '#2E7D32',
    colorText: '#2E7D32',
    text: 'RESUELTO',
  },
};

export const ReportStatusSelect = ({
  row, handleOpenModalReportResolved 
}) => {
  const [selectedValue, setSelectedValue] = useState(row.estado);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);

    if (newValue === estados.RECHAZADO.text) {
      handleOpenModalReportResolved(row.id, 'Cambiar a Rechazado');
    } else if (newValue === estados.RESUELTO.text) {
      handleOpenModalReportResolved(row.id, 'Cambiar a Resuelto');
    }
  };

  return (
    <FormControl
      size='small'
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '& .MuiOutlinedInput-root': {
          '& .MuiSvgIcon-root': {
            right: '20px',
          },
          '& fieldset': {
            borderColor: estados[selectedValue].color,
          },
          '&:hover fieldset': {
            borderColor: estados[selectedValue].color,
          },
          '&.Mui-focused fieldset': {
            borderColor: estados[selectedValue].color,
          },
        },
      }}
    >
      <Select
        value={selectedValue}
        onChange={handleChange}
        IconComponent={SmallKeyboardArrowDownIcon(estados[selectedValue].colorText)}
        sx={{
          height: '30px',
          color: estados[selectedValue].colorText,
          fontSize: '13px',
          fontWeight: 500,
          lineHeight: '22px',
        }}
      >
        <MenuItem 
          value='NUEVO'
          sx={{
            color: selectedValue === estados.NUEVO.text ? estados['NUEVO'].colorText : 'inherit',
          }}
        >
          NUEVO
        </MenuItem>
        <MenuItem
          value='EN REVISION'
          sx={{
            color: selectedValue === estados['EN REVISION'].text ? estados['EN REVISION'].colorText : 'inherit',
          }}
        >
          EN REVISIÓN
        </MenuItem>
        <MenuItem
          value='RECHAZADO'
          sx={{
            color: selectedValue === estados.RECHAZADO.text ? estados['RECHAZADO'].colorText : 'inherit',
          }}
        >
          RECHAZADO
        </MenuItem>
        <MenuItem
          value='RESUELTO'
          sx={{
            color: selectedValue === estados.RESUELTO.text ? estados['RESUELTO'].colorText : 'inherit',
          }}
        >
          RESUELTO
        </MenuItem>
      </Select>
    </FormControl>
  );
};