import CircleIcon from '@mui/icons-material/Circle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import React from 'react';
import { redTrees } from '../../data';
import { trees } from '/src/data.js';
import { useContainers } from '../../api/hooks/useContainers/useContainers';
import { useState, useEffect } from "react"

const colors = {
  LOW_CAPACITY: "#D32F2F",
  MEDIUM_CAPACITY: "#EF6C00",
  HIGH_CAPACITY: "#2E7D32"
}


const getColorPoint = (point) => {
  if (point.capacity > 75) {
    return colors.HIGH_CAPACITY
  } else if (point.capacity <= 25) {
    return colors.LOW_CAPACITY
  } else {
    return colors.MEDIUM_CAPACITY
  }
}


export default function HomeMainContent() {
  const position = { lat: -34.5893, lng: -58.3974 }
  const { getContainers: { getContainers: getContainers, isLoadingGetContainers } } = useContainers()
  const [containers, setContainers] = useState([])
  const apiKeyGoogleMaps = import.meta.env.VITE_REACT_APP_API_KEY_GOOGLE_MAPS;

  const formatContainers = (containers) => {
    console.log("🚀 ~ formatContainers ~ containers:", containers)
    return containers.documents.map(
      (container) => {
        return { ...container, lat: container.coordinates.lat, lng: container.coordinates.lng }
      }
    )
  }


  useEffect(() => {
    const retrieveContainers = async () => {
      const containersUnformated = await getContainers()
      const containersFormated = formatContainers(containersUnformated)

      setContainers(containersFormated)
    }

    try {
      retrieveContainers()
    } catch (e) {
      console.log(e)
    }
  }, [])

  useEffect(() => {
    console.log(containers)
  }, [containers])



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
        <Button width="177px" height="26px" font="button/large" fontFamily="Roboto" fontSize="15px" variant="contained" color="primary" size="large" sx={{ backgroundColor: "#12422C" }}>
          Generar Ruta Óptima
        </Button>
      </Box>
      <Box width="100%" height={'600px'} padding={"24px 32px 12px"}>
        <APIProvider
          apiKey={apiKeyGoogleMaps}
        >
          <Map
            defaultZoom={12}
            defaultCenter={position}
            mapId='658a52589c7a963'
          >
            <Markers trees={containers}></Markers>
          </Map>
        </APIProvider>
      </Box>
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
          <CircleIcon sx={{ color: colors.LOW_CAPACITY, mr: '16px' }}></CircleIcon>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "24px", color: "#000000" }}> +75%</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <CircleIcon sx={{ color: colors.MEDIUM_CAPACITY, mr: '16px' }}></CircleIcon>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "24px", color: "#000000" }}> 25% - 75%</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <CircleIcon sx={{ color: colors.HIGH_CAPACITY, mr: '16px' }}></CircleIcon>
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
        <AdvancedMarker position={p} key={p.lat + p.lng}>
          <div style={{ width: '50px', height: '20px' }}>
            <CircleIcon sx={{ color: getColorPoint(p) }}></CircleIcon>
          </div>
        </AdvancedMarker>
      ))
    }
  </>

}
