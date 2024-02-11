import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ProfileMenus } from "../data";
import { david } from "../assets/images";

const ProfileMenu = ({isMobile}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ width: "max-content", borderRadius: 0 }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Avatar
            sx={{
              cursor: "pointer",
              width: 24,
              height: 24,
              objectFit: "cover",
            }}
            src={david}
          />
          {!isMobile && <Typography variant="h5">David</Typography>}
        </Stack>
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        // anchorOrigin={{
        //   vertical: "bottom",
        //   horizontal: "right",
        // }}
        // transformOrigin={{
        //   vertical: "bottom",
        //   horizontal: "left",
        // }}
      >
        <Stack spacing={1} px={1}>
          {ProfileMenus?.map((el) => {
            return (
              <MenuItem key={el.title} onClick={handleClose}>
                <Stack
                  sx={{ width: 100 }}
                  direction="row"
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <span>{el.title}</span>
                  {el.icon}
                </Stack>
              </MenuItem>
            );
          })}
        </Stack>
      </Menu>
    </>
  );
};

export default ProfileMenu;
