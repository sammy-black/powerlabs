/* eslint-disable react/prop-types */
import { Box, IconButton, InputBase, Stack, useTheme } from "@mui/material";

import { Bell, MagnifyingGlass, Moon, Sun } from "@phosphor-icons/react";
import useSettings from "../hooks/useSettings";
import ProfileMenu from "./ProfileMenu";

const Topbar = ({handleNotification}) => {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent="space-between"
      bgcolor={theme.palette.background.paper}
      sx={{
        height: "4.375rem",
        paddingX: "1rem",
        borderBottomWidth: 2,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* search bar */}

      <Box
        display="flex"
        sx={{
          height: 40,
          minWidth: 300,
          border:  theme.palette.mode === "dark" ? "none" : "1px solid rgb(226 232 240)",
          borderRadius: "0.25rem",
          paddingRight: "1rem",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(22, 28, 36, 1)"
              : theme.palette.background.paper,
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
        <MagnifyingGlass size={20} style={{alignSelf: "center", cursor: "pointer"}} />
      </Box>

      <Stack direction={"row"} spacing={2}>
        <Stack direction={"row"}>
          <IconButton onClick={onToggleMode}>
            {theme.palette.mode === "dark" ? <Sun /> : <Moon />}
          </IconButton>
          <IconButton onClick={handleNotification}>
            <Bell />
          </IconButton>
        </Stack>

        <ProfileMenu />
      </Stack>
    </Box>
  );
};

export default Topbar;
