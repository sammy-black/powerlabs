/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";

ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  Title,
  PointElement,
  Tooltip,
  Legend,
  TimeScale
);

const LineChart = ({ data, unit }) => {
  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "minute",
        },
        ticks: { maxTicksLimit: 10 },
      },
      y: {
        title: {
          display: true,
          text: "Energy Consumption (kWh)",
        },

        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      line: {
        tension: 0.1,
      },
      point: {
        borderColor: "blue",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
