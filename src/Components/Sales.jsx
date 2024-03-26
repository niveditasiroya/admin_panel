import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Sales = () => {
  const data = {
    labels: [
      "01 Apr",
      "",
      "02 Apr",
      "",
      "03 Apr",
      "",
      "04 Apr",
      "",
      "05 Apr",
      "",
      "06 Apr",
      "",
      "07 Apr",
      "",
      "08 Apr",
      "",
    ],
    datasets: [
      {
        data: [5, 7, 3, 8, 7.9, 4, 7, 20, 10, 5, 7.8, 5, 12, 6, 9, 17],
        backgroundColor: "transparent",
        borderColor: "#0D9276",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 60,
        ticks: {
          stepSize: 5,
          callback: (value) => value + "k",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <>
      <div className="bg-white rounded-xl p-5 mb-6">
        <h1 className="text-2xl font-bold text-left">Sales</h1>

        <div>
          <Line data={data} options={options} width={500} height={200}></Line>
        </div>
      </div>
    </>
  );
};

export default Sales;
