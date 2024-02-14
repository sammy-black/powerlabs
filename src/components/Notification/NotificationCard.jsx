/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";
import { Lightning, MapPin } from "@phosphor-icons/react";


const NotificationCard = ({ item, theme, isMobile }) => {

  const color = getColor(item.status);
  return (
    <Stack
      justifyContent={"space-between"}
      sx={{
        padding: isMobile ? "0.5rem" : "1rem",
        cursor: "pointer",
        ":hover": {
          backgroundColor:
            theme.palette.mode === "light" ? "#F8FAFC" : "#233A57",
        },
      }}
    >
      <Stack direction={"row"} boxSizing={"border-box"} spacing={isMobile ? 1 : 2}>
        <Lightning size={isMobile ? 20 : 30} color={color} />
        <Stack>
          <Typography variant="h5" color={color}>
            {item?.desc}
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            color={theme.palette.mode === "light" ? "#64748B" : "#5885BC"}
            spacing={0.5}
          >
            <MapPin size={10} />
            <Typography variant="h6" fontWeight={400}>
              {item?.location}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NotificationCard;

const getColor = (type) => {
  switch (type) {
    case "power":
      return "green";
    case "noPower":
      return "#EF4444";
    case "outrage":
      return "#FDBF60";
    default:
      "#B4B4B8";
  }
};
