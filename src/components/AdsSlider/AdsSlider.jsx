import { useState, useEffect } from "react";

function AdsSlider() {
    const children = [
        {
          imgURL: "/ads_slider/0.webp",
          imgAlt: "img-0",
        },
        {
          imgURL: "/ads_slider/1.webp",
          imgAlt: "img-1",
        },
        {
          imgURL: "/ads_slider/2.webp",
          imgAlt: "img-2",
        },
        {
          imgURL: "/ads_slider/3.webp",
          imgAlt: "img-3",
        },
        {
          imgURL: "/ads_slider/4.webp",
          imgAlt: "img-4",
        },
        {
          imgURL: "/ads_slider/5.webp",
          imgAlt: "img-5",
        },
        {
          imgURL: "/ads_slider/6.webp",
          imgAlt: "img-6",
        },
        {
          imgURL: "/ads_slider/7.webp",
          imgAlt: "img-7",
        },
        {
          imgURL: "/ads_slider/8.webp",
          imgAlt: "img-8",
        },
        {
          imgURL: "/ads_slider/9.webp",
          imgAlt: "img-9",
        },
        {
          imgURL: "/ads_slider/10.webp",
          imgAlt: "img-10",
        },
        {
          imgURL: "/ads_slider/11.webp",
          imgAlt: "img-11",
        },
        {
          imgURL: "/ads_slider/12.webp",
          imgAlt: "img-12",
        },
        {
          imgURL: "/ads_slider/13.webp",
          imgAlt: "img-13",
        },
        {
          imgURL: "/ads_slider/14.webp",
          imgAlt: "img-14",
        },
      ];
    
      const [activeIndex, setActiveIndex] = useState(0);
      const [slideDone, setSlideDone] = useState(true);
      const [timeID, setTimeID] = useState(null);
    
      useEffect(() => {
        if (slideDone) {
          setSlideDone(false);
          setTimeID(
            setTimeout(() => {
              slideNext();
              setSlideDone(true);
            }, 5000)
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
  return (
    <div
    className="relative w-[100%] p-0 overflow-hidden flex justify-start items-center flex-row flex-nowrap bg-black"
    onMouseEnter={AutoPlayStop}
    onMouseLeave={AutoPlayStart}
  >
    {children.map((image, index) => {
      return (
        <div
          className="box-border min-w-[100%] h-auto overflow-hidden object-cover translate-x-0 transition-all duration-300 ease-in"
          key={index}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <img
            key={index}
            src={image.imgURL}
            alt={image.imgAlt}
            className="w-[100%] h-auto"
          />
        </div>
      );
    })}

    <div className="absolute bottom-[5%] left-[50%] -translate-x-[50%]">
      {children.map((item, index) => {
        return (
          <button
            key={index}
            className={`relative w-[8px] h-[8px] p-0 rounded-[50%] outline-none mx-[2px] transition-all duration-300 ease-in ${
              activeIndex === index ? "bg-black" : "bg-white"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}
          ></button>
        );
      })}
    </div>

    <button
      className="outline-none border-0 text-black active:text-white rounded-full w-[35px] h-[35px] text-[18px] flex justify-center items-center bg-white p-2 absolute right-2"
      onClick={(e) => {
        e.preventDefault();
        slideNext();
      }}
    >
      <i className="bi bi-chevron-right flex justify-center items-center"></i>
    </button>
    <button
      className="outline-none border-0 text-black active:text-white rounded-full w-[35px] h-[35px] text-[18px] flex justify-center items-center bg-white p-2 absolute left-2"
      onClick={(e) => {
        e.preventDefault();
        slidePrev();
      }}
    >
      <i className="bi bi-chevron-left flex justify-center items-center"></i>
    </button>
  </div>
  )
}

export default AdsSlider