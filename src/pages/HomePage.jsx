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
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${sliderImg1})` }}
      >
        <div className="absolute top-[100%] md:top-[82%] lg:top-[87%] w-full flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border">
            {[0, 1, 2, 3].map((boxIndex) => (
              <div
                key={boxIndex}
                className={`relative w-auto h-auto transition-opacity duration-500`}
              >
                <div className="flex bg-white border border-gray-100">
                  <div className="flex justify-center items-center p-4">
                    <i className="bi bi-compass text-[24px] md:text-[35px]"></i>
                  </div>
                  <div className="w-[180px] flex justify-center items-center">
                    <p className="text-[13px] md:text-[16px]">
                      {" "}Самый большой каталог мебели{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    activeBox === boxIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    className={`absolute bottom-0 left-0 h-[4px] bg-maincolor transition-all duration-[5000ms] ${
                      activeBox === boxIndex ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
