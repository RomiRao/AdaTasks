//import React from 'react'
import { useState } from "react";

import { Box, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function Submitform() {

  const [input, setInput] = useState({
    task: "",
    category: "",
    complete: false,
  });

  const options = [
    {value: 'Not Important', text: 'Not Important'},
    {value: 'Important', text: 'Important'},
    {value: 'Urgent', text: 'Urgent'},
  ];


  const [selected, setSelected] = useState(options[0].value);

  const handleChange = e => {
    setSelected(e.target.value);
  };

  return (
    <Box component='form'>
    <FormControl  sx={{ m: 1, minWidth: 120 }} size="small">
    <TextField
          label="Enter your task"
          id="outlined-size-small"
          size="small"
        />
    </FormControl>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Category</InputLabel>
        <Select
          labelId="category"
          id="category"
          value={selected}
          label="Category"
          onChange={handleChange}
        >
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
          ))}
        </Select>
</FormControl>
    </Box>
  )
}
