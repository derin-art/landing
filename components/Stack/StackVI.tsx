import { motion } from "framer-motion";
import { useState } from "react";
export default function StackVI() {
  const [time, setTime] = useState(12356);
  const toTen = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const numbers = [
    { y: "10.5%", no: [...toTen], delay: 3 },
    { y: "55%", no: [...toTen], delay: 2.5 },
    { y: "66%", no: [...toTen], delay: 2 },
    { y: "33%", no: [...toTen], delay: 1 },
    { y: "44%", no: [...toTen], delay: 0 },
  ];

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center font-lora 2xl:text-8xl xl:text-8xl lg:text-6xl text-white">
      <span className="blurry-gradient "></span>{" "}
      <div className="w-1/3">
        <motion.div>
          {numbers.map((item) => {
            return (
              <motion.span
                key={item.y}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  height: "100px",
                }}
              >
                <motion.span
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: `-${item.y}` }}
                  transition={{ duration: 1, delay: item.delay }}
                  className="flex flex-col 2xl:text-8xl xl:text-8xl lg:text-8xl"
                >
                  {item.no.map((val) => {
                    return <span key={val}>{val}</span>;
                  })}
                </motion.span>
              </motion.span>
            );
          })}
        </motion.div>{" "}
        <span className="font-loraI">apis</span> calls and counting
      </div>
    </div>
  );
}
