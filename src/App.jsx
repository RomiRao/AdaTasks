import './App.css'
import { Container } from '@mui/material'
import FormsContainer from './components/forms/formsContainer'
import TasksContainer from './components/task-list/tasksContainer'

function App() {

  return (
    <Container>
      <FormsContainer />
      <TasksContainer />
    </Container>
  )
}

export default App
