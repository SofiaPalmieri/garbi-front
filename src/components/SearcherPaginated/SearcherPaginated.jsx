import {
  Box, Button 
} from '@mui/material'
import {
  Searcher 
} from '../Searcher/Searcher'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import {
  DatePickerCustom
} from '../DatePickerCustom';
import {
  DateRangePicker 
} from '../DateRangePicker';

export const SearcherPaginated = ({
  prevFetch, nextFetch, disabledPrevBtn, disabledNextBtn, 
  placeholderInput = 'Buscar por ID, Título', inputWidth, 
  button, datePicker, buttonText, onClick,
  selectedElement, handleOpenModifyElementModal, handleOpenDeleteElementModal
}) => {
  return (
    <Box
      sx={{
        height: '4.5rem',
        width: 1,
        padding: '1rem 0rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Searcher
        placeholderInput={placeholderInput}
        inputWidth={inputWidth}
      />
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <Box
          sx={{
            mr: 2,
            '& .MuiButtonBase-root': {
              minWidth: 'unset'
            }
          }}
        >
          <Button
            disabled={disabledPrevBtn}
            onClick={prevFetch}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            disabled={disabledNextBtn}
            onClick={nextFetch}
          >
            <ChevronRightIcon />
          </Button>
        </Box>

        {button ? (
          <Box>
            <Button
              variant='outlined'
              disabled={!selectedElement}
              onClick={() => handleOpenDeleteElementModal(selectedElement)}
            >
              Eliminar
            </Button>
            <Button
              variant='outlined'
              disabled={!selectedElement}
              onClick={() => handleOpenModifyElementModal(selectedElement)}
            >
              Editar
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
              onClick={onClick}
            >
              {buttonText}
              <AddIcon
                sx={{
                  marginLeft: '8px',
                  fontSize: '20px',
                }}
              />
            </Button>
          </Box>
        ) : (
          datePicker ? <DatePickerCustom /> : <DateRangePicker />
        )}
      </Box>
    </Box>
  )
}
