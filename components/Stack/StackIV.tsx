import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Ecom1 from "../../public/images/Ecom1.png";
import { motion } from "framer-motion";
import Ecom2 from "../../public/images/Ecom2.png";
import portP3 from "../../public/images/portP3.png";
import Image from "next/image";
import { useState } from "react";

export default function StackIV() {
  const vas = [
    { name: "VERT ", first: "e-com", img: Ecom1, p: -5, b: true },
    { name: "Collection", first: "Red", img: Ecom2, p: 5, b: false },
    { name: "Yellow", first: "Mountain", img: portP3, p: 10, b: true },
  ];
  const [hover1, setHover1] = useState("");
  return (
    <div className="h-fit w-full bg-white relative flex  justify-around py-20 ">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <span className="absolute font-loraI text-5xl w-48 h-48  xl:flex border-2 items-center justify-center rounded-full border-black">
          i
        </span>{" "}
        <motion.div
          viewport={{ once: true }}
          className="font-lora text-black 2xl:text-7xl xl:text-7xl mt-8 lg:text-7xl"
        >
          Latest Projects
        </motion.div>
        <motion.div className="w-full mt-20">
          <ParallaxProvider>
            {vas.map((item) => {
              return (
                <Parallax
                  key={item.name}
                  speed={item.p}
                  style={{ height: "80vh" }}
                  className="w-full p-4 "
                >
                  <div
                    className={`h-fit flex w-full  ${
                      item.b && "flex-row-reverse"
                    }`}
                  >
                    <div className="relative flex">
                      <button
                        onMouseOver={() => {
                          setHover1(item.name);
                        }}
                        onMouseLeave={() => {
                          setHover1("");
                        }}
                        className={`2xl:text-5xl text-4xl font-lora  self-start text-black ${
                          item.b ? "-left-20" : "-right-20"
                        }`}
                      >
                        <span className="font-loraI">{item.first}</span>{" "}
                        {item.name}
                      </button>
                      <motion.div
                        className=""
                        style={{ display: "inline-block", overflow: "hidden" }}
                      >
                        <motion.img
                          src={item.img.src}
                          initial={{
                            objectPosition: "0% 0%",
                            objectFit: "cover",
                          }}
                          whileInView={{
                            objectPosition: "50% 50%",
                            objectFit: "cover",
                          }}
                          animate={
                            hover1 === item.name
                              ? {
                                  scale: 1.3,
                                }
                              : { scale: 1 }
                          }
                          onMouseOver={() => {
                            setHover1(item.name);
                          }}
                          onMouseLeave={() => {
                            setHover1("");
                          }}
                          transition={{ duration: 1 }}
                          viewport={{ once: false }}
                          alt="test"
                          className={`2xl:w-[400px] 2xl:h-[400px] object-cover xl:w-[300px] xl:h-[300px] lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] rounded-3xl border`}
                        ></motion.img>
                      </motion.div>
                    </div>
                  </div>
                </Parallax>
              );
            })}
          </ParallaxProvider>
        </motion.div>
      </div>
    </div>
  );
}

/* ${
                        !item.b ? "object-left" : "object-center" */
