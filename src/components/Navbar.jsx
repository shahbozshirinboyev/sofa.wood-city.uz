import { useState } from "react";
import logo from "/favicon/wood_city.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex md:flex-wrap lg:flex-nowrap py-4">
        <div className="flex-1 order-2 md:order-1 flex justify-center md:justify-start items-center">
          <div className="w-[180px] cursor-pointer">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="flex w-auto md:w-full lg:px-12 xl:px-24 order-1 md:order-3 lg:order-2 md:pt-4 lg:pt-0">
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="bg-maincolor text-white flex justify-center items-center"
          >
            <div className="flex justify-center items-center">
              <i
                className={`bi bi-list text-[24px] px-3 justify-center items-center ${
                  open ? "hidden" : "flex"
                } transition-all duration-300`}
              ></i>
              <i
                className={`bi bi-x text-[24px] px-3 flex justify-center items-center ${
                  !open ? "hidden" : "flex"
                } transition-all duration-300`}
              ></i>
              <p className="whitespace-nowrap h-full pr-3 hidden md:block">
                Каталог мебели
              </p>
            </div>
          </button>
          <label htmlFor="" className="w-full hidden md:flex">
            <input
              type="text"
              placeholder="Поиск"
              className="border-[2px] border-maincolor px-2 py-2 w-full focus:outline-none placeholder:text-maincolor text-maincolor"
            />
            <button className="flex justify-center items-center w-[80px] bg-maincolor text-white">
              <i className="bi bi-search flex justify-center items-center text-[20px]"></i>
            </button>
          </label>
        </div>

        <div className="flex-none md:flex-1 order-3  md:order-2 lg:order-3 flex justify-end items-center">
          <div className="w-[100px] grid grid-cols-1 justify-center items-center cursor-pointer text-maincolor">
            <i className="bi bi-heart text-center text-[14px]"></i>
            <p className="text-center text-[12px] font-medium">Избранное</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
