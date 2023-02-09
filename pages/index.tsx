import Head from "next/head";
import Image from "next/image";
import FourthPage from "../components/New/FourthPage";
import FifthPage from "../components/New/FifthPage";
import SecondPage from "../components/New/SecondPage";
import NewPage from "../components/New/NewPage";
import SeventhPage from "../components/New/SeventhPage";
import dynamic from "next/dynamic";
import StackUp from "../components/StackUp";
import HoverArrow from "../components/atom/hoverArr";
import Footer from "../components/New/Footer";
import SlantedArrow from "../public/Icon/SlantedArrow";
import ThreePage from "../components/New/ThreePage";
import useMediaQuery from "../hooks/useMediaQuery";
import ThirdPage from "../components/New/ThirdPage";
import Alt from "../public/images/Alt1.jpg";
import Experimental from "../components/New/Experimental";

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
  const [isHoverd, setIsHovered] = useState(false);
  const [isHoverd1, setIsHovered1] = useState(false);
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

  var bodyStyles = typeof document === "undefined" ? null : document.body.style;

  return (
    <div
      onMouseOver={() => {
        bodyStyles &&
          bodyStyles.setProperty("--cursor-color", "rgb(238, 19, 19)");
        bodyStyles?.setProperty("--blur", "3px");
        bodyStyles?.setProperty("--innerBlur", "2px");
        bodyStyles?.setProperty("--outerColor", "rgba(226, 79, 46, 0.4)");
      }}
      className="scroll-smooth dark-mode  z-30 w-full h-full font-lora items-center justify-center relative"
    >
      <div className="hidde">
        <div className="bg"></div>
        <SecondPage></SecondPage>
        <ThirdPage></ThirdPage>

        <FifthPage></FifthPage>
        <FourthPage></FourthPage>
        <Footer></Footer>
      </div>
      <div className="hidden relative">
        <div className="flex flex-col items-center relative justify-center stackH overflow-hidden w-full bg-white">
          <div className="absolute top-20 lg:top-32 text-3xl lg:text-4xl font-Neue left-2 lg:left-10 z-30">
            Built to be to <span className="text-gray-500">powerful</span> and{" "}
            <span className="">flexible</span>
            <button
              onMouseOver={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className="block p-2 rounded-full bg-black text-white text-base lg:text-base flex items-center justify-center"
            >
              Explor3 Arhictecture{" "}
              <HoverArrow
                initialFill="fill-green-500"
                hoverFill="fill-venomLime"
                size="24"
                hovered={isHoverd}
              ></HoverArrow>
            </button>
          </div>

          <StackUp></StackUp>
        </div>

        <div className="py-20 lg:pb-20 lg:pt-0 relative bg-white">
          <NewPage></NewPage>
        </div>

        <div
          className="w-full  flex flex-col
      items-center justify-center  h-full relative overflow-hidden bg-white"
        >
          <div className="absolute top-20 font-Neue text-3xl text-black lg:text-4xl lg:right-10 right-2 z-30 text-right w-4/5">
            Key partnerships with{" "}
            <span className="text-gray-500">companies</span> for unique services
            <div className=" flex items-end justify-end">
              <button
                onMouseOver={() => {
                  setIsHovered1(true);
                }}
                onMouseLeave={() => {
                  setIsHovered1(false);
                }}
                className="block p-2 rounded-full bg-black text-white text-base lg:text-base flex items-center justify-center"
              >
                Explor3 Services{" "}
                <HoverArrow
                  initialFill="fill-green-500"
                  hoverFill="fill-venomLime"
                  size="24"
                  hovered={isHoverd1}
                ></HoverArrow>
              </button>
            </div>
          </div>
          <div className="w-full ">
            <SeventhPage></SeventhPage>
          </div>
        </div>

        <div className="h-screen w-full hidden flex items-center justify-center bg-white overflow-hidden relative">
          <div className="absolute top-20 left-2 text-3xl font-Neue z-30  ">
            Approximately 9,400 <span className="">daily</span> calls to our Api{" "}
          </div>
          <div className="api font-Neue text-[200px] md:text-[400px] text-gray-200">
            {apiCalls}
          </div>
        </div>
        <div className="w-full h-screen bg-white relative">
          <ThreePage></ThreePage>{" "}
        </div>
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
