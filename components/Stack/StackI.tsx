import { motion } from "framer-motion";

import dynamic from "next/dynamic";
import { ForceGraph2D } from "react-force-graph";
import { useEffect, useState } from "react";

export default function StackI() {
  const dtaa = [1, 2];
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);
  return (
    <motion.div className="h-screen w-full sticky top-0 bg-gradient-to-r from-gray-100 font-lora to-gray-200  flex items-center justify-center">
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center h-full"
      >
        <motion.div
          animate={{
            translateY: [0, 15, 0],
          }}
          transition={{ duration: 1, repeat: Infinity, type: "spring" }}
          className="h-4/5 w-1/4 flex flex-col text-sm p-4 justify-between mt-8"
        >
          {dtaa.map((item) => {
            return (
              <motion.div
                key={item}
                className="border-2 rounded-xl font-poppins p-2 border-b-4 border-l-4 backdrop-blur-md"
              >
                <div className="xl:text-lg">Lorem ipsum</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                adipisci quasi commodi, perferendis fugit molestias.
              </motion.div>
            );
          })}
        </motion.div>
        <span className="relative flex items-center justify-center font-loraI 2xl:text-[230px] xl:text-9xl lg:text-9xl">
          {" "}
          <span className="blurry-gradient "></span>i
        </span>

        <motion.div
          animate={{
            translateY: [0, 10, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            type: "spring",
            delay: 0.3,
          }}
          className="h-4/5 w-1/4 flex flex-col text-sm p-4 justify-between"
        >
          {dtaa.map((item) => {
            return (
              <div
                key={item}
                className="border-2 rounded-xl p-2 font-poppins border-b-4 border-l-4 backdrop-blur-md"
              >
                <div className="xl:text-lg">Lorem ipsum</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                adipisci quasi commodi, perferendis fugit molestias.
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
