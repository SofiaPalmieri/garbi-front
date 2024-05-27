import * as React from 'react';
import Box from '@mui/material/Box';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';


export default function HomePage() {
 

  return (
    <div>
      <NavBar>
      </NavBar>
      <Box width="216px" height="800px" top="64px" gap="0px" opacity="0px" backgroundColor="#F5F5F5">

<SideBar />
</Box>
      </div>


  );
}

