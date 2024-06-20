import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'

const BaseWithHeader = ({logoOnly = false}) => {
  return (
    <Box>
      <Header logoOnly />
      <Box margin={'auto'} maxWidth={'90rem'} marginTop={'64px'} height={'calc(100vh - 64px)'}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default BaseWithHeader;