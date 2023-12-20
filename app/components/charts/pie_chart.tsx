// components/DoughnutChart.js
import { Chart } from "chart.js";
import React, { useEffect, useRef, useState } from "react";

const generateRandomData = () => {
  return Array.from({ length: 7 }, () =>
    Array.from({ length: 3 }, () => Math.floor(Math.random() * 10))
  );
};

const analyticsData = {
  completedTasks: 150,
  upcomingTasks: 25,
  overdueTasks: 5,
  inProgressTasks:10,
  averageTasksDuration: "1h 30m",
};

const DoughnutChart: React.FC = () => {
  const chartRef = useRef<Chart<"pie", number[], string> | null>(null);
  const [data, setData] = useState(generateRandomData());

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("doughnutChart")?.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Completed", "Overdue", "Upcoming","In progress"],
          datasets: [
            {
              label: `Avarage Duration ${analyticsData.averageTasksDuration}`,
              data: [
                analyticsData.completedTasks,
                analyticsData.overdueTasks,
                analyticsData.upcomingTasks,
                analyticsData.inProgressTasks
              ],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(250, 150, 233)"
              ],
              hoverOffset: 4,
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
        <canvas id="doughnutChart" width="400" height="200"></canvas>
      </div>
      <button onClick={updateData} className="btn btn-primary">
        Update Data
      </button>
    </div>
  );
};

export default DoughnutChart;
