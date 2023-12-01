import { Typography,  IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillExclamationCircle } from "react-icons/ai";


export default function Task({task, category, complete}) {
  const [checked, setChecked] = useState(complete);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{bgcolor: '#ede3e3', py: '3px', px: '20px', borderRadius: '60px', width: '90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Typography>
        {task}
      </Typography>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        {category === "Important" && <AiFillExclamationCircle />}
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <IconButton aria-label="delete">
          <FaTrash fontSize="17px" />
        </IconButton>
      </Box>
    </Box>
  )
}
