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
    <div className="w-full flex flex-col items-center justify-center">
      <motion.div className="flex justify-around w-full">
        {devices.map((item, index) => {
          return (
            <motion.div
              initial={{ x: -50, rotate: 100 }}
              whileInView={{ x: 0, rotate: 0 }}
              transition={{ duration: 0.5 }}
              className={`${
                index != 1 ? "mt-8" : ""
              } border p-4 rounded-full bg-white border border-gray-400 h-20 w-20 flex items-center justify-center z-40`}
              key={item.name}
            >
              {item.icon("fill-gray-800")}
            </motion.div>
          );
        })}
      </motion.div>
      <div className="font-Neue text-3xl mt-4 z-40">
        We're <span className="text-blueHigh">Every</span>where.
      </div>
    </div>
  );
}
