/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material";
import NotificationCard from "./NotificationCard";
import useResponsive from "../../hooks/useResponsive";


const data = [
  {
    desc: "There's currently power in most houses in the area",
    status: "power",
    location: "Lekki Phase 1",
  },
  {
    desc: "Expect a power outage in this area within an hour.",
    status: "noPower",
    location: "Egbeda",
  },
  {
    desc: "Most areas in this location do not have power.",
    status: "noPower",
    location: "Ikoyi",
  },
  {
    desc: "Expecting a power outrage in this area within an hour.",
    status: "outrage",
    location: "Obalende",
  },
];

const Notification = () => {
  const theme = useTheme();
  const isMobile = useResponsive("down", "sm");


  return (
    <Box
      sx={{
        boxSizing: "border-box",
        position: "absolute",
        top: "4.5rem",
        right: "5vw",
        backgroundColor: theme.palette.background.paper,
        width: isMobile ? "15rem" : "20rem",
        borderRadius: "0.375rem",
        zIndex: 2000,
        height: 400,
        py: "1rem",
        overflowY: "scroll",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Typography px={"1rem"} variant="h4">Notifications</Typography>
      <Box mt={"20px"}>
        <Stack>
          {data.map((el) => (
            <NotificationCard key={el.desc} item={el} theme={theme} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Notification;


