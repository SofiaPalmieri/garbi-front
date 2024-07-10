import {
  Box 
} from '@mui/material';
import {
  Outlet 
} from 'react-router-dom';
import {
  Header 
} from '../components/Header/Header';

const BaseWithHeader = (props) => {
  return (
    <Box>
      <Header
        logoOnly={props.logoOnly}
      />
      {/* todo: reveer height, por minHeight pero si lo cambio rompen los componentes, por ahora todo funciona OK */}
      <Box
        marginTop={'64px'}
        height={'calc(100vh - 64px)'}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default BaseWithHeader;
