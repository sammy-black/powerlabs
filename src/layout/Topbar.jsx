import { Box, IconButton, InputBase, Stack, useTheme } from "@mui/material";

import { Bell, MagnifyingGlass, Moon, Sun } from "@phosphor-icons/react";
import useSettings from "../hooks/useSettings";
import ProfileMenu from "./ProfileMenu";

const Topbar = () => {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  return (
    <Box display="flex" justifyContent="space-between">
      {/* search bar */}

      <Box
        display="flex"
        borderRadius="3px"
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(22, 28, 36, 1)"
              : theme.palette.background.paper,
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <MagnifyingGlass />
        </IconButton>
      </Box>

      <Stack direction={"row"} spacing={2}>
        <Stack direction={"row"}>
          <IconButton onClick={onToggleMode}>
            {theme.palette.mode === "dark" ? <Sun /> : <Moon />}
          </IconButton>
          <IconButton>
            <Bell />
          </IconButton>
        </Stack>

        <ProfileMenu />
      </Stack>
    </Box>
  );
};

export default Topbar;
