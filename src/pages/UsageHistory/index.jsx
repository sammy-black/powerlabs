import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import Header from "../../components/Header";
import BoxContainer from "../../components/BoxContainer";
import DateRangePicker from "../../components/DatePicker";
import { useEffect, useState } from "react";
import BarChart from "../../components/BarChart";

const UsageHistory = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [selectedView, setSelectedView] = useState("week");
  const [dateRange, setDateRange] = useState([new Date("2024-02-13"), new Date("2024-02-17")]);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    fetchHistoricalData(selectedView);
  }, [selectedView, startDate, endDate]);

  const fetchHistoricalData = async () => {
    try {
      const response = await fetch(
        `/api/historicalData?startDate=${startDate}&endDate=${endDate}`
      );
      const data = await response.json();
      setHistoricalData(data);
    } catch (error) {
      console.error("Error fetching historical data:", error);
    }
  };

  const handleChange = (event) => {
    setSelectedView(event.target.value);
  };

  useEffect(() => {
    updateChartData();
  }, [historicalData, selectedView]);

  const updateChartData = () => {
    const chartData = {
      //   labels: labels,
      datasets: [
        {
          label: "Energy Usage (kWh)",
          backgroundColor: "#A4D24E",
          borderColor: "#A4D24E",
          borderWidth: 1,
          data: historicalData.map((entry) => ({
            x: new Date(entry.timestamp),
            y: entry.energy_usage_kwh,
          })),
        },
      ],
    };

    setChartData(chartData);
  };

  return (
    <Box mt={"20px"} px={"20px"} boxSizing={"border-box"}>
      <Header
        title={`Energy Usage (${selectedView})`}
        subtitle={"Usage History"}
      />
      <BoxContainer>
        <Stack alignItems={"center"} sx={{ width: "100%" }} mb={2}>
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            setDateRange={setDateRange}
          />
        </Stack>

        {/* filter dropdown */}
        <Box
          sx={{
            width: "max-content",
            zIndex: 400,
            position: "absolute",
            right: "30px",
            top: "30px",
          }}
        >
          <Select value={selectedView} onChange={handleChange} size="small">
            <MenuItem value={"week"}>Week</MenuItem>
            <MenuItem value={"month"}>Month</MenuItem>
            <MenuItem value={"year"}>Year</MenuItem>
          </Select>
        </Box>
        <Box height={400}>
          {historicalData.length > 0 ? (
            <BarChart selectedView={selectedView} data={chartData} />
          ) : (
            <Typography variant="h3" sx={{ textAlign: "center", mt: 5 }}>
              Data not found for the selected date range{" "}
            </Typography>
          )}
        </Box>
      </BoxContainer>
    </Box>
  );
};

export default UsageHistory;
