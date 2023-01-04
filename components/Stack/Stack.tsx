import { motion } from "framer-motion";

import useMediaQuery from "../../hooks/useMediaQuery";
import dynamic from "next/dynamic";
const AppParticles = dynamic(() => import("../Particles"));

export default function Stack() {
  const { width, height } = useMediaQuery();
  let isGrt768 = false;
  if (width) {
    isGrt768 = 768 <= width;
  }
  return (
    <div className="w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full h-full bg-gradient-to-r from-purple-100 z-30  to-indigo-200 flex items-center justify-center "
      >
        {isGrt768 && <AppParticles></AppParticles>}
        <motion.span
          className="2xl:text-9xl xl:text-7xl lg:text-6xl  text-4xl"
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.div
            className="flex relative  text-center font-loraI"
            initial={{ opacity: 1, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            onAnimationComplete={() => {
              console.log("complete");
            }}
            transition={{ duration: 0.7, type: "keyframes", delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute h-full w-full  backdrop-blur-sm  z-30  flex items-center justify-center "
            ></motion.div>
            <span className="">i</span>NDIGO
          </motion.div>
        </motion.span>
      </motion.div>
    </div>
  );
}
