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
      <div className="flex lg:hidden space-x-4 w-full h-full relative items-center ">
        <Image
          src={Face3.src}
          className="  z-30 absolute left-10 top-2/4 rounded-lg"
          width={30}
          height={30}
          unoptimized={true}
          alt="User"
          ref={startRef}
          id="1"
        ></Image>
        <Xarrow
          start={"2"} //can be react ref
          end={"1"} //or an id
          color="#4cf7029e"
          path="smooth"
          showHead={false}
          showTail={false}
          curveness={2}
          dashness={true}
        />
        <Xarrow
          start={"3"} //can be react ref
          end={"2"} //or an id
          color="#4cf7029e"
          path="smooth"
          dashness={true}
          curveness={0.5}
          showHead={false}
          showTail={false}
        />
        <Image
          src={Face1.src}
          id="2"
          className="absolute right-14 top-1/4 rounded-lg"
          width={30}
          height={30}
          ref={middleRef}
          unoptimized={true}
          alt="User"
        ></Image>
        {GlobeIcon("fill-ultraGray  ", "w-full", "w-full")}

        <Image
          ref={endRef}
          id="3"
          src={Face2.src}
          className=" absolute right-1/3 bottom-20 rounded-lg"
          width={30}
          height={30}
          unoptimized={true}
          alt="User"
        ></Image>
      </div>
      <div className="lg:flex space-x-4 hidden w-full h-full relative items-center ">
        <Image
          src={Face3.src}
          className="  z-30 absolute left-1/3 top-2/4 rounded-lg"
          width={40}
          height={40}
          unoptimized={true}
          alt="User"
          ref={startRef1}
          id="4"
        ></Image>
        <Xarrow
          start={startRef1} //can be react ref
          end={middleRe3} //or an id
          color="#4cf7029e"
          path="smooth"
          showHead={false}
          showTail={false}
          curveness={1.3}
          dashness={true}
        />
        <Xarrow
          start={middleRe3} //can be react ref
          end={endRef2} //or an id
          color="#4cf7029e"
          path="smooth"
          dashness={true}
          curveness={0.5}
          showHead={false}
          showTail={false}
        />
        <Image
          src={Face1.src}
          id="5"
          className="absolute right-1/4  top-1/4 rounded-lg"
          width={40}
          height={40}
          ref={middleRe3}
          unoptimized={true}
          alt="User"
        ></Image>
        {GlobeIcon("fill-ultraGray hidden xs:block  ", "w-full", "w-full")}

        <Image
          ref={endRef2}
          id="6"
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
