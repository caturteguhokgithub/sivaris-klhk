import { useState, useEffect } from "react";

export interface ISize {
 width: number;
 height: number;
}

export const useWindowSize = () => {
 const [windowSize, setWindowSize] = useState({
  width: 0,
  height: 0,
 });

 useEffect(() => {
  function handleResize() {
   if (window) {
    const newSize: ISize = {
     width: window?.innerWidth | 0,
     height: window?.innerHeight | 0,
    };
    setWindowSize(newSize);
   }
  }
  window.addEventListener("resize", handleResize);
  handleResize();

  return () => window.removeEventListener("resize", handleResize);
 }, []);

 return windowSize;
};
