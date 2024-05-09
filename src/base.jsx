import { Box } from '@mui/material'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Base = () => {
  return (
    <Box sx={{
        minWidth: '100vw',
        minHeight: '100vh'
    }}>
        <Outlet />
        <Navigate to ='/home' />
    </Box>
  )
}

export default Base