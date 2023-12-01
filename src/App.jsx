import './index.css'
import { Container, Grid } from '@mui/material'
import FormsContainer from './components/forms/FormsContainer'
import TasksContainer from './components/task-list/TasksContainer'
import { useState } from 'react'

function App() {

  const [ tasks , setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])


  return (
    <Container >
      <Grid container pt={12}>
        <Grid item xs={12} md={6}>
          <FormsContainer setTasks={setTasks}/>
        </Grid>
        <Grid item xs={12} md={6}>
        <TasksContainer tasks={tasks}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
