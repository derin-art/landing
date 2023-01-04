import { motion } from "framer-motion";

export default function StackV() {
  const questions = [
    "What is indigo",
    "What is your Pricing",
    "How do i use your Api",
    "How does indigo work",
  ];
  return (
    <div className="h-screen w-full bg-white justify-center text-black flex flex-col text-4xl p-20 items-center 2xl:text-7xl xl:text-7xl lg:text-7xl font-lora ">
      <div className="font-loraI">FAQ</div>

      <div className="flex flex-col mt-4  w-full items-center justify-center">
        <span className="blurry-gradientII "></span>
        {questions.map((item, index) => {
          return (
            <motion.div
              key={index}
              className=" "
              style={{ display: "inline-block", overflow: "hidden" }}
            >
              <motion.button
                initial={{ opacity: 1, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                key={index}
                className={`lg:text-base text-xs p-4 font-poppins hover:text-indigo-300`}
              >
                {item}? <motion.span className="ml-2">+</motion.span>
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
