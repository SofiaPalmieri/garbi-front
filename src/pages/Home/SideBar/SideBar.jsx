import * as React from 'react';
import Box from '@mui/material/Box';
import TextFieldBox from './Utils/TextFieldBox';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SelectAreaBox from './Utils/SelectAreaBox';

export default function SideBar() {
  return (

    <Box fontFamily="Roboto" fontSize="20px" fontWeight="300" lineHeight="48px" letterSpacing="0.10000000149011612px" textAlign="left" >

      <Typography width="216px" height="48px" fontFamily="Roboto" fontSize="20px" fontWeight="300" lineHeight="48px" letterSpacing="0.10000000149011612px" textAlign="left" paddingLeft="15px" sx={{ color: "var(--text-secondary, #00000099)" }}>
        Filtros
      </Typography>

      <SelectAreaBox ></SelectAreaBox>

      <Box marginBottom="32px" >
        <Typography height="21px" fontFamily="Roboto" fontSize="14px" fontWeight="500" lineHeight="21px" letterSpacing="0.15000000596046448px" textAlign="left" sx={{ color: "var(--text-secondary, #00000099)" }}>
          Capacidad
        </Typography>
        <Box display="flex" gap="20px" paddingTop="8px" >
          <TextFieldBox text="Mínimo" ></TextFieldBox>
          <TextFieldBox text="Máximo" ></TextFieldBox>
        </Box>
      </Box>

      <Box marginBottom="32px" >
        <Typography height="21px" fontFamily="Roboto" fontSize="14px" fontWeight="500" lineHeight="21px" letterSpacing="0.15000000596046448px" textAlign="left" sx={{ color: "var(--text-secondary, #00000099)" }}>
          Nivel de batería</Typography>
        <Box display="flex" gap="20px" paddingTop="8px" >
          <TextFieldBox text="Mínimo" sx={{ width: "80px", height: "28px", top: "3120px", left: "16px", gap: "0px", opacity: "0px" }}></TextFieldBox>
          <TextFieldBox text="Máximo" sx={{ width: "80px", height: "28px", top: "318px", left: "116px", gap: "0px", opacity: "0px" }}></TextFieldBox>
        </Box>
      </Box>

    </Box>
  );
}