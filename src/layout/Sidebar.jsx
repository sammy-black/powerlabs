import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../data";
import { whiteLogo } from "../assets/images";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);

  const pathurl = window.location.pathname;

  return (
    <Box
      sx={{
        width: 243,
        overflowX: "hidden",
        borderRight: `1px solid ${
          theme.palette.mode === "dark" ? colors.primary[600] : colors.grey[600]
        }`,
      }}
    >
      <Stack
        alignItems={"center"}
        direction={"column"}
        sx={{ width: "max-content", maxWidth: "100%", maxHeight: "100%" }}
        spacing={3}
        padding={3.75}
        paddingTop={0}
      >
        <Box sx={{ width: 100, height: "auto", pt: "16px" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            src={whiteLogo}
            alt="powerlabs"
          />
        </Box>
        <Stack spacing={2.5} paddingBottom={2}>
          {menuItems.map((el) => {
            if (el.id !== 12 && el.id !== 14) {
              return (
                <div key={el.id}>
                  {" "}
                  {el.url === pathurl ? (
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={3.75}
                      sx={{
                        width: "100%",
                        color: "#FDB73D",
                        cursor: "pointer",
                      }}
                    >
                      {el.icon}
                      <Typography sx={{ fontSize: "14px" }}>
                        {el.title}
                      </Typography>
                    </Stack>
                  ) : (
                    <Stack
                      key={el.id}
                      direction="row"
                      alignItems="center"
                      spacing={3.75}
                      sx={{ width: "100%", cursor: "pointer" }}
                      onClick={() => {
                        navigate(el.url);
                      }}
                    >
                      {el.icon}
                      <Typography sx={{ fontSize: "14px" }}>
                        {el.title}
                      </Typography>
                    </Stack>
                  )}
                </div>
              );
            }
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
