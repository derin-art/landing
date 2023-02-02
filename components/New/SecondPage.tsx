import PhoneDisplay from "../PhoneDisplay";
import { motion } from "framer-motion";
import blurGreen from "../../public/Icon/blurGreen.svg";

export default function SecondPage() {
  const play = [
    {
      name: "GooglePlay",
      path: "M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z",
    },
    {
      name: "Apple",
      path: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM8.823 15.343c-.395-.477-.886-.647-1.479-.509l-.15.041-.59 1.016a.823.823 0 0 0 1.366.916l.062-.093.79-1.371zM13.21 8.66c-.488.404-.98 1.597-.29 2.787l3.04 5.266a.824.824 0 0 0 1.476-.722l-.049-.1-.802-1.392h1.19a.82.82 0 0 0 .822-.823.82.82 0 0 0-.72-.816l-.103-.006h-2.14L13.44 9.057l-.23-.396zm.278-3.044a.825.825 0 0 0-1.063.21l-.062.092-.367.633-.359-.633a.824.824 0 0 0-1.476.722l.049.1.838 1.457-2.685 4.653H6.266a.82.82 0 0 0-.822.822c0 .421.312.766.719.817l.103.006h7.48c.34-.64-.06-1.549-.81-1.638l-.121-.007h-2.553l3.528-6.11a.823.823 0 0 0-.302-1.124z",
    },
  ];
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center overflow-hidden crossBg">
      <div className="absolute -left-6 lg:scale-125 lg:-left-2  tab ">
        <PhoneDisplay></PhoneDisplay>
      </div>
      <div className="absolute -bottom-40 scale lg:-left-2 xs:scale-[1.1]   phoneCol  items-center">
        <div className="flex space-x-4 mb-4 z-30">
          {play.map((svg) => {
            return (
              <motion.svg
                key={svg.name}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                className="border rounded-2xl p-2 hoverG border-gray-600"
                height="50"
                fill="none"
              >
                <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
                <motion.path
                  stroke="rgb(82 82 82)"
                  strokeWidth={0.5}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6 }}
                  d={svg.path}
                />
              </motion.svg>
            );
          })}
        </div>
        <img src={blurGreen.src} className="absolute opacity-75 z-20 "></img>
        <div className=" phone font-Neue text-4xl p-4 border border-gray-800 z-30 rounded-full px-8 mb-10 text-center w-fit backdrop-blur-md">
          Ignite
        </div>
        <PhoneDisplay></PhoneDisplay>
      </div>

      <div className="font-Neue text-6xl text-right lg:w-3/5 xl:w-4/5 hidden   z-30 lg:flex flex-col items-end">
        <div className="flex space-x-4 mb-4 mr-4 ">
          {play.map((svg) => {
            return (
              <motion.svg
                key={svg.name}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                className="border rounded-2xl p-2 hoverG duration-300 border-gray-500"
                height="50"
                fill="none"
              >
                <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
                <motion.path
                  stroke="rgb(82 82 82)"
                  strokeWidth={0.5}
                  strokeLinecap="round"
                  initial={{ pathLength: 1 }}
                  transition={{ duration: 1.6 }}
                  d={svg.path}
                />
              </motion.svg>
            );
          })}
        </div>
        <div className="font-Neue text-6xl p-4 border-2 border-gray-600  rounded-full px-6">
          Ignite
        </div>
        Connect with <span className="">your</span>{" "}
        <span className="text-venomLime ">people</span>
      </div>
    </div>
  );
}
