//import React from 'react'

import { Box, Container } from "@mui/material";
import Task from "./Task"
import TasksInfo from "./TasksInfo"
import image from "../../../public/images/chopper.png"

export default function TasksContainer() {
  return (
    <Container sx={{bgcolor: '#FAF6F0', height: '100%', p: '20px', borderRadius: '10px', width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Box>
        <Task />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <TasksInfo />
        <img src={image} alt="chopper illustration" style={{width: '50%'}}/>
      </Box>
    </Container>
  )
}
