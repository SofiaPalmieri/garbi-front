import * as React from 'react';
import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function SelectAreaBox() {

  const [value, selectValue] = React.useState('');
  const listOfAreas = ["Área 1", "Área 2", "Área 3"]

  const handleChange = (event) => {
    selectValue(event.target.value);
  };

  return (
    <Box sx={{ width: "184px", height: "124px", padding: "0px 12px 0px 12px", display: "flex", justifyContent: "center", alignItems: "center" }}  >
      <FormControl size="medium" variant="outlined" state="Focused" fullWidth sx={{
        border: "1px", borderRadius: "6px", borderColor: "#12422C80", width: "Fixed (184px)px",

        height: "Hug (124px)px"
      }}>
        <InputLabel id="select-label" width="Fill (184px)px" height="Hug (56px)px" padding="0px 12px 0px 12px" gap="0px" border="2px 0px 0px 0px" opacity="0px" >Área</InputLabel>
        <Select
          labelId="select-label"
          id="select-demo"
          value={value}
          label="Área"
          gap="0px"
          opacity="0px"
          onChange={handleChange}
        >

          {listOfAreas.map((text) => (
            <MenuItem value={text} sx={{ color: "#000000DE" }}>{text} </MenuItem>
          ))}

        </Select>
      </FormControl>

    </Box>

  );

}