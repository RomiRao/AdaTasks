import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

export default function TasksInfo({tasks}) {

  const tasksDone = () => {
    let tasksDone = 0;
    tasks.forEach(task =>  task.complete === true ? tasksDone = tasksDone + 1 : tasksDone = tasksDone + 0)
    return tasksDone
  }

  const tasksUnDone = () => {
    let tasksUnDone = 0;
    tasks.forEach(task =>  task.complete === false ? tasksUnDone = tasksUnDone + 1 : tasksUnDone = tasksUnDone + 0)
    return tasksUnDone
  }


  return (
  <Box sx={{display: 'flex', alignItems: 'flex-end', width: '60%', mb: '10px'}}>
    <Box sx={{display: 'flex', width: '40%', alignItems: 'center' , justifyContent: 'space-around', bgcolor: '#FAD6D9', borderRadius: '3px', p: '5px'}}>
      <Box>
        <RxCrossCircled />
        <Typography component='span' ml={1}>
        {tasksUnDone()}
        </Typography>
      </Box>
      <Box>
        <MdOutlineCheckCircleOutline />
        <Typography component='span' ml={1}>{tasksDone()}</Typography>
      </Box>
    </Box>
  </Box>
  )
}
