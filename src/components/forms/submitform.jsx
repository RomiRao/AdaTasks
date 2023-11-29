//import React from 'react'
import { useState } from "react";

import { Box, TextField, Select, MenuItem } from "@mui/material";

export default function Submitform() {

  const options = [
    {value: 'Not Important', text: 'Not Important'},
    {value: 'Important', text: 'Important'},
    {value: 'Urgent', text: 'Urgent'},
  ];


  const [selected, setSelected] = useState(options[0].value);

  const handleChange = e => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };

  return (
    <Box component='form'>
    <TextField
          label="Enter your task"
          id="outlined-size-small"
          size="small"
        />
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

    </Box>
  )
}
