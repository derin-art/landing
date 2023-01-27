import Head from "next/head";
import Image from "next/image";
import FourthPage from "../components/New/FourthPage";
import SecondPage from "../components/New/SecondPage";
import FirstPage from "../components/New/FirstPage";
import MobileStackI from "../components/MobileStack/MobileStackI";
import MobileStackII from "../components/MobileStack/MobileStackII";
import MobileStackIV from "../components/MobileStack/MobileStackIv";
import MobileStackVI from "../components/MobileStack/MobileStackVI";
import StackII from "../components/Stack/StackII";
import dynamic from "next/dynamic";
import StackIII from "../components/Stack/StackIII";
import StackIV from "../components/Stack/StackIV";
import StackV from "../components/Stack/StackV";
import Stack from "../components/Stack/Stack";
import StackVI from "../components/Stack/StackVI";
import useMediaQuery from "../hooks/useMediaQuery";
import ThirdPage from "../components/New/ThirdPage";

import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
const DynamicHeader = dynamic(() => import("../components/Stack/StackI"));
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { width, height } = useMediaQuery();
  let isGrt768 = false;
  if (width) {
    isGrt768 = 768 <= width;
  }
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

  const footer = ["Contact", "Support", "Socials", "Products"];

  useEffect(() => {
    setTimeout(() => setBeh(true), 2);
  }, []);

  return (
    <div className="scroll-smooth z-30 w-full h-full font-lora items-center justify-center">
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
      <FourthPage></FourthPage>
    </div>
  );
}

/*   <div className="w-full h-full">
        <Stack></Stack>
      </div>
      <div className="w-full lg:h-full h-fit">
        <MobileStackI></MobileStackI>
      </div>
      <div className="w-full">
        <StackII></StackII>
      </div>
      <div className="w-full h-full">
        <StackIII></StackIII>
      </div>
      <div className="w-full hidden">
        {isGrt768 && <StackIV></StackIV>}
        {!isGrt768 && <MobileStackIV></MobileStackIV>}
      </div>
      <div className="w-full">
        {isGrt768 && <StackVI></StackVI>}
        {!isGrt768 && <MobileStackVI></MobileStackVI>}
      </div>
      <div className="w-full">
        <StackV></StackV>
      </div>
      <div className="bg-black h-screen w-full flex flex-col items-center justify-center p-2 lg:p-8">
        <div className="flex flex-col space-y-6 w-full">
          <div className="text-white font-inter w-full text-right lg:text-lg xl:text-2xl">
            INDIGO
          </div>
          {footer.map((item) => {
            return (
              <button
                className="text-white font-inter text-sm w-full lg:text-base xl:text-xl text-left border-b"
                key={item}
              >
                {item} <span className="rotate-45">›</span>
              </button>
            );
          })}
        </div>
      </div> */
