import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import { Box, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import useResponsive from "../hooks/useResponsive";
import MobileNav from "./MobileNav";
import { useTheme } from "@emotion/react";
import Notification from "../components/Notification";
import { useState } from "react";

const AppLayout = () => {
  const isDesktop = useResponsive("up", "md");
  const theme = useTheme();
  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        direction={isDesktop ? "row" : "column"}
      >
        {isDesktop ? <Sidebar /> : <MobileNav   handleNotification={() => setShowNotification(!showNotification)} />}

        <Stack
          flexGrow={1}
          backgroundColor={
            theme.palette.mode === "light" ? "#f0f4fa" : "#0F1824"
          }
          boxShadow={"0px 0px 2px rgba(0,0,0, 0.25)"}
        >
          {isDesktop && (
            <Topbar
              handleNotification={() => setShowNotification(!showNotification)}
            />
          )}
          <Box
            sx={{
              overflowY: "scroll",
              height: "100%",
              paddingBottom: "3.5rem",
            }}
          >
            <Outlet />
          </Box>
        </Stack>
      </Stack>
      {showNotification && <Notification  isDesktop={isDesktop} />}
    </>
  );
};

export default AppLayout;
