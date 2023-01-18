import Chart from "chart.js/auto";
import { ArcElement } from "chart.js";
import { lora } from "../../pages/_app";
import { motion } from "framer-motion";
import "chartjs-plugin-datalabels";

import { getRelativePosition } from "chart.js/helpers";
import { useState } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import { Data } from "../../fakeData/fakeData";

export default function StackII() {
  const [view, setView] = useState(false);
  Chart.register(ArcElement);

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        data: Data.map((item) => {
          return item.userGain;
        }),
        backgroundColor: ["#818cf8"],
        borderColor: "#818cf8",
        borderWidth: 1.5,
      },
    ],
  });

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <motion.div className="font-lora w-3/5 lg:w-2/5 text-white 2xl:text-8xl xl:text-7xl lg:text-7xl text-5xl absolute ">
        Over X7 User Growth over the last 4 years.
        <span className="blurry-gradientII hidden lg:absolute"></span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        onViewportEnter={() => {
          setView(true);
        }}
        onViewportLeave={() => {
          setView(false);
        }}
        className="hidden lg:block"
      >
        {view && (
          <Line
            data={chartData}
            style={{
              width: 700,
              height: 500,
              padding: 20,
              border: "none",
              color: "#fafafa",
            }}
            options={{
              layout: {},
              elements: {
                point: {
                  radius: 15,
                  pointStyle: "crossRot",
                  backgroundColor: "#fafafa",
                  borderColor: "#fafafa",
                },
              },
              scales: {
                y: {
                  border: { display: false },

                  grid: {
                    display: false, // <-- this removes y-axis line
                    lineWidth: function (context) {
                      return context?.index === 0 ? 0 : 1; // <-- this removes the base line
                    },
                    color: "#fafafa",
                    drawOnChartArea: false,
                    tickColor: "#fafafa",
                  },
                  ticks: {
                    padding: 20,
                    font: { family: "lora", size: 20 },
                    color: "#f9fafb",
                    display: false,
                  },
                },
                x: {
                  bounds: "ticks",
                  border: { display: false },
                  grid: {
                    lineWidth: 0,
                    // <-- this removes vertical lines between bars
                  },
                  ticks: {
                    padding: 20,
                    font: { family: "lora", size: 14 },
                    color: "#f9fafb",
                  },
                },
              },

              plugins: {
                title: {
                  display: false,
                  text: "Users Gained between 2016-2020",
                },
                legend: {
                  display: false,
                },
                tooltip: {
                  bodySpacing: 8,
                  enabled: true,
                },
              },

              borderColor: "rgba(0, 0, 0, 0)",
              animation: { delay: 1, easing: "linear" },
              maintainAspectRatio: false,
            }}
          />
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        onViewportEnter={() => {
          setView(true);
        }}
        onViewportLeave={() => {
          setView(false);
        }}
        className="lg:hidden flex item-center justify-center"
      >
        {view && (
          <Line
            data={chartData}
            style={{
              width: "80%",
              border: "none",
              color: "#fafafa",
              padding: 4,
            }}
            options={{
              layout: {},
              elements: {
                point: {
                  radius: 2,
                  pointStyle: "circle",
                  backgroundColor: "#fafafa",
                  borderColor: "#fafafa",
                },
              },
              scales: {
                y: {
                  border: { display: false },

                  grid: {
                    display: false, // <-- this removes y-axis line
                    lineWidth: function (context) {
                      return context?.index === 0 ? 0 : 1; // <-- this removes the base line
                    },
                    color: "#fafafa",
                    drawOnChartArea: false,
                    tickColor: "#fafafa",
                  },
                  ticks: {
                    padding: 1,
                    font: { family: "lora", size: 7 },
                    color: "#f9fafb",
                    display: false,
                  },
                },
                x: {
                  bounds: "ticks",
                  border: { display: false },
                  grid: {
                    lineWidth: 0,
                    // <-- this removes vertical lines between bars
                  },
                  ticks: {
                    padding: 4,
                    font: { family: "lora", size: 10 },
                    color: "#f9fafb",
                    display: false,
                  },
                },
              },

              plugins: {
                title: {
                  display: false,
                  text: "Users Gained between 2016-2020",
                },
                legend: {
                  display: false,
                },
                tooltip: {
                  bodySpacing: 8,
                  enabled: true,
                },
              },

              borderColor: "rgba(0, 0, 0, 0)",
              animation: { delay: 1, easing: "linear" },
              maintainAspectRatio: false,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
