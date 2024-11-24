import React, { useState, useEffect } from "react";
import sliderImg1 from "../../public/home_slider/slider-1.jpg";
import sliderImg2 from "../../public/home_slider/slider-2.jpg";
import sliderImg3 from "../../public/home_slider/slider-3.jpg";

function HomePage() {
  const [activeBox, setActiveBox] = useState(-1);

  useEffect(() => {
    // Dastlab birinchi box uchun animatsiyani boshlash
    setActiveBox(0);

    const interval = setInterval(() => {
      setActiveBox((prev) => (prev + 1) % 4); // 3 ta box uchun
    }, 5000); // Har 5 soniyada almashadi

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="border">
        <img src={sliderImg1} alt="" />

        <div className="flex flex-row items-end justify-center gap-4">
          {[0, 1, 2, 3].map((boxIndex) => (
            <div
              key={boxIndex}
              className={`relative flex w-64 h-16 border-2 border-gray-500 transition-opacity duration-500`}
            >
              <div
                className={`${
                  activeBox === boxIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-[5000ms] ${
                    activeBox === boxIndex ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
