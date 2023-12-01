import './index.css'
import { Container, Grid } from '@mui/material'
import FormsContainer from './components/forms/FormsContainer'
import TasksContainer from './components/task-list/TasksContainer'
import { useState } from 'react'
import db from "../firestore.config";
import { getDocs, collection } from "firebase/firestore"; 

function App() {

  const [ tasks , setTasks] = useState()

  window.addEventListener("load", async () => {
    let data = [];
    const docs = await getDocs(collection(db, 'Tasks'));
    docs.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setTasks(data);
  });

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
