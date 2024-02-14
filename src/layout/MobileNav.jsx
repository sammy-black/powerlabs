/* eslint-disable react/prop-types */
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Bell, Moon, Sun, X } from "@phosphor-icons/react";
import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuItems } from "../data";
import { blueLogo } from "../assets/images";
import { useTheme } from "@emotion/react";
import ProfileMenu from "./ProfileMenu";
import useSettings from "../hooks/useSettings";


const MobileNav = ({handleNotification}) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const theme = useTheme();
  const { onToggleMode } = useSettings();

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
              <IconButton onClick={onToggleMode}>
                {theme.palette.mode === "dark" ? (
                  <Sun size={16} />
                ) : (
                  <Moon size={16} />
                )}
              </IconButton>
              <IconButton onClick={handleNotification} >
                <Bell size={16} />
              </IconButton>
            </Stack>
            <ProfileMenu isMobile={true} />
          </Stack>
        </Stack>
      </Box>

      {/* Sidebar  */}
      {openSidebar && (
        <MobileSideBar
          pathUrl={pathUrl}
          toggleSidebar={() => setOpenSidebar(!openSidebar)}
          // colors={colors}
        />
      )}
    </>
  );
};

export default MobileNav;

const MobileSideBar = ({ toggleSidebar, pathUrl, colors }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleOnclick = (url) => {
    toggleSidebar();
    navigate(url);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
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
          {MenuItems.map((el) =>
            el.url === pathUrl ? (
              <Stack
                key={el.id}
                direction="row"
                alignItems="center"
                spacing={3.75}
                sx={{
                  width: "100%",
                  cursor: "pointer",
                  color: theme.palette.primary.main,
                }}
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
                sx={{
                  width: "100%",
                  cursor: "pointer",
                  color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                }}
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
