import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { useState } from "react";
import BoxContainer from "../../components/BoxContainer";

const PredictiveAnalytics = () => {
  const [historicalData, setHistoricalData] = useState([
    { timestamp: "2024-01-01T00:00:00Z", energy_usage_kwh: 50 },
    { timestamp: "2024-01-02T00:00:00Z", energy_usage_kwh: 30 },
    { timestamp: "2024-01-03T00:00:00Z", energy_usage_kwh: 60 },
  ]);

  const [predictData, setPredictData] = useState([
    { timestamp: "2024-01-01T00:00:00Z", energy_usage_kwh: 10 },
    { timestamp: "2024-01-02T00:00:00Z", energy_usage_kwh: 40 },
    { timestamp: "2024-01-03T00:00:00Z", energy_usage_kwh: 60 },
    { timestamp: "2024-01-03T00:00:00Z", energy_usage_kwh: 76 },
    { timestamp: "2024-01-03T00:00:00Z", energy_usage_kwh: 120 },
    { timestamp: "2024-01-03T00:00:00Z", energy_usage_kwh: 98 },
  ]);

  return (
    <Box mt={"20px"} px={"20px"} boxSizing={"border-box"}>
      <Header
        title={"Predictive Analytics"}
        subtitle={"Energy consumption trends"}
      />

      <BoxContainer>
        <Box height={400}>
          <LineChart
            data={{
              labels: historicalData.map((entry) => entry.timestamp),
              datasets: [
                {
                  label: "Actual Energy Usage (kWh)",
                  data: historicalData.map((entry) => entry.energy_usage_kwh),
                  borderWidth: 1,
                  borderColor: "rgba(0, 255, 0, 1)",
                },

                {
                  label: "Projected Energy Usage (kWh)",
                  data: predictData.map((entry) => entry.energy_usage_kwh),
                  borderWidth: 1,
                  borderColor: "rgba(255, 99, 132, 1)",
                },
              ],
            }}
          />
        </Box>
      </BoxContainer>
    </Box>
  );
};

export default PredictiveAnalytics;


