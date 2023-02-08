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
    <div className="w-full lg:w-3/5 absolute lg:-right-40 2xl:-mt-20  ">
      <motion.div
        onViewportEnter={() => {
          setEntered(true);
        }}
        onViewportLeave={() => {
          setEntered(false);
        }}
        className={`${entered ? "container" : "Uncontainer"}  lg:hidden`}
      >
        {stacks.map((Item, index) => {
          return (
            <div
              className={`p-4 border rounded-3xl border-black  bg-opacity-25 bg-white flex items-center justify-center stackDiv`}
              key={Item.name}
            >
              {Item.icon("fill-gray-800", "60", "60")}
            </div>
          );
        })}
      </motion.div>

      <motion.div
        onViewportEnter={() => {
          setEntered(true);
        }}
        onViewportLeave={() => {
          setEntered(false);
        }}
        className={`${
          entered ? "containerLg" : "UncontainerLg"
        }  hidden lg:block xl:hidden`}
      >
        {stacks.map((Item, index) => {
          return (
            <div
              className={`p-4 border rounded-3xl border-black bg-opacity-25 bg-white flex items-center justify-center stackDivLg`}
              key={Item.name}
            >
              {Item.icon("fill-gray-900", "100", "100")}
            </div>
          );
        })}
      </motion.div>

      <motion.div
        onViewportEnter={() => {
          setEntered(true);
        }}
        onViewportLeave={() => {
          setEntered(false);
        }}
        className={`${
          entered ? "containerLg" : "UncontainerLg"
        }  hidden xl:block`}
      >
        {stacks.map((Item, index) => {
          return (
            <div
              className={`p-4 border rounded-3xl border-black bg-opacity-25 bg-white flex items-center justify-center stackDivXl`}
              key={Item.name}
            >
              {Item.icon("fill-gray-900", "80", "80")}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
