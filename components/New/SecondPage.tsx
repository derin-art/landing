import PhoneDisplay from "../PhoneDisplay";
import { motion } from "framer-motion";

export default function SecondPage() {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="absolute -left-6">
        <PhoneDisplay></PhoneDisplay>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="54"
        height="54"
        className="fill-red-400 hidden"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <motion.path
          fill="blue"
          strokeWidth="12"
          stroke="rgba(255, 255, 255, 0.69)"
          strokeLinecap="butt"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, ease: "easeIn" }}
          d="M13 3v7.267l6.294-3.633 1 1.732-6.293 3.633 6.293 3.635-1 1.732L13 13.732V21h-2v-7.268l-6.294 3.634-1-1.732L9.999 12 3.706 8.366l1-1.732L11 10.267V3z"
        />
      </svg>
    </div>
  );
}
