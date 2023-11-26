import React from "react";
// same as boilerplate code from documentation
import { Line } from "react-chartjs-2"; //react lib for chart
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"; //js lib for chart

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ arr = [], currencySymbol, days }) => {
  const prices = []; //y-axis
  const date = []; //x-axis

  for (let i = 0; i < arr.length; i++) {
    if (days === "24h") {
      date.push(new Date(arr[i][0]).toLocaleTimeString());
    } else {
      date.push(new Date(arr[i][0]).toLocaleDateString());
    }
    prices.push(arr[i][1]);
  }

  const data = {
    labels: date, //x-axis
    datasets: [
      // 1 object->1 chart
      {
        label: `Price in ${currencySymbol}`, //top heading
        data: prices, //y-axis
        borderColor: "rgba(255,99,0.32)",
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  );
};
export default Chart;
