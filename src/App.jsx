import './index.css'
import { Container, Grid } from '@mui/material'
import FormsContainer from './components/forms/formsContainer'
import TasksContainer from './components/task-list/tasksContainer'
import { useState } from 'react'

function App() {

  const [ tasks , setTasks] = useState(JSON.parse(localStorage.getItem('Tasks')) || [ 
    {task: "Watch One Piece", category: true, complete: false, id: "OnePiece"}])

  const [filter, setFilter] = useState({
    state: 'All',
    category: 'All',
  });


  return (
    <Container >
      <Grid container pt={{ xs: 0, sm: 7, md: 10 }} spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <FormsContainer setTasks={setTasks} setFilter={setFilter} tasks={tasks} filter={filter}/>
        </Grid>
        <Grid item xs={12} md={6}>
        <TasksContainer setTasks={setTasks} tasks={tasks} filter={filter}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
