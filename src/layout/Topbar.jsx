import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import { useContext } from "react";
import { Bell, Gear, MagnifyingGlass, Moon, Sun } from "@phosphor-icons/react";
import { david } from "../assets/images";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" >
      {/* search bar */}

      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <MagnifyingGlass />
        </IconButton>
      </Box>

      <Stack direction={"row"} spacing={2}>
        <Stack direction={"row"}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? <Moon /> : <Sun />}
          </IconButton>
          <IconButton>
            <Bell />
          </IconButton>
        </Stack>
        <IconButton sx={{width: "max-content", borderRadius: 0}}>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Avatar src={david} sx={{ width: 24, height: 24, objectFit: "cover" }} />
          <Typography variant="h5">David</Typography>
        </Stack>
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Topbar;
