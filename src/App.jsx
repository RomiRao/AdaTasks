import './App.css'
import { Container, Grid } from '@mui/material'
import FormsContainer from './components/forms/formsContainer'
import TasksContainer from './components/task-list/tasksContainer'

function App() {

  return (
    <Container >
      <Grid container pt={12}>
        <Grid item xs={12} md={6}>
          <FormsContainer />
        </Grid>
        <Grid item xs={12} md={6}>
        <TasksContainer />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
