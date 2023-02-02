import { type } from "node:os";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SwipeableViews from "react-swipeable-views";
import Image from "next/image";
import { autoPlay } from "react-swipeable-views-utils";
import Link from "next/link";
import Face1 from "../public/images/Face1.jpg";
import Face2 from "../public/images/Face2.jpg";
import Face3 from "../public/images/Face3.jpg";
import Face4 from "../public/images/Face4.jpg";

type AutoPropsType = { index: number; setIndex: any };

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
  root: {
    position: "relative",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#FEA900",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
};

const heartIcon = (style: string, height = "24", width = "24") => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className={style}
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  );
};

export default function Auto(props: AutoPropsType) {
  const [index, setIndex] = useState(0);
  const autoPlayArray = [
    {
      button: "Formal Casual",
      name: "Gaming",
      text: (
        <p>
          <Image
            src={Face1.src}
            className="border rounded-lg"
            alt="Image"
            height={20}
            width={20}
          ></Image>
          Aisha liked your post{" "}
          {heartIcon("fill-red-500 inline ml-1 animate-pulse", "10", "10")}
        </p>
      ),
      gib: [2, 4, 2, 4],
    },

    {
      button: "TShirts",
      name: "Soccer",
      text: (
        <p>
          <Image
            className="border rounded-lg"
            src={Face2.src}
            alt="Image"
            height={20}
            width={20}
          ></Image>
          Femi commented on your gaming thread
        </p>
      ),
      gib: [4, 4, 2, 2],
    },
    {
      button: "Varsity",
      name: "Rendering",
      blue: true,
      text: (
        <p>
          <Image
            className="border rounded-lg"
            src={Face3.src}
            alt="Image"
            height={20}
            width={20}
          ></Image>
          Mike posted this right now
        </p>
      ),
      gib: [4, 4, 2, 2],
    },
  ];

  const gibber = (arr: number[]) => {
    return (
      <div className="">
        {arr.map((item, index) => {
          return (
            <div
              key={index}
              className={`animate-pulse h-${item.toString()} mb-2 bg-stone-100 rounded w-full border`}
            ></div>
          );
        })}
      </div>
    );
  };

  const trm = () => {
    return <div className="h-2 h-4 h-6 h-8 h-10"></div>;
  };

  return (
    <div className="relative flex flex-col items-center justify-end w-full ">
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={(index) => {
          setIndex((prev) => {
            return index;
          });
        }}
        interval={1000}
        enableMouseEvents={true}
        className="w-[250px] border border-l-0 rounded-br-3xl rounded-tr-3xl bg-white shadow-lg"
      >
        {autoPlayArray.map((item) => {
          return (
            <div
              key={item.name}
              className={`h-fit w-54 font-Neue text-sm p-4  rounded-2xl `}
            >
              <div className="font-Inter text-[9px]">{item.text}</div>
              {gibber(item.gib)}
            </div>
          );
        })}
      </AutoPlaySwipeableViews>
      <div className="flex space-x-8 absolute bottom-20 hidden">
        {autoPlayArray.map((item, indexA) => {
          return (
            <button
              key={indexA}
              onClick={() => {
                setIndex(indexA);
              }}
              className={`h-[13px]   border-gray-800 border ${
                indexA === index ? "bg-red-500 w-8" : "bg-black w-4"
              } duration-300`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
