//import { useState } from "react";
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Fab } from "@mui/material";
import { useFormik } from 'formik';
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

export default function Submitform() {

  const [tasks , setTasks] = useState([])

  const formik = useFormik({
    initialValues: {
      task: "",
      category: "",
      complete: false,
    },
    validate: values => {
        const errors = {};
        if(!values.task) {
            errors.task = 'Required';
        } else if (values.task.length < 4 || values.task.length > 15) {
            errors.task = "Must be between 4 and 15 characters"
        }
        return errors
    },
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    },

    
});


  const options = ['Not Important' , 'Important' , 'Urgent'];

  return (
    <Box component='form' onSubmit={formik.handleSubmit} p={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <FormControl  sx={{ m: 1, minWidth: 120 }} size="small">
        <TextField
          error={formik.errors.task ? true : false}
          label="Enter your task"
          id="task"
          size="small"
          onChange={formik.handleChange}
          value={formik.values.task} name="task" 
          helperText={formik.errors.task ? formik.errors.task : null}
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Category</InputLabel>
        <Select
          labelId="category"
          id="category"
          value={formik.values.category}
          label="Category"
          onChange={formik.handleChange}
          name="category"
        >
          {options.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', ml: '10px'}}>
      <Fab size="small" color="primary" aria-label="add" type="submit">
        <IoMdAdd />
      </Fab>
      </FormControl>
    </Box>
  )
}
