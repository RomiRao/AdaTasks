import { useState } from "react";
import { Box, InputLabel, MenuItem, Select, Typography, FormControl } from "@mui/material"

export default function Showform() {

  const options = ['All', 'Not Important' , 'Important' , 'Urgent'];

  const [input, setInput] = useState({
    state: "All",
    category: "All",
  });

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setInput({
      [name]: value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  }
  return (
    <Box>
    <Typography variant="h6">
        Filter by
      </Typography>
    <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="state">State</InputLabel>
        <Select
          labelId="state"
          id="state"
          //value={input.state}
          label="State"
          //onChange={(e) => handleChange(e)}
        >
          <MenuItem>All</MenuItem>
          <MenuItem>Complete</MenuItem>
          <MenuItem>Uncomplete</MenuItem>
        </Select>
</FormControl>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          id="category"
          //value={formik.category}
          label="Category"
          //onChange={formik.handleChange}
        >
          {options.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
</FormControl>
    </ Box>
    </Box>
  )
}
