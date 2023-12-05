//import React from 'react'

import { Box, Container, Stack } from "@mui/material";
import Task from "./task"
import TasksInfo from "./TasksInfo"
import image from "../../assets/images/chopper.png"

export default function TasksContainer({tasks, setTasks}) {

  return (
    <Container sx={{bgcolor: '#FAF6F0', boxShadow: 2 , height: '100%', maxHeight: '550px', p: '20px', pt: '30px', borderRadius: '10px', width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Stack sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'scroll', height: '67%'}} spacing={1}>
        {tasks.map(task =>  (<Task key={task.id} id={task.id} setTasks={setTasks} task={task.task} category={task.category} complete={task.complete} tasks={tasks} />))}
      </Stack>
      <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '15px'}}>
        <TasksInfo tasks={tasks} />
        <img src={image} alt="chopper illustration" style={{width: '50%'}}/>
      </Box>
    </Container>
  )
}

