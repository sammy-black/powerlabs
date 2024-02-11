/* eslint-disable react/prop-types */


import { useContext, useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import palette from "./palette";
import breakpoints from "./breakpoints";
import typography from "./typography";
import useSettings from "../hooks/useSettings";


const ThemeProvider = ({ children })  => {
  const { themeMode } = useSettings();


  const isLight = themeMode === "light";
  

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      breakpoints,
      typography,
    }),
    [isLight]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default ThemeProvider