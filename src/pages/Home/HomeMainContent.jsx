import CircleIcon from '@mui/icons-material/Circle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import React from 'react';
import { redTrees } from '../../data';
import { trees } from '/src/data.js';

export default function HomeMainContent() {
  const position = { lat: 43.64, lng: -79.41 }

  return (
    <Box width="100%">
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
        marginTop: '24px',
        alignItems: 'center',
        gap: '11px',
        pr: '32px'
      }}>
        <InfoOutlinedIcon sx={{ color: "#0000008F" }} widht="24px" height="24px" top="2px" left="2px" />
        <Button width="177px" height="26px" fontStyle="button/large" fontFamily="Roboto" fontSize="15px" fontWeight="500" lineHeight="26px" letterSpacing="0.46000000834465027px" textAlign="left" variant="contained" color="primary" size="large" sx={{ backgroundColor: "#12422C" }}>
          Generar Ruta Óptima
        </Button>
      </Box>
      <Box width="100%" height={'600px'} padding={"24px 32px 12px"}>
        <APIProvider
          apiKey='AIzaSyChdsbPNc69MyOgPRQf8o2_5kMUFDx2zMM'
        >
          <Map defaultZoom={9} defaultCenter={position} mapId='658a52589c7a963'>
            <Markers trees={trees}></Markers>
            <RedMarkers redTrees={redTrees}></RedMarkers>
          </Map>
        </APIProvider>
      </Box>
      {/* <Box sx={{ boxShadow: "0px 1px 5px 0px #0000001F", boxSizing: "border-box", paddingLeft: '300px', width: '85%', height: '50%', display: "flex", alignItems: "center", overFlowX: "hidden" }}>
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
      </Box> */}
      <Paper
        elevation={6}
        sx={{
          margin: 'auto',
          marginBottom: '16px',
          width: 'fit-content',
          display: 'flex',
          padding: '9px 16px',
          gap: '32px',

          position: 'fixed',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <CircleIcon sx={{ color: "#D32F2F", mr: '16px' }}></CircleIcon>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "24px", color: "#000000" }}> +75%</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <CircleIcon sx={{ color: "#EF6C00", mr: '16px' }}></CircleIcon>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "24px", color: "#000000" }}> 25% - 75%</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <CircleIcon sx={{ color: "#2E7D32", mr: '16px' }}></CircleIcon>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "24px", color: "#000000" }}> -25%</Typography>
        </Box>
      </Paper>
    </Box>
  );
}

function Markers(props) {
  const { trees } = props

  return <>
    {
      trees.map(p => (
        <AdvancedMarker position={p} key={p.key}>
          <div style={{ width: '50px', height: '20px' }}>
            <CircleIcon sx={{ color: "#EF6C00" }}></CircleIcon>
          </div>
        </AdvancedMarker>
      ))
    }
  </>

}

function RedMarkers(props) {
  const { redTrees } = props

  return <>
    {
      redTrees.map(p => (
        <AdvancedMarker position={p} key={p.key}>
          <div style={{ width: '50px', height: '20px' }}>
            <CircleIcon sx={{ color: "#D32F2F" }}></CircleIcon>
          </div>
        </AdvancedMarker>
      ))
    }
  </>

}
