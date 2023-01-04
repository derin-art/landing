import { motion } from "framer-motion";
import { useState } from "react";

export default function StackIII() {
  const companies = ["Google", "Inverse", "Amazon", "Vercel"];
  const [view, setView] = useState(false);
  const line = "Trusted by companies like";
  return (
    <div className="h-screen w-full  font-lora lg:text-7xl text-4xl text-black bg-white">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-4/5 h-4/5  flex flex-col items-center justify-center">
          <motion.div
            className=""
            style={{ display: "inline-block", overflow: "hidden" }}
          >
            <span className="blurry-gradient "></span>
            <motion.div
              initial={{ opacity: 1, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-loraI lg:text-left lg:mb-0 text-center mb-4"
            >
              {line}
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col space-y-4">
            {companies.map((company) => {
              return (
                <motion.div
                  key={company}
                  style={{ display: "inline-block", overflow: "hidden" }}
                >
                  <motion.div
                    initial={{ opacity: 1, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {company}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
