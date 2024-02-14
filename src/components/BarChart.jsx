/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, PointElement, TimeScale, Title, Tooltip } from "chart.js/auto";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  PointElement,
  Tooltip,
  Legend,
  TimeScale
);



const BarChart = ({ data, selectedView }) => {

  const chartOptions = {
    scales: {
      x: {
        type: "timeseries",
        time: {
          unit: selectedView
        }
        // time: {
        //   unit:
        //     selectedView === "week"
        //       ? "day"
        //       : selectedView === "month"
        //       ? "week"
        //       : "month",
        // },
      },
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };


  return <Bar data={data} options={chartOptions} />;
};

export default BarChart;