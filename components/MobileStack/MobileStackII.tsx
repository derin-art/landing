import Chart from "chart.js/auto";
import { ArcElement } from "chart.js";
import { lora } from "../../pages/_app";
import { motion } from "framer-motion";
import "chartjs-plugin-datalabels";

import { getRelativePosition } from "chart.js/helpers";
import { useState } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import { Data } from "../../fakeData/fakeData";


export default function MobileStackII() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="font-lora w-3/4 text-white text-5xl absolute ">
        Over X7 User Growth over the last 4 years.
      </div>
    </div>
  );
}
