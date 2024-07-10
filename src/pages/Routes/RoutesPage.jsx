import RouteMainContent from './MainContent/RouteMainContent';
import {
  FilterSideComponent 
} from '../../components/FilterSideComponent';

export default function RoutesPage() {
  return (
    /*<div>
      <Box sx={{overflowX:"hidden", width:"100%", overflow:"hidden", overflowY:"hidden"}}>
      <NavBar>
      </NavBar>
      <RouteMainContent></RouteMainContent>

      <Box width="216px" top="64px" gap="0px" opacity="0px" backgroundColor="#F5F5F5" sx={{height:"100vh", position:"fixed", display:"flex", boxSizing:"border-box", overflowY:"auto", overflowX:"hidden"}}>
        <RoutesSideBar sx={{overflowX:"hidden"}} />
      </Box>      
      </Box>
      

      </div>
*/
    <FilterSideComponent
      title={'Recorridos'}
      component={() => <RouteMainContent />}
    />
  );
}
