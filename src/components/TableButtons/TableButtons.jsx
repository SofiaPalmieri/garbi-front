import {
  Box,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const TableButtons = ({
  selectedElement, handleOpenDeleteElementModal, handleOpenModifyElementModal, handleOpenCreateElementModal, mainButtonText
}) => {
  return (
    <Box>
      <Button
        variant='outlined'
        disabled={!selectedElement}
        onClick={() => handleOpenDeleteElementModal(selectedElement)}
        sx={{ 
          marginRight: '8px',
        }}
      >
        Eliminar
        <DeleteIcon
          sx={{
            marginLeft: '8px',
            fontSize: '18px',
          }}
        />
      </Button>
      <Button
        variant='outlined'
        disabled={!selectedElement}
        onClick={() => handleOpenModifyElementModal(selectedElement)}
        sx={{
          marginRight: '16px' 
        }}
      >
        Editar
        <EditIcon
          sx={{
            marginLeft: '8px',
            fontSize: '18px',
          }}
        />
      </Button>

      <Button
        size='medium'
        sx={{
          backgroundColor: '#12422C',
          color: 'white',
          height: '36px',
          width: '202px',
          '&:hover': {
            backgroundColor: '#12422C',
          },
        }}
        onClick={handleOpenCreateElementModal}
      >
        {mainButtonText}
        <AddIcon
          sx={{
            marginLeft: '8px',
            fontSize: '20px',
          }}
        />
      </Button>
    </Box>
  )
}
