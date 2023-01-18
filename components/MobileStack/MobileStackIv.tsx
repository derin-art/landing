import Ecom1 from "../../public/images/Ecom1.png";
import { motion } from "framer-motion";
import Ecom2 from "../../public/images/Ecom2.png";
import portP3 from "../../public/images/portP3.png";
import Image from "next/image";

const vas = [
  { name: "VERT ", first: "e-com", img: Ecom1, p: -5, b: true },
  { name: "Collection", first: "Red", img: Ecom2, p: 5, b: false },
  { name: "Yellow", first: "Mountain", img: portP3, p: 10, b: true },
];
export default function MobileStackIV() {
  return (
    <div className="h-fit w-full bg-white flex flex-col text-4xl items-center">
      <div className="font-lora mb-20">Stuff we&apos;ve worked on</div>
      <div className="flex flex-col items-center w-full font-inter">
        {vas.map((item) => {
          return (
            <div key={item.name} className="h-fit mb-4 p-6 relative ">
              <Image
                width={200}
                alt={item.name}
                height={200}
                className="object-cover w-full h-[250px] rounded-lg "
                unoptimized={true}
                src={item.img.src}
              ></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
}
