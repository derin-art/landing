import { useEffect, useState } from "react";
import MenuIcon from "../public/Icon/MenuIcon";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [open, setOpen] = useState(false);

  const userIcon = (style: string, width = "24", height = "24") => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={style}
        viewBox="0 0 16 16"
      >
        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
      </svg>
    );
  };

  const DevIcon = (style: string, width = "24", height = "24") => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        className={style}
        viewBox="0 0 16 16"
      >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
      </svg>
    );
  };

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
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <div className="flex relative  p-2 font-inter text-sm backdrop-blur-sm border-b border-ultraGray h-10 items-center justify-center ">
      <div
        className={`absolute h-screen w-full bg-black top-0 z-40 lg:hidden duration-300 ${
          !open ? "translate-x-full" : "-translate-x-0"
        }`}
      >
        <div className="pt-20 font-Neue p-4">
          <div className="text-white w-full text-base">Ignite</div>
          <div className="space-y-6 mt-2 flex flex-col text-zinc-400  text-base ">
            {randoms.map((item) => {
              return (
                <button
                  className="text-right border p-2 w-fit px-4 flex items-center justify-center self-end rounded-full border-ultraGray"
                  key={item}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 absolute right-4  top-2 text-sm z-50">
        {things.map((item) => {
          return (
            <button
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              className="duration-300 text-stone-400"
              key={item}
            >
              {!open ? item : "close"}
            </button>
          );
        })}
      </div>
      <div className="absolute left-4 top-[10px] font-Neue text-venomLime">
        Ignite
      </div>
      <div
        className={`duration-300 text-[10px] sm:text-xs absolute right-[178px] font-Neue ${
          isHome ? "text-gray-600" : "text-gray-400"
        }`}
      >
        CLICK HERE!
      </div>
      <Link
        className="absolute items-center right-[60px] z-10 flex w-2/4 max-w-[120px] top-1 font-Neue p-1  rounded-full"
        href={!isHome ? "/" : "/Dev"}
      >
        <div>{userIcon("mr-1 fill-green-400", "18", "18")}</div>
        <div className="w-full border flex items-center px-1 rounded-full py-1 border-gray-700">
          <div
            className={`w-4 h-4 bg-venomLime rounded-full duration-300 ${
              isHome ? "translate-x-0" : "translate-x-[40px]"
            }`}
          ></div>
        </div>
        <div>{DevIcon("ml-1 fill-green-400", "18", "18")}</div>
      </Link>

      <AnimatePresence>
        <motion.div
          key={open.toString()}
          variants={variants}
          animate="in"
          initial="out"
          exit={"out"}
          className="w-full z-10  absolute top-0  lg:flex items-center justify-center hidden  "
        >
          {open && (
            <div
              className="flex items-center justify-center w-full"
              style={{ height: "100vh" }}
            >
              <motion.div
                className=" lg:w-4/5 lg:h-4/5 w-full h-full z-10 backdrop-blur-sm  bg-ultraBlack"
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
                  className="font-Neue  h-full w-full flex 2xl:p-14 xl:p-8 lg:flex-row flex-col items-center lg:items-start p-8 justify-between lg:p-6"
                >
                  <div className="flex flex-col 2xl:text-6xl xl:text-6xl lg:text-6xl text-2xl font-Neue text-white">
                    {randoms.map((item) => {
                      return (
                        <motion.button
                          key={item}
                          className="text-left hover:text-slate-400 duration-300 p-4 mb-4 border-ultraGray flex items-center justify-start lg:text-left text-center rounded-full border"
                        >
                          {item}
                        </motion.button>
                      );
                    })}
                  </div>
                  <div className="text-white 2xl:text-7xl xl:text-6xl lg:text-6xl">
                    iGNITE
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
