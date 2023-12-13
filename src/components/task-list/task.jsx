import { Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { FaTrash } from "react-icons/fa";
import { AiFillExclamationCircle } from "react-icons/ai";

export default function Task({
    id,
    task,
    category,
    complete,
    setTasks,
    tasks,
}) {
    const handleChange = (event) => {
        const updatedTasks = tasks.map((t) =>
            t.id === id ? { ...t, complete: event.target.checked } : t
        );

        localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };

    const handleDelete = () => {
        const updatedTasks = tasks.filter((t) => t.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
    };

    return (
        <Box
            sx={{
                bgcolor: "#d5e7f2",
                py: "7px",
                px: "20px",
                borderRadius: "60px",
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row", md: "row" },
            }}
        >
            {complete ? (
                <Typography
                    sx={{ textDecoration: "line-through", color: "gray" }}
                >
                    {task}
                </Typography>
            ) : (
                <Typography color="#4E6AAC">{task}</Typography>
            )}
            <Box sx={{ display: "flex", alignItems: "center" }}>
                {category && <AiFillExclamationCircle color="red" />}
                <Checkbox
                    checked={complete}
                    onChange={(e) => handleChange(e)}
                    inputProps={{ "aria-label": "controlled" }}
                />
                <IconButton aria-label="delete" onClick={handleDelete}>
                    <FaTrash fontSize="17px" />
                </IconButton>
            </Box>
        </Box>
    );
}
