import {
  Alert,
  Slide,
  Snackbar,
} from '@mui/material'

function SlideTransition(props) {
  return <Slide
    {...props}
    direction='down'
  />
}

export const FeedbackSnackbar = ({
  severity, text, openSnackbar, handleClose
}) => {
  return (
    <Snackbar 
      open={openSnackbar}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center' 
      }}
      TransitionComponent={SlideTransition}
      sx={{ 
        mt: '128px'
      }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant='filled'
        sx={{ 
          width: '100%', 
          fontSize: '16px',
        }}
      >
        {text}
      </Alert>
    </Snackbar>
  )
}
