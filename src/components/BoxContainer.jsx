/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const BoxContainer = ({ height, title, children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        borderRadius: "0.375rem",
        padding: "1.25rem",
      }}
    >
      <Typography textAlign={"center"} variant="h3" mb={1}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default BoxContainer;
