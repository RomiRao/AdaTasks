//import React from 'react'

import Submitform from "./Submitform";
import Showform from "./Showform"
import { Box } from "@mui/material";
import image from "../../../public/images/todo-title.png"

export default function FormsContainer() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: '50px'}}>
      <img style={{maxWidth: '450px', width: '90%'}} src={image} alt="title todo ilustration"/>
      <Submitform />
      <Showform />
    </Box>
  )
}
