import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Content() {
    return (

        <Box width="100%" height="72px" top="64px" left="216px" sx={{ padding: "20px", marginLeft: "250px", overFlowX: "hidden" }} gap="0px" opacity="0px" flexDirection="column" display="flex">
            <Box width="684px" height="42px" padding="0px 32px 0px 32px" gap="0px" opacity="0px" >
                <Typography sx={{ fontStyle: "typography/h4", fontFamily: "Roboto", fontSize: "34px", fontWeight: "400px", lineHeight: "41.99px", letterSpacing: "0.25px", textAlign: "left", color: "#000000DE", widht: "596px", height: "42px", padding: "70px" }}>Mapa</Typography>
            </Box>
            <Box top="160px" left="80%" gap="12px" opacity="0px" sx={{ transform: "translateY(-50%)" }} position="absolute" alignItems="center" display="flex">
                <InfoOutlinedIcon sx={{ color: "#0000008F" }} widht="24px" height="24px" top="2px" left="2px" />
                <Button width="177px" height="26px" fontStyle="button/large" fontFamily="Roboto" fontSize="15px" fontWeight="500" lineHeight="26px" letterSpacing="0.46000000834465027px" textAlign="left" variant="contained" color="primary" size="large" sx={{ backgroundColor: "#12422C" }}>
                    Generar Ruta Óptima
                </Button>
            </Box>

        </Box>


    );
}