/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box mb={"30px"}>
      <Typography
        variant="h3"
      
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >{title}</Typography>
      <Typography   color={theme.palette.primary.main} variant="h5">{subtitle}</Typography>
    </Box>
  );
};

export default Header;
