import Xarrow from "react-xarrows";

export default function Experimental() {
  return (
    <div className="w-full h-screen  relative bg-white flex items-center justify-center">
      <Xarrow
        start={"main"} //can be react ref
        end={"11"} //or an id
        color="#4cf7029e"
        path="smooth"
        showHead={false}
        showTail={false}
        curveness={2}
        dashness={true}
      />
      <Xarrow
        start={"main"} //can be react ref
        end={"22"} //or an id
        color="#4cf7029e"
        path="smooth"
        showHead={false}
        showTail={false}
        curveness={2}
        dashness={true}
      />
      <Xarrow
        start={"main"} //can be react ref
        end={"33"} //or an id
        color="#4cf7029e"
        path="smooth"
        showHead={false}
        showTail={false}
        curveness={2}
        dashness={true}
      />
      <Xarrow
        start={"main"} //can be react ref
        end={"44"} //or an id
        color="#4cf7029e"
        path="smooth"
        showHead={false}
        showTail={false}
        curveness={2}
        dashness={true}
      />
      <div id="main" className="w-40 h-40 border border-red-500"></div>
      <div
        id="11"
        className="absolute w-40 h-40 border border-gray-800 right-96 bottom-6"
      ></div>
      <div
        id="22"
        className="absolute w-40 h-40 border border-gray-800 bottom-4 left-48"
      ></div>
      <div
        id="33"
        className="absolute w-40 h-40 border border-gray-800 top-48 right-2"
      ></div>
      <div
        id="44"
        className="absolute w-40 h-40 border border-gray-800 top-4 left-4"
      ></div>
    </div>
  );
}
