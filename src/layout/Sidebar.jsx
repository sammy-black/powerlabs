import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuItems } from "../data";
import { whiteLogo } from "../assets/images";
import { useTheme } from "@emotion/react";

const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const pathurl = window.location.pathname;

  return (
    <Box
      sx={{
        width: 243,
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        alignItems={"center"}
        direction={"column"}
        sx={{
          width: "max-content",
          maxWidth: "100%",
          maxHeight: "100%",
          paddingTop: 3,
          boxSizing: "border-box",
        }}
        spacing={3}
        padding={3.75}
        paddingTop={0}
      >
        <Box sx={{ width: 100, height: "auto" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            src={whiteLogo}
            alt="powerlabs"
          />
        </Box>
        <Stack spacing={2.5} paddingBottom={2}>
          {MenuItems.map((el) => {
            return (
              <div key={el.id}>
                {" "}
                {el.url === pathurl ? (
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{
                      width: "100%",
                      color: theme.palette.primary.main,
                      cursor: "pointer",
                    }}
                  >
                    {el.icon}
                    <Typography sx={{ fontSize: "16px" }}>
                      {el.title}
                    </Typography>
                  </Stack>
                ) : (
                  <Stack
                    key={el.id}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{
                      width: "100%",
                      cursor: "pointer",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                    }}
                    onClick={() => {
                      navigate(el.url);
                    }}
                  >
                    {el.icon}
                    <Typography sx={{ fontSize: "16px" }}>
                      {el.title}
                    </Typography>
                  </Stack>
                )}
              </div>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
