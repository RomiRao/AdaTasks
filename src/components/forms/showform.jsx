import { useState } from "react";
import {
    Box,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    FormControl,
} from "@mui/material";

const categories = [
    { value: "All", name: "All" },
    { value: true, name: "Urgent" },
    { value: false, name: "Not Urgent" },
];
const states = [
    { value: "All", name: "All" },
    { value: true, name: "Done" },
    { value: false, name: "Undone" },
];

export default function Showform({ setFilter }) {
    const [input, setInput] = useState({
        state: "All",
        category: "All",
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
        setFilter((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    return (
        <Box>
            <Typography variant="h6">Filter by</Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: { xs: "column", sm: "row", md: "row" },
                    width: { xs: "100%" },
                }}
            >
                <FormControl
                    sx={{ m: 1, width: { xs: "100%", sm: 130 } }}
                    size="small"
                >
                    <InputLabel id="state">State</InputLabel>
                    <Select
                        labelId="state"
                        id="state"
                        value={input.state}
                        label="state"
                        onChange={(e) => handleChange(e)}
                        name="state"
                    >
                        {states.map((option) => (
                            <MenuItem key={option.name} value={option.value}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl
                    sx={{ m: 1, width: { xs: "100%", sm: 130 } }}
                    size="small"
                >
                    <InputLabel id="category">Category</InputLabel>
                    <Select
                        labelId="category"
                        id="category"
                        value={input.category}
                        label="Category"
                        onChange={(e) => handleChange(e)}
                        name="category"
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.name} value={option.value}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
}
