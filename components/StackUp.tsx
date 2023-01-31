import UbuntuIcon from "../public/Icon/UbuntuIcon";
import AmazonIcon from "../public/Icon/amazonIcon";
import NvidiaIcon from "../public/Icon/NvidiaIcon";
import ReactIcon from "../public/Icon/ReactIcon";
import { motion } from "framer-motion";
import { useState } from "react";

export default function StackUp() {
  const [entered, setEntered] = useState(false);
  const stacks = [
    { name: "Ubuntu", icon: UbuntuIcon },
    { name: "Amazon", icon: AmazonIcon },
    { name: "Nvidia", icon: NvidiaIcon },
    { name: "React", icon: ReactIcon },
  ];
  return (
    <motion.div
      onViewportEnter={() => {
        setEntered(true);
      }}
      onViewportLeave={() => {
        setEntered(false);
      }}
      className={`${entered ? "container" : "Uncontainer"}  `}
    >
      {stacks.map((Item, index) => {
        return (
          <div
            className={`p-4 border rounded-3xl bg-opacity-25 bg-white flex items-center justify-center stackDiv`}
            key={Item.name}
          >
            {Item.icon("fill-blueHigh", "60", "60")}
          </div>
        );
      })}
    </motion.div>
  );
}
