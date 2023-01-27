import IPhone2 from "../public/images/Iphone2.jpg";
import IPhone3 from "../public/images/Iphone3.png";
import WifiIcon from "../public/Icon/wifiIcon";
import BatteryIcon from "../public/Icon/batteryIcon";
import Auto from "./AutoSlide";
import { motion } from "framer-motion";

import Image from "next/image";
import { useState } from "react";

type PhoneDisplayProps = {
  base: boolean;
};

export default function PhoneDisplay() {
  const [index, setIndex] = useState(0);
  return (
    <motion.div className="">
      <div className="relative w-fit  flex items-center justify-center ">
        <div className="absolute flex  top-2 w-full p-4 ">
          <div className="text-[9px] font-Inter absolute left-8 font-bold">
            12:23
          </div>
          {WifiIcon("fill-green-400 absolute right-14", "12", "12")}
          {BatteryIcon("fill-green-400 absolute right-8", "14", "14")}
        </div>
        <div className="text-3xl absolute font-Neue top-14 left-[32px]">
          Connect with <span className="text-purple-400">friends</span> with
          similiar <span className="text-blue-400">interest</span>
        </div>
        <div className="absolute left-6">
          <Auto index={index} setIndex={setIndex}></Auto>
        </div>
        <Image
          src={IPhone3.src}
          height={800}
          width={250}
          unoptimized={true}
          className=""
          alt="Iphone Image"
        ></Image>
      </div>
    </motion.div>
  );
}
