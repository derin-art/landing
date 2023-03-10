import { useEffect, useState } from "react";
import MenuIcon from "../public/Icon/MenuIcon";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    in: {
      opacity: 1,

      transition: {
        duration: 0.55,
      },
    },
  };
  const randoms = ["Contact", "Products", "About", "Api"];
  const things = ["menu"];
  return (
    <div className="flex relative  p-2 font-Arsenal text-sm bg-transparent items-center justify-center ">
      <div className="flex  space-x-3 absolute right-4  top-2 text-xl z-50">
        {things.map((item) => {
          return (
            <button
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              className="hover:text-purple-500 duration-300 text-slate-400"
              key={item}
            >
              {!open ? item : "close"}
            </button>
          );
        })}
      </div>
      <div className="absolute left-4 top-2 text-gray-400 font-loraI text-5xl">
        i
      </div>
      <AnimatePresence>
        <motion.div
          key={open.toString()}
          variants={variants}
          animate="in"
          initial="out"
          exit={"out"}
          className="w-full z-10  absolute top-0  flex items-center justify-center "
        >
          {open && (
            <div
              className="flex items-center justify-center w-full"
              style={{ height: "100vh" }}
            >
              <motion.div
                className=" lg:w-4/5 lg:h-4/5 w-full h-full z-10 backdrop-blur-sm  bg-black"
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ opacity: 1, y: "-100%" }}
                  animate={
                    open ? { opacity: 1, y: 0 } : { opacity: 1, y: "-100%" }
                  }
                  transition={{ duration: 0.7 }}
                  className="font-loraI  h-full w-full flex 2xl:p-14 xl:p-8 lg:flex-row flex-col items-center lg:items-start p-8 justify-between lg:p-6"
                >
                  <div className="flex flex-col 2xl:text-7xl xl:text-6xl lg:text-6xl text-2xl font-lora text-white">
                    {randoms.map((item) => {
                      return (
                        <motion.button
                          key={item}
                          className="text-left hover:text-slate-400 duration-300 lg:p-0 p-4 lg:text-left text-center"
                        >
                          {item}
                        </motion.button>
                      );
                    })}
                  </div>
                  <div className="text-white 2xl:text-7xl xl:text-6xl lg:text-6xl">
                    iNDIGO
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
