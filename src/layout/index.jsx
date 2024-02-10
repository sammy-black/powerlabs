import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import { Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import useResponsive from "../hooks/useResponsive";
import MobileNav from "./MobileNav";

const AppLayout = () => {
  const isDesktop = useResponsive("up", "md");


  return (
    <Stack
      width={"100%"}
      height={"100vh"}
      direction={isDesktop ? "row" : "column"}
    >
      {isDesktop ? <Sidebar /> : <MobileNav />}

      <Stack flexGrow={1} p={2}>
       {isDesktop && <Topbar />}
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default AppLayout;
