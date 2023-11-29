
import { InputLabel, MenuItem, Select, Typography, FormControl } from "@mui/material"

export default function Showform() {

  const options = ['Not Important' , 'Important' , 'Urgent'];

  return (
    <>
      <Typography variant="h5">
        Filter by
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Category</InputLabel>
        <Select
          labelId="state"
          id="state"
          //value={formik.category}
          label="State"
          //onChange={formik.handleChange}
        >
          <MenuItem>All</MenuItem>
          <MenuItem>Complete</MenuItem>
          <MenuItem>Uncomplete</MenuItem>
        </Select>
</FormControl>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Category</InputLabel>
        <Select
          labelId="category"
          id="category"
          //value={formik.category}
          label="Category"
          //onChange={formik.handleChange}
        >
          {options.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
</FormControl>
    </>
  )
}
