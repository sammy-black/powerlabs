import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import { Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import useResponsive from "../hooks/useResponsive";
import MobileNav from "./MobileNav";
import { useTheme } from "@emotion/react";

const AppLayout = () => {
  const isDesktop = useResponsive("up", "md");
  const theme = useTheme();

  return (
    <Stack
      width={"100%"}
      height={"100vh"}
      direction={isDesktop ? "row" : "column"}
    >
      {isDesktop ? <Sidebar /> : <MobileNav />}

      <Stack
        flexGrow={1}
        pt={3}
        px={"20px"}
        backgroundColor={
          theme.palette.mode === "light"
            ? "#f0f4fa"
            : theme.palette.background.paper
        }
        boxShadow={"0px 0px 2px rgba(0,0,0, 0.25)"}
      >
        {isDesktop && <Topbar />}
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default AppLayout;
