import { TextField } from "@mui/material"
import * as React from 'react';

export default function TextFieldBox(props) {

    return (
    
    
    <TextField sx={{width:"105px",height:"28px", padding:"0px 12px 0px 10px"}} InputLabelProps={{style:{fontFamily:"Roboto", fontSize:"13px", fontWeight:"300", lineHeight:"20px", letterSpacing:"0.15000000596046448px", textAlign:"center", color: "var(--text-disabled, #00000061)", display:"flex", justifyContent:"center", alignItems:"center", width:"48px", height:"20px"}}} label={props.text} variant="outlined" size="small" />
    
    
    
    )
    
    }