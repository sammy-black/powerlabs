import { useState } from "react";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layout";
import Dashboard from "./pages/Dashboard";

function App() {
  const [ theme, colorMode ] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}> 
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route element={<Navigate to={"/dashboard"} replace />}  index/>
              <Route path="dashboard"  element={<Dashboard />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
