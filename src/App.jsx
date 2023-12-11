import "./index.css";
import { Container, Grid, Box } from "@mui/material";
import TasksContainer from "./components/task-list/tasksContainer";
import { useState } from "react";
import Submitform from "./components/forms/submitform";
import Showform from "./components/forms/showform";
import image from "./assets/images/todo-title.png";

function App() {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("Tasks")) || [
            {
                task: "Watch One Piece",
                category: true,
                complete: false,
                id: "OnePiece",
            },
        ]
    );

    const [filter, setFilter] = useState({
        state: "All",
        category: "All",
    });

    return (
        <Container>
            <Grid
                container
                pt={{ xs: 0, sm: 7, md: 10 }}
                spacing={2}
                justifyContent="center"
            >
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            p: "50px",
                        }}
                    >
                        <img
                            style={{ maxWidth: "450px", width: "100%" }}
                            src={image}
                            alt="title todo ilustration"
                        />
                        <Submitform setTasks={setTasks} tasks={tasks} />
                        <Showform
                            setTasks={setTasks}
                            tasks={tasks}
                            setFilter={setFilter}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TasksContainer
                        setTasks={setTasks}
                        tasks={tasks}
                        filter={filter}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
