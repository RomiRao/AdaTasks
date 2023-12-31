import {
    Box,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Fab,
} from "@mui/material";
import { useFormik } from "formik";
import { IoMdAdd } from "react-icons/io";

const options = [
    { value: true, name: "Urgent" },
    { value: false, name: "Not Urgent" },
];

export default function Submitform({ setTasks, tasks }) {
    const formik = useFormik({
        initialValues: {
            task: "",
            category: false,
            complete: false,
            id: "",
        },
        validate: (values) => {
            const errors = {};
            if (!values.task) {
                errors.task = "Required";
            } else if (values.task.length < 4 || values.task.length > 15) {
                errors.task = "Must be 4 - 15 characters";
            }
            return errors;
        },
        onSubmit: (values) => {
            values.id = self.crypto.randomUUID();
            setTasks([...tasks, values]);
            localStorage.setItem("Tasks", JSON.stringify([...tasks, values]));
            formik.resetForm();
        },
    });

    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
                m: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: { xs: "center", sm: "start" },
                flexDirection: { xs: "column", sm: "row", md: "row" },
            }}
        >
            <FormControl sx={{ m: 1, width: { xs: "100%" } }} size="medium">
                <TextField
                    error={formik.errors.task ? true : false}
                    label="Enter your task"
                    id="task"
                    size="small"
                    onChange={formik.handleChange}
                    value={formik.values.task}
                    name="task"
                    helperText={formik.errors.task ? formik.errors.task : null}
                />
            </FormControl>
            <FormControl
                sx={{ m: 1, width: { xs: "100%", sm: 250 } }}
                size="small"
            >
                <InputLabel id="category">Category</InputLabel>
                <Select
                    labelId="category"
                    id="category"
                    label="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    name="category"
                >
                    {options.map((option) => (
                        <MenuItem key={option.name} value={option.value}>
                            {option.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    ml: { xs: 0, sm: "10px" },
                    mt: 1,
                }}
            >
                <Fab
                    size="small"
                    color="primary"
                    aria-label="add"
                    type="submit"
                >
                    <IoMdAdd />
                </Fab>
            </FormControl>
        </Box>
    );
}
