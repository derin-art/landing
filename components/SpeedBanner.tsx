import { motion } from "framer-motion";
import TabletIcon from "../public/Icon/TabletIcon";
import PhoneIcon from "../public/Icon/PhoneIcon";
import MacBookIcon from "../public/Icon/MacBookIcon";
import blurGreen from "../public/Icon/blurGreen.svg";

export default function SpeedBanner() {
  const devices = [
    { name: "Tablet", icon: TabletIcon },
    { name: "Phone", icon: PhoneIcon },
    { name: "MacBook", icon: MacBookIcon },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <motion.div className="flex justify-around w-full  lg:hidden">
        {devices.map((item, index) => {
          return (
            <motion.div
              className={`${
                index != 1 ? "mt-10" : ""
              }   rounded-2xl  relative border-ultraGray border h-20 w-20 flex items-center justify-center `}
              key={item.name}
            >
              {item.icon("fill-white z-40", "30", "30")}
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div className="lg:flex justify-around w-full hidden py-10">
        {devices.map((item, index) => {
          return (
            <motion.div
              className={`${
                index != 1 ? "mt-10" : ""
              }  p-4 rounded-2xl   border  shadow-m border-gray-800 h-20 w-20 flex items-center justify-center z-40`}
              key={item.name}
            >
              {item.icon("fill-white", "40", "40")}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
