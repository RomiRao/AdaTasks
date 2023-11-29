//import React from 'react'

import { Box } from "@mui/material";
import Task from "./Task"
import TasksInfo from "./TasksInfo"

export default function TasksContainer() {
  return (
    <>
      <Box>
        <Task />
      </Box>
      <Box>
        <TasksInfo />
      </Box>
    </>
  )
}
