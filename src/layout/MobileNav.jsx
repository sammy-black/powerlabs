/* eslint-disable react/prop-types */
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { Bell, List, Moon, Sun, X } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../data";
import { blueLogo, david } from "../assets/images";
import { useTheme } from "@emotion/react";
import { ColorModeContext, tokens } from "../theme";

const MobileNav = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const pathUrl = window.location.pathname;

  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          maxHeight: "70px",
        }}
      >
        <Stack
          sx={{ padding: "3vw 5vw", boxSizing: "border-box" }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
            <img
              src={blueLogo}
              style={{ height: "25px", width: "25px", objectFit: "contain" }}
            />
          </IconButton>

          <Stack direction={"row"} spacing={1}>
            <Stack direction={"row"}>
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <Moon size={16} />
                ) : (
                  <Sun size={16} />
                )}
              </IconButton>
              <IconButton>
                <Bell size={16} />
              </IconButton>
            </Stack>
            <IconButton sx={{ width: "max-content" }}>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Avatar
                  src={david}
                  sx={{ width: 20, height: 20, objectFit: "cover" }}
                />
              </Stack>
            </IconButton>
          </Stack>
        </Stack>
      </Box>

      {/* Sidebar  */}
      {openSidebar && (
        <MobileSideBar
          pathUrl={pathUrl}
          toggleSidebar={() => setOpenSidebar(!openSidebar)}
          colors={colors}
        />
      )}
    </>
  );
};

export default MobileNav;

const MobileSideBar = ({ toggleSidebar, pathUrl, colors }) => {
  const navigate = useNavigate();

  const handleOnclick = (url) => {
    toggleSidebar();
    navigate(url);
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[400],
        height: "100%",
        position: "absolute",
        width: 243,
        zIndex: 2000,
        color: "white",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        sx={{ width: "100%" }}
      >
        <IconButton onClick={toggleSidebar}>
          <X size={24} color="red" />
        </IconButton>
      </Stack>
      <Stack
        alignItems={"center"}
        direction={"column"}
        sx={{ width: "max-content", maxWidth: "100%", maxHeight: "100%" }}
        spacing={3}
        padding={3}
      >
        <Stack spacing={2.5} paddingBottom={2}>
          {menuItems.map((el) =>
            el.url === pathUrl ? (
              <Stack
                key={el.id}
                direction="row"
                alignItems="center"
                spacing={3.75}
                sx={{ width: "100%", color: "#FDB73D", cursor: "pointer" }}
              >
                {el.icon}
                <Typography sx={{ fontSize: "14px" }}>{el.title}</Typography>
              </Stack>
            ) : (
              <Stack
                key={el.title}
                direction="row"
                alignItems="center"
                spacing={3.75}
                sx={{ width: "100%", cursor: "pointer" }}
                onClick={() => handleOnclick(el.url)}
              >
                {el.icon}
                <Typography sx={{ fontSize: "14px" }}>{el.title}</Typography>
              </Stack>
            )
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
