import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Base = () => {
  return (
    <Box sx={{
        minWidth: '100vw',
        minHeight: '100vh'
    }}>
        <Outlet />
    </Box>
  )
}

export default Base