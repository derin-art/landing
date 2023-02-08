import { motion } from "framer-motion";

export default function Footer() {
  const buttons = ["FAQ", "SOCIALS", "LEGAL"];
  var bodyStyles = typeof document === "undefined" ? null : document.body.style;
  return (
    <footer
      onMouseOver={() => {
        bodyStyles &&
          bodyStyles.setProperty("--cursor-color", "rgb(226, 46, 46)");
      }}
      onMouseLeave={() => {
        bodyStyles &&
          bodyStyles.setProperty("--cursor-color", "rgb(226, 46, 46)");
      }}
      className=" h-screen w-full flex flex-col items-center  justify-center xl:justify-start  "
    >
      <div className=" font-Neue flex flex-col  space-y-4 xl:flex-row xl:w-4/5 xl:justify-between xl:pt-32 lg:hidden">
        <div className="flex flex-col space-y-4 xl:space-y-10">
          {buttons.map((item) => {
            return (
              <button
                className="xsm:text-6xl text-5xl border p-4 xl:text-8xl  text-venomLime rounded-full w-fit px-4 border-gray-500"
                key={item}
              >
                {item}
              </button>
            );
          })}
        </div>
        <button className="xsm:text-6xl text-5xl xl:text-8xl px-4 border p-4 bg-teal-600 text-white border-gray-600 rounded-full h-fit">
          NewsLetter
        </button>
      </div>

      <div className=" font-Neue lg:flex flex-col  space-y-4 xl:flex-row-reverse xl:w-4/5 xl:justify-between xl:pt-32 hidden">
        <div className="flex flex-col space-y-4 xl:space-y-10  items-end">
          {buttons.map((item) => {
            return (
              <motion.button
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                }}
                key={item}
                className="xsm:text-6xl text-5xl border p-2 xl:text-7xl border-gray-300  text-venomLime rounded-full w-fit px-4 border"
              >
                <motion.div
                  initial={{ opacity: 1, y: "100%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, type: "spring", mass: 3 }}
                  className=""
                >
                  {item}
                </motion.div>
              </motion.button>
            );
          })}
        </div>
        <button className="xsm:text-6xl text-5xl xl:text-7xl px-4 border p-2 border-teal-600 text-black  rounded-full h-fit">
          NewsLetter
        </button>
      </div>
    </footer>
  );
}
