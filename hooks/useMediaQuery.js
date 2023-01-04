import { useState, useEffect } from "react";

function getWindowDimensions() {
  let width;
  let height;
  if (typeof window !== "undefined") {
    height = window.innerHeight;
    width = window.innerWidth;
  }

  return {
    width,
    height,
  };
}

export default function useMediaQuery() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
