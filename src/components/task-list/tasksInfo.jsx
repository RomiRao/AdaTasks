import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

export default function TasksInfo({ tasks }) {
    const tasksInfo = (info) => {
        let tasksInfo = 0;
        tasks.forEach((task) =>
            task.complete === info
                ? (tasksInfo = tasksInfo + 1)
                : (tasksInfo = tasksInfo + 0)
        );
        return tasksInfo;
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-end",
                width: "60%",
                mb: "10px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "space-around",
                    borderRadius: "3px",
                    p: "5px",
                    flexDirection: { xs: "column", sm: "row", md: "row" },
                }}
            >
                <Box
                    sx={{ display: "flex", alignItems: "center", color: "red" }}
                >
                    <RxCrossCircled />
                    <Typography component="span" ml={1}>
                        {tasksInfo(false)}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "green",
                    }}
                >
                    <MdOutlineCheckCircleOutline />
                    <Typography component="span" ml={1}>
                        {tasksInfo(true)}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
