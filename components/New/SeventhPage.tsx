import GoogleIcon from "../../public/Icon/googleIcon";
import InstagramIcon from "../../public/Icon/instagramIcon";
import DropBoxIcon from "../../public/Icon/dropBoxIcon";
import AmazonIcon from "../../public/Icon/amazonIcon";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function SeventhPage() {
  const stacks = [
    { name: "GoogleIcon", icon: GoogleIcon },
    { name: "Amazon", icon: AmazonIcon },
    { name: "DropBoxIcon", icon: DropBoxIcon },
    { name: "Instagram", icon: InstagramIcon },
  ];
  return (
    <div className="sContainer marScreen overflow-hidden mb-6">
      <Marquee speed={100} className=" flex flex-col  ">
        <motion.div className="flex">
          {stacks.map((Item, index) => {
            return (
              <div
                className={`p-4 rounded-3xl border border-gray-400 bg-opacity-25 bg-white flex items-center justify-center stackDivC`}
                key={Item.name}
              >
                {Item.icon("fill-blueHigh", "60", "60")}
              </div>
            );
          })}
        </motion.div>
        <motion.div className="border hidden">
          {stacks.map((Item, index) => {
            return (
              <div
                className={`p-4 border rounded-3xl bg-opacity-25 bg-white flex items-center justify-center stackDivC`}
                key={Item.name}
              >
                {Item.icon("fill-blueHigh", "60", "60")}
              </div>
            );
          })}
        </motion.div>
      </Marquee>
    </div>
  );
}
