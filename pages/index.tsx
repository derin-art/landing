import Head from "next/head";
import Image from "next/image";
import { AppParticles } from "../components/Particles";
import StackII from "../components/Stack/StackII";
import dynamic from "next/dynamic";
import StackIII from "../components/Stack/StackIII";
import StackIV from "../components/Stack/StackIV";
import StackV from "../components/Stack/StackV";
import StackVI from "../components/Stack/StackVI";

import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
const DynamicHeader = dynamic(() => import("../components/Stack/StackI"), {
  ssr: false,
});
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [beginAnimation, setBeginAnimation] = useState(false);
  const [animateTop, setAnimateTop] = useState(false);
  const [beh, setBeh] = useState(false);
  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.55,
      },
    },
    in: {
      opacity: 1,

      transition: {
        duration: 0.55,
        delay: 0.3,
      },
    },
  };

  const coolWords = ["DEAS", "NDIGO"];

  useEffect(() => {
    setTimeout(() => setBeh(true), 2);
  }, []);

  return (
    <div className="scroll-smooth z-30 w-full h-full font-lora bg-gradient-to-r from-purple-100  to-indigo-200 items-center justify-center">
      <div className="w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={beh && { opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full bg-gradient-to-r from-purple-100 z-30  to-indigo-200 flex items-center justify-center "
        >
          <AppParticles></AppParticles>
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
                setBeginAnimation(true);
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
      <div className="w-full h-full">
        <DynamicHeader></DynamicHeader>
      </div>
      <StackII></StackII>
      <div className="w-full h-full">
        <StackIII></StackIII>
      </div>
      <div className="w-full">
        <StackIV></StackIV>
      </div>
      <div className="w-full">
        <StackVI></StackVI>
      </div>
      <div className="w-full">
        <StackV></StackV>
      </div>
    </div>
  );
}
