import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";

export default function Task() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{bgcolor: '#D9D9D9', p: '10px', borderRadius: '10px', width: '90%', display: 'flex', justifyContent: 'space-between'}}>
      <Typography>
        Example task
      </Typography>
      <Box>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <FaTrash/>
      </Box>
    </Box>
  )
}
