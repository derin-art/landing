import { useEffect, useState, useLayoutEffect } from "react";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import PhoneIcon from "../../public/Icon/PhoneIcon";
import SpeedBanner from "../SpeedBanner";

function Speedometer() {
  const [needleVal, setNeedleVal] = useState(100);

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="font-Neue w-full h-2/5 absolute -bottom-1/3   flex flex-col relative overflow-hidden">
      <div className=" absolute  w-full">
        <SpeedBanner></SpeedBanner>
      </div>
      <ReactSpeedometer
        maxValue={300}
        value={200}
        needleColor="red"
        startColor="#1a1a1a"
        segments={3}
        endColor="#242424"
        fluidWidth={true}
        forceRender={true}
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
    </div>
  );
}

export default React.memo(Speedometer);
