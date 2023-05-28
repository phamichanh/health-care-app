"use client";
import styles from "./index.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  LineController,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  LineController
);

function BodyGraph(props: {
  months?: string[];
  data1?: number[];
  data2?: number[];
  width?: number;
  height?: number;
}) {
  const {
    months = [
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
    ],
    data1 = [1, 0.95, 0.7, 0.8, 0.75, 0.7, 0.8, 0.7, 0.55, 0.5, 0.45, 0.5],
    data2 = [1, 0.9, 0.75, 0.7, 0.65, 0.65, 0.5, 0.45, 0.4, 0.3, 0.25, 0.15],
    width = 700,
    height = 316,
  } = props;

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 3,
        fill: "start",
      },
    },
    scales: {
      x: {
        grid: {
          color: "white",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        display: false,
      },
    },
  };

  const data = {
    labels: months,
    datasets: [
      {
        data: data1,
        borderColor: "#FFCC21",
        pointBackgroundColor: "#FFCC21",
      },
      {
        data: data2,
        borderColor: "#8FE9D0",
        pointBackgroundColor: "#8FE9D0",
      },
    ],
  };

  return (
    <div className="bg-dark grow py-3 px-16">
      <Line data={data} width={width} height={height} options={options} />
    </div>
  );
}

export default BodyGraph;
