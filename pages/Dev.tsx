import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import DevThree from "../components/DevThree";
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

import useMediaQuery from "../hooks/useMediaQuery";
import ThirdPage from "../components/New/ThirdPage";
import Alt from "../public/images/Alt1.jpg";
import Experimental from "../components/New/Experimental";

const ThreePage = dynamic(() => import("../components/New/ThreePage"), {
  ssr: false,
});

export default function Dev() {
  const [isHoverd, setIsHovered] = useState(false);
  const [isHoverd1, setIsHovered1] = useState(false);
  const [load, setLoad] = useState(false);

  const [apiCalls, setApiCalls] = useState(9000);
  useEffect(() => {
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
          bodyStyles.setProperty("--cursor-color", "rgb(105,105,105)");
        bodyStyles?.setProperty("--blur", "0px");
        bodyStyles?.setProperty("--innerBlur", "0px");
        bodyStyles?.setProperty("--outerColor", "rgba(105,105,105, 0.4)");
      }}
      className="relative scroll-smooth dark-mode z-30 w-full h-full"
    >
      <div className="">
        <div className="flex flex-col  overflow-hidden relative h-screen w-full bg-black text-white items-center justify-center text-4xl font-Neue">
          <DevThree></DevThree>
          <div className="absolute text-white font-Neue text-9xl">
            <div>
              Ignite Dev<span className="text-venomLime">.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sticky top-0">
        <div className="flex flex-col  items-center  stackH  relative justify-center overflow-hidden w-full bg-white">
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
      </div>

      <div className="py-20 lg:pb-20 lg:pt-0 relative bg-white">
        <NewPage></NewPage>
      </div>

      <div
        className="w-full  flex flex-col
      items-center justify-center  h-full relative overflow-hidden bg-white"
      >
        <div className="absolute top-20 font-Neue text-3xl text-black lg:text-4xl lg:right-10 right-2 z-30 text-right w-4/5">
          Api's serving multiple large{" "}
          <span className="text-gray-500">companies</span>{" "}
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
              Explor3 Api's{" "}
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
      <div className="w-full h-fit bg-white relative overflow-hidden">
        <div className="flex flex-col h-full items-cen justify-center pb-20 lg:absolute z-40  lg:left-10 lg:w-full">
          {["Contact", "Legal", "Services", "Apply"].map((item) => {
            return (
              <div
                key={item}
                className="border-b lg:border-b-0 text-3xl font-Neue border-ultraGray  lg:text-4xl pl-2 lg:pl-0"
              >
                <button className="hover:text-gray-500 group duration-300 ">
                  {" "}
                  {item}{" "}
                  {SlantedArrow(
                    "fill-venomLime group-hover:fill-black duration-300"
                  )}{" "}
                </button>
              </div>
            );
          })}
        </div>
        {<ThreePage></ThreePage>}
      </div>
    </div>
  );
}
