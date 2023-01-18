import { motion } from "framer-motion";
import { useState } from "react";
import DropBoxIcon from "../../public/Icon/dropBoxIcon";
import GoogleIcon from "../../public/Icon/googleIcon";
import InstagramIcon from "../../public/Icon/instagramIcon";
import AmazonIcon from "../../public/Icon/amazonIcon";

export default function StackIII() {
  const companies = [
    { name: "Google", icon: GoogleIcon },
    { name: "DropBox", icon: DropBoxIcon },
    { name: "Instagram", icon: InstagramIcon },
    {
      name: "Amazon",
      icon: AmazonIcon,
    },
  ];
  const [view, setView] = useState(false);
  const line = "Worked with";
  return (
    <div className="h-screen w-full  font-inter lg:text-7xl text-2xl text-black bg-white">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-4/5 h-4/5  flex flex-col items-center justify-center">
          <motion.div
            className="w-full"
            style={{ display: "inline-block", overflow: "hidden" }}
          >
            <span className="blurry-gradient "></span>
            <motion.div
              initial={{ opacity: 1, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="  lg:mb-0 text-right mb-4 w-full text-5xl lg:text-6xl xl:text-7xl"
            >
              We&apos;ve <div>Worked</div>
              <div>With</div>
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col space-y-4 text-left w-full">
            {companies.map((company) => {
              return (
                <motion.div
                  key={company.name}
                  style={{ display: "inline-block", overflow: "hidden" }}
                >
                  <motion.div
                    initial={{ opacity: 1, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-3xl flex items-center lg:text-4xl xl:text-6xl p-1"
                  >
                    {company.name}
                    <span>
                      {company.icon("fill-zinc-300 ml-1", "20", "20")}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
