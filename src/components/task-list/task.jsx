import { Typography,  IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { FaTrash } from "react-icons/fa";


export default function Task() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{bgcolor: '#ede3e3', py: '3px', px: '20px', borderRadius: '60px', width: '90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Typography>
        Example task
      </Typography>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
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
