import { motion } from "framer-motion";
import TabletIcon from "../public/Icon/TabletIcon";
import PhoneIcon from "../public/Icon/PhoneIcon";
import MacBookIcon from "../public/Icon/MacBookIcon";

export default function CurveBanner() {
  const devices = [
    { name: "Tablet", icon: TabletIcon },
    { name: "Phone", icon: PhoneIcon },
    { name: "MacBook", icon: MacBookIcon },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden  py-[12px] ">
      <motion.div
        initial={{ rotate: 35, x: 50 }}
        whileInView={{ rotate: 0, x: 0 }}
        transition={{ duration: 1, type: "spring", mass: 1 }}
        className="flex justify-around w-full  "
      >
        {devices.map((item, index) => {
          return (
            <motion.div
              className={`${
                index != 1 ? "mt-10" : ""
              }  p-4 rounded-full bg-white shadow-m borde border-gray-400 h-20 w-20 flex items-center justify-center z-40`}
              key={item.name}
            >
              {item.icon("fill-gray-800")}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
