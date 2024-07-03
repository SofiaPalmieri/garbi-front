import * as React from 'react';
import Box from '@mui/material/Box';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';
import HomeMainContent from './HomeMainContent';
import { FilterSideComponent } from '../../components/FilterSideComponent';

export default function HomePage() {


  return (
    // <div>
    //   <Box sx={{ overflowX: "hidden", width: "100%", overflow: "hidden", overflowY: "hidden" }}>
    //     <Content sx={{ overflowX: "hidden" }}>

    //     </Content>
    //     <MainContent sx={{ overflowX: "hidden", width: "100%" }}></MainContent>

    //     <Box width="216px" top="64px" gap="0px" opacity="0px" backgroundColor="#F5F5F5"
    //       sx={{ height: "100vh", position: "fixed", display: "flex", boxSizing: "border-box", overflowY: "auto", overflowX: "hidden" }}>
    //       <SideBar sx={{ overflowX: "hidden" }} />
    //     </Box>
    //   </Box>
    // </div>
    <FilterSideComponent title={"Mapa"} component={() => <HomeMainContent />} />
  );
}