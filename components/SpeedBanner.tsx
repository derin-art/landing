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
              }   rounded-2xl bg-venomLime   backdrop-blur-lg relative border-ultraGray borde h-20 w-20 flex items-center justify-center `}
              key={item.name}
            >
              {item.icon("fill-venomLime z-40", "40", "40")}
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ rotate: 35, x: 50 }}
        whileInView={{ rotate: 0, x: 0 }}
        transition={{ duration: 1, type: "spring", mass: 1.7 }}
        className="lg:flex justify-around w-full hidden py-10"
      >
        {devices.map((item, index) => {
          return (
            <motion.div
              className={`${
                index != 1 ? "mt-10" : ""
              }  p-4 rounded-2xl bg-white  border  shadow-m border-gray-400 h-20 w-20 flex items-center justify-center z-40`}
              key={item.name}
            >
              {item.icon("fill-gray-800", "40", "40")}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
