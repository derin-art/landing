import IPhone3 from "../../public/images/Iphone3.png";
import WifiIcon from "../../public/Icon/wifiIcon";
import BatteryIcon from "../../public/Icon/batteryIcon";
import { motion } from "framer-motion";
import CurveBanner from "../CurveBanner";
import SpeedBanner from "../SpeedBanner";
import dynamic from "next/dynamic";
import Image from "next/image";
const Speedometer = dynamic(() => import("./Speedometer"), { ssr: false });

export default function FourthPage() {
  const svsvHey = () => {
    return (
      <svg
        width="120"
        height="120"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="linearGradientId"
            gradientTransform="rotate(-45 0.5 0.5)"
          >
            <stop offset="0%" stop-color="#ff5d3b" />
            <stop offset="100%" stop-color="#ff8526" />
          </linearGradient>

          <clipPath id="shape">
            <path
              fill="currentColor"
              d="M780.5,648.5Q671,797,482.5,826.5Q294,856,218.5,678Q143,500,218.5,321.5Q294,143,494.5,152Q695,161,792.5,330.5Q890,500,780.5,648.5Z"
            ></path>
          </clipPath>
        </defs>

        <g clip-path="url(#shape)">
          <path
            fill="url(#linearGradientId)"
            d="M780.5,648.5Q671,797,482.5,826.5Q294,856,218.5,678Q143,500,218.5,321.5Q294,143,494.5,152Q695,161,792.5,330.5Q890,500,780.5,648.5Z"
          />
        </g>
      </svg>
    );
  };
  return (
    <div className="h-screen bg-ultraBlack overflow-hidden w-full  flex flex-col  items-center z-0 justify-center border  relative ">
      <div className="font-Neue text-3xl w-full p-2 flex flex-col text-white">
        Available{" "}
        <div className="self-end border-2 w-fit p-2 rounded-full text-venomLime border-gray-600">
          no matter
        </div>{" "}
        your speed
      </div>

      <Speedometer></Speedometer>

      <motion.div
        initial={{ rotate: 35, x: 50 }}
        whileInView={{ rotate: 0, x: 0 }}
        transition={{ duration: 1, type: "spring", mass: 1 }}
        className="-bottom-[340px] absolute flex flex-col w-full items-center overflow-hidden hidden "
      >
        <div className="relative w-fit  flex items-around justify-center flex-col hidden">
          <div className="text-[650px] text-stone-100  mt-40  font-Inter  xl:scale-[1.14]  flex flex-col items-center justify-center  relative">
            <motion.div
              animate={{ rotate: 360 }}
              initial={{ rotate: 0 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: [1, 2, 5, 10],
              }}
              className="absolute top-[140px]"
            >
              {svsvHey()}
            </motion.div>
            <div className="font-Neue text-3xl mt-4 z-40 absolute top-[160px]  w-full text-black sm:w-[320px] flex items-center justify-center space-x-2">
              We're <span className="text-white ">Every</span>where.
            </div>
            I
          </div>
        </div>
      </motion.div>
    </div>
  );
}
