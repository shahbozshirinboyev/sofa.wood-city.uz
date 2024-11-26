import { useState, useEffect } from "react";
import "./CustomSlider.css";

function CustomSlider({ children }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 8000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };
  //   ==================================================================

  //   const [activeBox, setActiveBox] = useState(-1);

  //   useEffect(() => {
  //     setActiveBox(0);

  //     const interval = setInterval(() => {
  //       setActiveBox((prev) => (prev + 1) % 4); // 3 ta box uchun
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <>
      <div
        className="container__slider"
        // onMouseEnter={AutoPlayStop}
        // onMouseLeave={AutoPlayStart}
      >
        {children.map((item, index) => {
          return (
            <div
              key={index}
              className={
                "slider__item slider__item-active-" + (activeIndex + 1)
              }
            >
              {item}
            </div>
          );
        })}

        {/* <div className="container__slider__links">
          {children.map((item, index) => {
            return (
              <button
                key={index}
                className={
                  activeIndex === index
                    ? "container__slider__links-small container__slider__links-small-active"
                    : "container__slider__links-small"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(index);
                }}
              ></button>
            );
          })}
        </div> */}

        {/* <button
          className="slider__btn-next"
          onClick={(e) => {
            e.preventDefault();
            slideNext();
          }}
        >
          {">"}
        </button> */}

        {/* <button
          className="slider__btn-prev"
          onClick={(e) => {
            e.preventDefault();
            slidePrev();
          }}
        >
          {"<"}
        </button> */}
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0">
          {[
            {
              name: "Самый большой каталог мебели",
              icon: "bi-compass",
            },
            {
              name: "Найдется вся мебель",
              icon: "bi-search",
            },
            {
              name: "Оценка изделий независимыми экспертами",
              icon: "bi-bar-chart",
            },
            {
              name: "Реальные отзывы из популярных соцсетей",
              icon: "bi-chat-dots",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative transition-all duration-300 text-maincolor ${
                activeIndex === index ? "bg-maincolor bg-opacity-10" : ""
              }`}
            >
              <div
                className={`flex cursor-pointer`}
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                <div className="flex justify-center items-center p-4">
                  <i className={`bi ${item.icon} text-[24px] md:text-[35px]`}></i>
                </div>
                <div className="w-[220px] flex justify-start items-center">
                  <p className="text-[13px] md:text-[16px]">
                    {" "}{item.name}{" "}
                  </p>
                </div>
              </div>
              <div
                className={`${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className={`absolute bottom-0 left-0 h-[4px] bg-maincolor transition-all duration-[5000ms] ${
                    activeIndex === index ? "w-full" : "w-0"
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

export default CustomSlider;
