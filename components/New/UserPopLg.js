import Face1 from "../../public/images/Face1.jpg";
import Face2 from "../../public/images/Face2.jpg";
import Face3 from "../../public/images/Face3.jpg";
import Face4 from "../../public/images/Face4.jpg";
import Face5 from "../../public/images/Face5.jpg";
import LeaderLine from "react-leader-line";
import { useEffect, useRef, forwardRef, useState } from "react";
import GlobeIcon from "../../public/Icon/globeIcon";
import Image from "next/image";
import dynamic from "next/dynamic";

const Xarrow = dynamic(() => import("react-xarrows"), {
  ssr: false,
});

export default function UserPop() {
  const startRef = useRef(null);
  const endRef = useRef(null);
  const middleRef = useRef(null);
  const startRef1 = useRef(null);
  const endRef2 = useRef(null);
  const middleRe3 = useRef(null);
  const images = [
    { img: Face3, name: "Face3" },
    { img: Face4, name: "Face4" },

    { img: Face1, name: "Face1" },
    { img: Face2, name: "Face2" },
  ];

  useEffect(() => {
    /*  const lineOptions = {
      startPlug: "disc",
      endPlug: "behind",
      dash: { animation: true },
      color: "#4cf7029e",
    };

    new LeaderLine(
      startRef.current,
      endRef.current,

      lineOptions
    );

    new LeaderLine(middleRef.current, endRef.current, lineOptions); */
  }, []);

  return (
    <div className="w-full h-full">
      <div className="lg:flex space-x-4 hidden w-full h-full relative items-center ">
        <Image
          src={Face3.src}
          className="  z-30 absolute left-1/3 top-2/4 rounded-lg"
          width={40}
          height={40}
          unoptimized={true}
          alt="User"
          id="4LT"
        ></Image>
        <Xarrow
          start={"4LT"} //can be react ref
          end={"5LT"} //or an id
          color="#4cf7029e"
          path="smooth"
          showHead={false}
          showTail={false}
          curveness={1.3}
          dashness={true}
        />
        <Xarrow
          start={"5LT"} //can be react ref
          end={"6LT"} //or an id
          color="#4cf7029e"
          path="smooth"
          dashness={true}
          curveness={0.5}
          showHead={false}
          showTail={false}
        />
        <Image
          src={Face1.src}
          id="5LT"
          className="absolute right-1/4  top-1/4 rounded-lg"
          width={40}
          height={40}
          unoptimized={true}
          alt="User"
        ></Image>
        {GlobeIcon("fill-ultraGray hidden xs:block  ", "100%", "100%")}

        <Image
          id="6LT"
          src={Face2.src}
          className=" absolute right-1/3 rounded-lg"
          width={40}
          height={40}
          unoptimized={true}
          alt="User"
        ></Image>
      </div>
    </div>
  );
}
