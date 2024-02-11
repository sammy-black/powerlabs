import "./App.css";
import { CssBaseline } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layout";
import Dashboard from "./pages/Dashboard";
import EnergyUsage from "./pages/EnergyUsage";
import PredictiveAnalytics from "./pages/PredictiveAnalytics";
import Settings from "./pages/Settings";
import SettingsProvider from "./contexts/SettingsContext";
import ThemeProvider from "./theme";

function App() {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <CssBaseline />
        <div className="app">
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route element={<Navigate to={"/dashboard"} replace />} index />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="energy-usage" element={<EnergyUsage />} />
              <Route
                path="predictive-analytics"
                element={<PredictiveAnalytics />}
              />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default App;
