//import { useState } from "react";
import { Box, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useFormik } from 'formik';

export default function Submitform() {
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


  // const [selected, setSelected] = useState(options[0].value);

  // const handleChange = e => {
  //   setSelected(e.target.value);
  // };

  return (
    <Box component='form' onSubmit={formik.handleSubmit} p={3}>
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
          value={formik.category}
          label="Category"
          onChange={formik.handleChange}
        >
          {options.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
</FormControl>
    </Box>
  )
}
