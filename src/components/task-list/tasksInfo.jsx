import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

export default function TasksInfo() {
  return (
  <Box sx={{display: 'flex', alignItems: 'flex-end', width: '60%', mb: '10px'}}>
    <Box sx={{display: 'flex', width: '40%', alignItems: 'center' , justifyContent: 'space-around', bgcolor: '#FAD6D9', borderRadius: '3px', p: '5px'}}>
      <Box>
        <RxCrossCircled />
        <Typography component='span' ml={1}>2</Typography>
      </Box>
      <Box>
        <MdOutlineCheckCircleOutline />
        <Typography component='span' ml={1}>0</Typography>
      </Box>
    </Box>
  </Box>
  )
}
