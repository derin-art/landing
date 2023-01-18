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
        className="w-full h-full bg-black z-30 flex flex-col items-center justify-center "
      >
        {isGrt768 && <AppParticles></AppParticles>}
        <div className="flex flex-col items-center justify-center relative">
          <div className=" orb absolute top-10"></div>
          <motion.span
            className=""
            style={{ display: "inline-block", overflow: "hidden" }}
          >
            <motion.div
              className="flex relative flex-col text-center font-inter"
              initial={{ opacity: 1, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onAnimationComplete={() => {
                console.log("complete");
              }}
              transition={{ duration: 0.7, type: "keyframes", delay: 0.2 }}
            >
              <span className="text-purple-400 text-[300px]">I</span>
            </motion.div>
          </motion.span>
        </div>
        <div className="text-sm mt-1 text-white font-inter">
          indigo database services
        </div>
      </motion.div>
    </div>
  );
}
