import Blog1 from "../../public/images/Blog/1.jpg";
import Blog2 from "../../public/images/Blog/2.jpg";
import Blog3 from "../../public/images/Blog/3.jpg";
import Blog4 from "../../public/images/Blog/4.jpg";
import Blog5 from "../../public/images/Blog/5.jpg";
import Image from "next/image";
import { useState } from "react";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import SlantedArrow from "../../public/Icon/SlantedArrow";
import HoverArrow from "../atom/hoverArr";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function NewPage() {
  const [isHoverd, setIsHovered] = useState(false);
  const images = [
    { img: Blog1, name: "Updates from this week " },
    { img: Blog2, name: "Learn about Ignite's Desktop plugins" },
    { img: Blog3, name: "Our work place culture" },
    { img: Blog4, name: "Learn about our partnership with key companies" },
    { img: Blog5, name: "Documentation 2.0: Sleeker and Updated" },
  ];
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full h-fit bg-white flex flex-col lg:p-4 items-center justify-center   lg:h-fit lg:py-24 ">
      <div className="p-2 self-start">
        <button
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="p-2  bg-black text-white self-start flex items-center justify-center font-Neue text-base rounded-full lg:text-base lg:px-4 lg:mb-2"
        >
          Explor3 B1ogs{" "}
          <HoverArrow
            initialFill="fill-green-500"
            hoverFill="fill-venomLime"
            size="24"
            hovered={isHoverd}
          ></HoverArrow>
        </button>
      </div>
      <div className="flex flex-col w-full space-y-1 lg:hidden">
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={(index) => {
            setIndex((prev) => {
              return index;
            });
          }}
          interval={2500}
          enableMouseEvents={true}
        >
          {images.map((item) => {
            return (
              <div className="w-full">
                <div className="w-full relative">
                  {" "}
                  <Image
                    className="object-cover w-full h-[200px] border"
                    src={item.img.src}
                    alt={item.name}
                    key={item.name}
                    width={400}
                    height={400}
                  ></Image>
                  <div className="fadeIII absolute bottom-0 h-10 w-full text-white text-sm font-Inter p-2">
                    {item.name}
                  </div>
                </div>
              </div>
            );
          })}
        </AutoPlaySwipeableViews>
        <div className="p-2">
          <button className="font-Neue p-2 px-4 border-gray-600 text-black rounded-none border">
            Read More
          </button>
        </div>
      </div>
      <div className="lg:grid xl:text-sm lg:text-xs grid-row-3  gap-10 grid-cols-4 w-full hidden  justify-between">
        <div className="...  col-span-1 row-span-3 relative h-fit ">
          <Image
            src={images[0].img}
            height={400}
            width={400}
            alt={images[0].name}
            className="w-full"
            unoptimized={true}
          ></Image>
          <div className="fadeIII absolute bottom-0 h-fit w-full text-white font-Inter p-2">
            {images[0].name}
          </div>
          <div className="text-[200px] text-venomLime xl:text-[250px] absolute -bottom-32 xl:-bottom-40">
            @
          </div>
        </div>
        <div className="...  row-span-3 relative h-fit">
          {" "}
          <Image
            src={images[1].img}
            height={400}
            width={400}
            alt={images[1].name}
            className="w-full"
            unoptimized={true}
          ></Image>
          <div className="fadeIII absolute bottom-0 h-fit w-full text-white  font-Inter p-2">
            {images[1].name}
          </div>
        </div>
        <div className="relative h-fit  ">
          {" "}
          <Image
            src={images[2].img}
            height={300}
            width={300}
            alt={images[2].name}
            className="w-full"
            unoptimized={true}
          ></Image>
          <div className="fadeIII absolute bottom-0 h-fit w-full text-white  font-Inter p-2">
            {images[2].name}
          </div>
          <div className="absolute ">
            {SlantedArrow("fill-black", "100%", "100%")}
          </div>
        </div>

        <div className=" relative h-fit">
          {" "}
          <Image
            src={images[3].img}
            height={300}
            width={300}
            alt={images[3].name}
            className="w-full"
            unoptimized={true}
          ></Image>
          <div className="fadeIII absolute bottom-0 h-fit w-full text-white  font-Inter p-2">
            {images[3].name}
          </div>
        </div>
      </div>
    </div>
  );
}
