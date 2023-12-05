import { useState } from "react";
import { Box, InputLabel, MenuItem, Select, Typography, FormControl } from "@mui/material"

export default function Showform({setTasks}) {

  const categories = [{value: 'All', name: 'All'}, {value: 'true', name: 'Urgent'} , {value: 'false', name: 'Not Urgent'}];
  const states = [{value: 'All', name: 'All'}, {value: 'true', name: 'Done'} , {value: 'false', name: 'Undone'}];
  
  const [input, setInput] = useState({
    state: 'All',
    category: 'All',
  });

  const handleChangeComplete = (e) => {
    const { value, name } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setTasks(() => {
      const filteredTasks = JSON.parse(localStorage.getItem("Tasks")).filter((task) => {
        return (value === "true" || value === "false") ?
          (String(task.complete) === value && (input.category === 'All' || String(task.category) === input.category)) :
          (input.category === 'All' || String(task.category) === input.category);
      });
    
      return filteredTasks;
    });
  };

  const handleChangeUrgent = (e) => {
    const { value, name } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setTasks(() => {
      const filteredTasks = JSON.parse(localStorage.getItem("Tasks")).filter((task) => {
        return (value === "true" || value === "false") ?
          (String(task.category) === value && (input.state === 'All' || String(task.complete) === input.state)) :
          (input.state === 'All' || String(task.complete) === input.state);
      });
    
      return filteredTasks;
    });
    
  };

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
          value={input.state}
          label='state'
          onChange={(e) => handleChangeComplete(e)}
          name="state"
        >
{states.map(option => (
            <MenuItem key={option.name} value={option.value}>{option.name}</MenuItem>
          ))}
        </Select>
</FormControl>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          id="category"
          value={input.category}
          label="Category"
          onChange={(e) => handleChangeUrgent(e)}
          name="category"
        >
          {categories.map(option => (
            <MenuItem key={option.name} value={option.value}>{option.name}</MenuItem>
          ))}
        </Select>
</FormControl>
    </ Box>
    </Box>
  )
}
