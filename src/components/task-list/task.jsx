import { Typography,  IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillExclamationCircle } from "react-icons/ai";


export default function Task({id, task, category, complete, setTasks, tasks}) {
  const [checked, setChecked] = useState(complete);

  const handleChange = (event) => {
    const newChecked = event.target.checked
    setChecked(newChecked);
      const updatedTasks = tasks.map((t) =>
        t.id === id ? { ...t, complete: newChecked } : t
      );
      
      localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
  };

  const handleDelete = () => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  };

  return (
    <Box sx={{bgcolor: '#ede3e3', py: '3px', px: '20px', borderRadius: '60px', width: '90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      {complete? <Typography sx={{textDecoration: 'line-through', color: 'gray'}}>{task}</Typography> : <Typography>{task}</Typography> }
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        {category === "Urgent" && <AiFillExclamationCircle color='red' />}
        <Checkbox
          checked={checked}
          onChange={(e) => handleChange(e)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <IconButton aria-label="delete" onClick={handleDelete}>
          <FaTrash fontSize="17px" />
        </IconButton>
      </Box>
    </Box>
  )
}
