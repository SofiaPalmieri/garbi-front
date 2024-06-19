import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import MapPage from "../../Map/MapPage";
import CircleIcon from '@mui/icons-material/Circle';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";

export default function MainContent() {
    return (
  
        <Box width="100%" top="226px" left="248px"  >
            <MapPage sx={{
       position: 'fixed',
       bottom: 0,
       width: '100%',
       textAlign: 'center',
       paddingRight: '5px',
       boxSizing: 'border-box',
       display: 'flex',
       justifyContent: 'center',
       alignContent:"center"}}></MapPage>
            <Box sx={{boxShadow:"0px 3px 1px -2px #00000033", boxShadow:"0px 2px 2px 0px #00000024", boxShadow:"0px 1px 5px 0px #0000001F", boxSizing:"border-box", paddingLeft: '350px', paddingRight:"100px", paddingBottom:'5px', paddingTop:"70px", width: '80%', height: '80%', display:"flex", alignItems:"center" }}>
                 <Container sx={{
       position: 'fixed',
       bottom: 0,
       width: '50%',
       textAlign: 'center',
       boxSizing: 'border-box',
       display: 'flex',
       justifyContent: 'center',
       alignItems:"flex-end",
       background:"#FFFFFF",
       boxShadow:"0px 2px 2px 0px #00000024",
       zIndex: "1"}}>
            <List  sx={{flexDirection:"row"}} spacing={2} >
            <Grid container direction="row" spacing={2}>
        <Grid item>
          <ListItem>
            <CircleIcon sx={{color:"#D32F2F"}}></CircleIcon>
            <Typography sx={{fontFamily:"Roboto", fontSize:"16px", fontWeight:"bold", lineHeight:"24px", letterSpacing:"0.46000000834465027px", textAlign:"left", color:"#000000"}}> +75%</Typography>   
          </ListItem>
        </Grid>
        <Grid item>
          <ListItem>
          <CircleIcon sx={{color:"#EF6C00"}}></CircleIcon>
          <Typography sx={{fontFamily:"Roboto", fontSize:"16px", fontWeight:"bold", lineHeight:"24px", letterSpacing:"0.46000000834465027px", textAlign:"left", color:"#000000"}}> 25% - 75%</Typography>   
          </ListItem>
        </Grid>
        <Grid item>
          <ListItem>
          <CircleIcon sx={{color:"#2E7D32"}}></CircleIcon>
            <Typography sx={{fontFamily:"Roboto", fontSize:"16px", fontWeight:"bold", lineHeight:"24px", letterSpacing:"0.46000000834465027px", textAlign:"left", color:"#000000"}}> 25%</Typography>        </ListItem>
        </Grid>
      </Grid>
      </List>
            </Container>
            </Box>
           
        </Box>
  
  
    );
  }