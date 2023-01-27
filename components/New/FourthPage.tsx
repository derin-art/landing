import IPhone3 from "../../public/images/Iphone3.png";
import WifiIcon from "../../public/Icon/wifiIcon";
import BatteryIcon from "../../public/Icon/batteryIcon";
import { motion } from "framer-motion";
import CurveBanner from "../CurveBanner";

import Image from "next/image";

export default function FourthPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-y-hidden relative">
      <div className="absolute top-20 w-full">
        {" "}
        <CurveBanner></CurveBanner>
      </div>
      <motion.div className="-bottom-[320px] absolute">
        <div className="relative w-fit  flex items-around justify-center flex-col ">
          <div className="text-[650px] text-gray-100  mt-40  font-Inter  ">
            i
          </div>
        </div>
      </motion.div>
    </div>
  );
}
