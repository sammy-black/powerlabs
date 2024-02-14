import { Box } from "@mui/material";
import Header from "../../components/Header";
import BoxContainer from "../../components/BoxContainer";
import LineChart from "../../components/LineChart";
import { useEffect, useState } from "react";


const EnergyUsage = () => {
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    fetchEnergyData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastTimestamp = new Date(
        energyData[energyData.length - 1].timestamp
      );
      const newTimestamp = new Date(lastTimestamp.getTime() + 60 * 1000);
      const energy_usage_kwh = Math.ceil(Math.random() * 150);

      setEnergyData((prev) => [
        ...prev,
        { timestamp: newTimestamp.toISOString(), energy_usage_kwh },
      ]);

    }, 1000); // update data every second

    return () => clearInterval(interval);
  }, [energyData]);


  const fetchEnergyData = async () => {
    try {
      //api call to fetch data using mirage
      const response = await fetch("/api/energyUsage");
      const data = await response.json();
      setEnergyData(data);
    } catch (error) {
      console.error("Error fetching energy data:", error);
    }
  };

  const isCriticalDataPoint = (dataPoint) => {
    return dataPoint.energy_usage_kwh > 120;
  };

  const series = [
    {
      name: "Energy Usage",
      data: energyData.map((entry) => ({
        x: entry.timestamp,
        y: entry.energy_usage_kwh,
      })),
    },
  ];

  return (
    <Box mt={"20px"} px={"20px"} boxSizing={"border-box"}>
      <Header title={"Energy Usage"} subtitle={"Real-time statistics"} />
      <BoxContainer>
        <Box height={400}>
          {energyData?.length > 0 && (
            <LineChart
              unit={"minute"}
              data={{
                // labels: energyData.map((entry) => entry.timestamp),
                datasets: [
                  {
                    label: "Energy Usage (kWh)",
                    data: energyData.map((entry) => ({
                      x: entry.timestamp,
                      y: entry.energy_usage_kwh,
                    })),
                    fill: false,
                    borderWidth: 2,
                    borderColor: "rgba(0, 255, 0, 1)",
                    color: "blue",
                    pointBackgroundColor: energyData.map((entry) =>
                      isCriticalDataPoint(entry) ? "red" : "green"
                    ),
                    pointRadius: energyData.map((entry) =>
                      isCriticalDataPoint(entry) ? 6 : 3
                    ),
                  },
                ],
              }}
            />
          )}
        </Box>
      </BoxContainer>
    </Box>
  );
};

export default EnergyUsage;
