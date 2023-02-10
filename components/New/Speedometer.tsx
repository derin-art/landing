import { useEffect, useState, useLayoutEffect } from "react";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import PhoneIcon from "../../public/Icon/PhoneIcon";
import SpeedBanner from "../SpeedBanner";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

function Speedometer() {
  const { width, height } = useMediaQuery();
  const isMobile = width ? width < 1250 : true;
  const [needleVal, setNeedleVal] = useState(100);

  const [size, setSize] = useState([0, 0]);
  const setVal = () => {
    let device = "phone";
    size[0];
    console.log("sdsd", size);

    if (width ? width > 1020 : false) {
      device = "tab";
    }
    if (width ? width > 1250 : false) {
      device = "laptop";
    }
    if (device === "phone") {
      setNeedleVal(150);
    } else if (device === "tab") {
      setNeedleVal(100);
    } else {
      setNeedleVal(200);
    }
  };

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      setVal();
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <motion.div
      onViewportEnter={() => {
        console.log("e");
        setVal();
      }}
      onViewportLeave={() => {
        console.log("e");
        if (isMobile) return;
        setNeedleVal(0);
      }}
      viewport={{ once: isMobile ? true : false }}
      className="font-Neue w-full h-3/5 absolute   flex flex-col relative overflow-hidden"
    >
      <ReactSpeedometer
        maxValue={300}
        value={needleVal}
        needleColor="red"
        startColor="#1d1d1e"
        segments={3}
        endColor="#242424"
        fluidWidth={true}
        forceRender={true}
        needleTransitionDuration={1400}
        customSegmentLabels={[
          {
            color: "#555",
          },
          {
            color: "#555",
          },
          {
            color: "#555",
            fontSize: "19px",
          },
        ]}
      ></ReactSpeedometer>
    </motion.div>
  );
}

export default React.memo(Speedometer);
