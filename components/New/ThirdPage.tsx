import Face1 from "../../public/images/Face1.jpg";
import Face2 from "../../public/images/Face2.jpg";
import Face3 from "../../public/images/Face3.jpg";
import Face4 from "../../public/images/Face4.jpg";
import Face5 from "../../public/images/Face5.jpg";
import dynamic from "next/dynamic";
const UserPop = dynamic(() => import("./UserPop"), { ssr: false });

const UserPopLg = dynamic(() => import("./UserPopLg"), { ssr: false });
import Image from "next/image";
import GlobeIcon from "../../public/Icon/globeIcon";
import { useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function ThirdPage() {
  const images = [
    [
      { img: Face3, name: "Face3" },
      { img: Face4, name: "Face4" },
    ],
    [
      { img: Face1, name: "Face1" },
      { img: Face2, name: "Face2" },
    ],
  ];
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const { width, height } = useMediaQuery();

  const isMobile = width ? width < 1023 : true;

  return (
    <div className="h-screen w-full bg-ultraBlack text-venomLime flex items-center flex-col justify-center relative overflow-hidden relative">
      <div className="font-Neue text-3xl mb-4 p-8 ml-6 flex lg:hidden flex-col  lg:text-6xl lg:w-3/5  w-screen lg:text-left absolute top-10">
        {["Connect", "around the", "Globe"].map((wrd, index) => {
          return (
            <div
              className={`${
                index === 1 ? "self-start border-2 text-white" : "self-end "
              } p-2 px-4 rounded-full border-gray-600`}
              key={index}
            >
              {wrd}
            </div>
          );
        })}
      </div>

      <div className="  lg:hidden  flex flex-col  lg:items-center justify-between ">
        <div className=" w-screen flex items-center justify-center -bottom-18  absolute -left-2 ">
          {isMobile && <UserPop key={"first"}></UserPop>}
        </div>

        <div className="flex   space-x-2   lg:hidden hidden">
          {images.map((col, index) => {
            return (
              <div key={index} className={`${index === 1 ? "mt-8" : ""}  `}>
                {col.map((img) => {
                  return (
                    <div key={img.name} className="">
                      <Image
                        src={img.img.src}
                        key={img.name}
                        width={120}
                        height={120}
                        alt="User Image"
                        unoptimized={true}
                        className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] border rounded-3xl shadow-md mb-2 border-gray-300"
                      ></Image>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:flex hidden   space-x-2 items-center justify-center">
        <motion.div className="absolute -left-1/4 w-full -bottom-2/4">
          {!isMobile && <UserPopLg></UserPopLg>}
        </motion.div>

        <div className="font-Neue z-30 text-white flex flex-col absolute w-2/5 xl:w-3/5 text-6xl right-10 xl:left-none top-20  text-right">
          Connect{" "}
          <div className="p-2 border rounded-full text-left px-4 border-gray-600">
            Around{" "}
          </div>
          <span className="text-venomLime">the Globe</span>
        </div>

        <div className="flex absolute right-4 space-x-4 hidden">
          {" "}
          {images.map((col, index) => {
            return (
              <div key={index} className={`${index === 1 ? "mt-20" : ""}  `}>
                {col.map((img) => {
                  return (
                    <div key={img.name} className="">
                      <Image
                        src={img.img.src}
                        key={img.name}
                        width={120}
                        height={120}
                        alt="User Image"
                        unoptimized={true}
                        className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border rounded-3xl shadow-md mb-2 border-gray-300"
                      ></Image>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
