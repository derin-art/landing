import IPhone2 from "../public/images/Iphone5.png";
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

  const FireIcon = (style: string, height = "24", width = "24") => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        className={style}
        viewBox="0 0 16 16"
      >
        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
      </svg>
    );
  };

  const peopleIcon = (style: string, height = "24", width = "24") => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        className={style}
        viewBox="0 0 16 16"
      >
        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
      </svg>
    );
  };

  const chatIcon = (style: string, height = "24", width = "24") => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        className={style}
        viewBox="0 0 16 16"
      >
        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
      </svg>
    );
  };

  const belowBar = [
    { name: "Fire", icon: FireIcon },
    { name: "User", icon: peopleIcon },
    { name: "chat", icon: chatIcon },
  ];
  return (
    <motion.div className="">
      <div className="relative w-fit  flex items-center justify-center bg-gray-50 rounded-[50px]">
        <div className="absolute flex  top-2 w-full p-4">
          <div className="text-[9px] font-Inter absolute left-8 font-bold">
            12:23
          </div>
          {WifiIcon("fill-green-400 absolute right-14", "12", "12")}
          {BatteryIcon("fill-green-400 absolute right-8", "14", "14")}
        </div>
        <div className="text-3xl absolute font-Neue top-14 left-[32px]  lg:w-4/5 w-3/4">
          Connect with <span className="text-venomLime">friends</span> with
          similiar <span className="text-blue-400">interest</span>
        </div>
        <div className="absolute left-5 lg:left-6 mt-14">
          <Auto index={index} setIndex={setIndex}></Auto>
        </div>
        <Image
          src={IPhone3.src}
          height={800}
          width={250}
          unoptimized={true}
          className="w-[250px] lg:w-[250px] "
          alt="Iphone Image"
        ></Image>
        <div className="absolute flex  bottom-4 w-full p-4 px-6  justify-around">
          {belowBar.map((ic) => {
            return (
              <div key={ic.name} className="relative">
                {ic.name === "chat" && (
                  <div className="text-[9px] absolute -right-2 -top-3 rounded-full font-Inter bg-blueHigh text-white p-2 h-2 w-2  flex items-center justify-center">
                    4
                  </div>
                )}
                {ic.icon("fill-orangeLow", "15", "15")}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
