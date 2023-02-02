import Head from "next/head";
import Image from "next/image";
import FourthPage from "../components/New/FourthPage";
import FifthPage from "../components/New/FifthPage";
import SecondPage from "../components/New/SecondPage";
import FirstPage from "../components/New/FirstPage";
import SplineApp from "../components/New/SplineAnimate";
import SeventhPage from "../components/New/SeventhPage";
import dynamic from "next/dynamic";
import StackUp from "../components/StackUp";

import useMediaQuery from "../hooks/useMediaQuery";
import ThirdPage from "../components/New/ThirdPage";
import Alt from "../public/images/Alt1.jpg";

import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
const UserPop = dynamic(() => import("../components/New/UserPop"), {
  ssr: false,
});
const Speedometer = dynamic(() => import("../components/New/Speedometer"), {
  ssr: false,
});
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
  const [apiCalls, setApiCalls] = useState(9000);
  useEffect(() => {
    setTimeout(() => setBeh(true), 2);
    setInterval(() => {
      setApiCalls((prev) => {
        if (prev === 9400) return prev;
        return prev + 4;
      });
    }, 300);
  }, []);

  return (
    <div className="scroll-smooth z-30 w-full h-full font-lora items-center justify-center relative">
      <div className="bg"></div>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
      <FourthPage></FourthPage>
      <FifthPage></FifthPage>
      <div className="flex flex-col items-center relative justify-center h-screen overflow-hidden w-full bg-white">
        <div className="absolute top-20 lg:top-32 text-3xl lg:text-5xl font-Neue left-2 lg:left-10 z-30">
          Built to be to <span className="text-orangeLow">powerful</span> and{" "}
          <span className="text-blueLow">flexible</span>
        </div>
        <StackUp></StackUp>
      </div>
      <div className="h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute text-3xl z-40 font-Neue text-black hidden">
          Built to be secure
        </div>

        <div className="h-[400px] w-[400px] overflow-hidden border border-gray-400 ">
          <Image
            unoptimized={true}
            src={Alt.src}
            width={400}
            height={400}
            className=" object-cover w-[400px] h-[400px] scale-[1.5] "
            alt="Padlock Image"
          ></Image>
        </div>
        <div className=" text-3xl z-40 font-Inter text-black items-center justify-center ">
          {["E", "2", "E"].map((item, index) => {
            return (
              <div className="text-9xl " key={index}>
                {item}
              </div>
            );
          })}
          <div className=" text-xl">Encrypted</div>
        </div>
      </div>
      <div
        className="w-full  flex flex-col
      items-center justify-center  h-full relative overflow-hidden"
      >
        <div className="absolute top-20 font-Neue text-3xl lg:text-5xl lg:right-10 right-2 z-30 text-right w-4/5">
          Api's <span className="text-orangeLow">Used</span> by the industry's{" "}
          <span className="text-blueLow">best</span>
        </div>
        <div className="w-full">
          <SeventhPage></SeventhPage>
        </div>
      </div>
      <div className="h-screen w-full flex items-center justify-center bg-stone-100 overflow-hidden relative">
        <div className="absolute top-20 left-10 text-5xl font-Neue z-30">
          Approximately 9,400 <span className="text-orangeLow">daily</span>{" "}
          calls to our Api
        </div>
        <div className="api font-Neue text-[900px] text-white">{apiCalls}</div>
      </div>
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
