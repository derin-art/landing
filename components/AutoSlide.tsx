import { type } from "node:os";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Link from "next/link";

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

export default function Auto(props: AutoPropsType) {
  const [index, setIndex] = useState(0);
  const autoPlayArray = [
    {
      button: "Formal Casual",
      name: "SHIRTS",
    },

    {
      button: "TShirts",
      name: "T-SHIRTS",
    },
    {
      button: "Varsity",
      name: "Billy",
      blue: true,
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
        className="w-[250px] border rounded-br-2xl rounded-tr-2xl bg-white"
      >
        {autoPlayArray.map((item) => {
          return (
            <div
              key={item.name}
              className={`h-fit w-54 font-Neue text-sm p-2  rounded-2xl `}
            >
              <div className="font-Inter text-xs">{item.name}</div>
              {gibber([2, 8, 4, 6])}
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
