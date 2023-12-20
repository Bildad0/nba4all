import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

const generateRandomData = () => {
  return Array.from({ length: 7 }, () =>
    Array.from({ length: 3 }, () => Math.floor(Math.random() * 10))
  );
};
const UserActivityChart: React.FC = () => {
  const chartRef = useRef<Chart<"bar", number[], string> | null>(null);
  const [data, setData] = useState(generateRandomData());

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("activityChart")?.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              label: "Running",
              data: data.map((day) => day[0]),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              barThickness: 7,
              borderRadius: 10,
            },
            {
              label: "Cycling",
              data: data.map((day) => day[1]),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
              barThickness: 7,
              borderRadius: 10,
            },
            {
              label: "Swimming",
              data: data.map((day) => day[2]),
              backgroundColor: "rgba(255, 205, 86, 0.2)",
              borderColor: "rgba(255, 205, 86, 1)",
              borderWidth: 1,
              barThickness: 7,
              borderRadius: 10,
            },
          ],
        },
      });
    }
  }, [data]);

  const updateData = () => {
    setData(generateRandomData());
  };

  return (
    <div>
      <div>
        <canvas id="activityChart" width="400" height="200"></canvas>
      </div>
      <button onClick={updateData} className="btn btn-primary">
        Update Data
      </button>
    </div>
  );
};

export default UserActivityChart;
