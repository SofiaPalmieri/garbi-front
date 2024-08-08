import {
  Box, Button, Paper 
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';



export const RightSidePanel = ({
  componentToRender, handleClose, disablePadding = false
}) => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: '320px',
        height: 'calc(100% - 28px)',
        backgroundColor: 'white',
        position: 'absolute',
        top: '26px',
        right: '34px',
      }}
    >
      <Box
        position='relative'
        sx={{
          padding: disablePadding ? '0' : '24px 40px',
          height: '100%'
        }}
      >
        <Button
          sx={{
            padding: 0,
            minWidth: 0,
            borderRadius: '50%',
            position: 'absolute',
            right: '8px',
            top: '8px',
          }}
          onClick={handleClose}
        >
          <CloseIcon
            sx={{
              color: 'black',
            }}
          />
        </Button>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {componentToRender}
        </Box>
      </Box>
    </Paper>
  )
}
