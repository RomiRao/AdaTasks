//import React from 'react'

import Submitform from "./Submitform";
import Showform from "./Showform"
import { Box } from "@mui/material";
import image from "../../assets/images/todo-title.png"

export default function FormsContainer({setTasks, tasks, setFilter}) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: '50px'}}>
      <img style={{maxWidth: '450px', width: '100%'}} src={image} alt="title todo ilustration"/>
      <Submitform setTasks={setTasks} tasks={tasks}/>
      <Showform setTasks={setTasks} tasks={tasks}/>
    </Box>
  )
}
