//import { useState } from "react";
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Fab } from "@mui/material";
import { useFormik } from 'formik';
import { IoMdAdd } from "react-icons/io";


export default function Submitform({setTasks, tasks}) {

  const formik = useFormik({
    initialValues: {
      task: "",
      category: "Not Urgent",
      complete: false,
      id: "",
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
      values.id = self.crypto.randomUUID();
      const tareas = JSON.parse(localStorage.getItem('Tasks'))
      setTasks([...tareas, values]);
      localStorage.setItem("Tasks", JSON.stringify([...tareas, values]));
      formik.resetForm()
    },

    
});


  const options = [{value: true, name: 'Urgent'} , {value: false, name: 'Not Urgent'}];

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
        <InputLabel id='category'>Category</InputLabel>
        <Select
          labelId="category"
          id="category"
          label="category"
          defaultValue="Not Urgent"
          value={formik.values.category}
          onChange={formik.handleChange}
          name="category"
        >
          {options.map(option => (
            <MenuItem key={option.name} value={option.value}>{option.name}</MenuItem>
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
