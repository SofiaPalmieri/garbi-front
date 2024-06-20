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

    <Box width="100%" >
      <MapPage></MapPage>
      <Box sx={{ boxShadow: "0px 1px 5px 0px #0000001F", boxSizing: "border-box", paddingLeft: '300px', width: '85%', height: '50%', display: "flex", alignItems: "center", overFlowX: "hidden" }}>
        <Container sx={{
          position: 'fixed',
          bottom: 0,
          width: '60%',
          textAlign: 'center',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignItems: "flex-end",
          background: "#FFFFFF",
          boxShadow: "0px 2px 2px 0px #00000024",
          zIndex: "1"
        }}>
          <List sx={{ flexDirection: "row" }} spacing={2} >
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <ListItem>
                  <CircleIcon sx={{ color: "#D32F2F" }}></CircleIcon>
                  <Typography sx={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: "bold", lineHeight: "24px", letterSpacing: "0.46000000834465027px", textAlign: "left", color: "#000000" }}> +75%</Typography>
                </ListItem>
              </Grid>
              <Grid item>
                <ListItem>
                  <CircleIcon sx={{ color: "#EF6C00" }}></CircleIcon>
                  <Typography sx={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: "bold", lineHeight: "24px", letterSpacing: "0.46000000834465027px", textAlign: "left", color: "#000000" }}> 25% - 75%</Typography>
                </ListItem>
              </Grid>
              <Grid item>
                <ListItem>
                  <CircleIcon sx={{ color: "#2E7D32" }}></CircleIcon>
                  <Typography sx={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: "bold", lineHeight: "24px", letterSpacing: "0.46000000834465027px", textAlign: "left", color: "#000000" }}> 25%</Typography>        </ListItem>
              </Grid>
            </Grid>
          </List>
        </Container>
      </Box>

    </Box>


  );
}