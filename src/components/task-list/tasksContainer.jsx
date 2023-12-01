//import React from 'react'

import { Box, Container, Stack } from "@mui/material";
import Task from "./Task"
import TasksInfo from "./TasksInfo"
import image from "../../assets/images/chopper.png"

export default function TasksContainer({tasks}) {

  return (
    <Container sx={{bgcolor: '#FAF6F0', boxShadow: 2 , height: '100%', p: '20px', pt: '30px', borderRadius: '10px', width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Stack sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'scroll', height: '67%'}} spacing={1}>
        {tasks.map(task =>  (<Task task={task.task} category={task.category} complete={task.complete} />))}
      </Stack>
      <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '15px'}}>
        <TasksInfo />
        <img src={image} alt="chopper illustration" style={{width: '50%'}}/>
      </Box>
    </Container>
  )
}
