import { NavLink } from "react-router-dom";
import { furniture } from "../data/data";
import logo from "/favicon/wood_city.png";
import { useState } from "react";

function Navbar() {
  const [activeItem, setActiveItem] = useState(furniture[0]);
  const [activeMenuItem, setActiveMenuItem] = useState(furniture[0]);

  console.log(furniture[0]);

  const handleMouseEnter = (id) => {
    setActiveItem(id); // Hover bo'lganda item id'sini saqlash
  };
  const handleMouseLeave = () => {
    setActiveItem(null); // Hoverdan chiqqanda holatni o'chirish
  };

  return (
    <>
      <div className="container">
        <div className="flex md:flex-wrap lg:flex-nowrap py-4">
          <div className="flex-1 order-2 md:order-1 flex justify-center md:justify-start items-center">
            <div className="w-[180px] cursor-pointer">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="flex w-auto md:w-full lg:px-12 xl:px-24 order-1 md:order-3 lg:order-2 md:pt-4 lg:pt-0">
            <label
              onClick={() => document.getElementById("menunavbar").showModal()}
              className="bg-maincolor text-white swap swap-rotate active:scale-90 transition-all duration-200 flex justify-center items-center relative"
            >
              <input type="checkbox" className="hidden" />

              <i className="bi bi-list text-[24px] px-3 flex justify-center items-center fill-current "></i>
              {/* <i className="bi bi-x text-[24px] px-3 flex justify-center items-center swap-on fill-current absolute left-0"></i> */}

              <p className="whitespace-nowrap h-full pr-3 hidden md:flex justify-center items-center font-medium">
                Каталог мебели
              </p>
            </label>

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

        <div className="py-4 hidden lg:block lg:text-[14px] xl:text-[16px]">
          <ul className="flex justify-between items-center font-medium transition-all duration-200">
            {furniture.map((menu) => (
              <li key={menu.id} data-tip={`${menu.name}`} className="tooltip btn btn-sm w-[80px] hover:font-medium hover:text-maincolor cursor-pointer whitespace-nowrap text-[9px] flex items-center justify-center">
                <img src={menu.icon} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <dialog id="menunavbar" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul>
              {furniture.map((menu) => (
                <NavLink
                  to="/activefurnituremenu"
                  key={menu.id}
                  onClick={()=>{setActiveMenuItem(menu); document.getElementById("menunavbar").close()}}
                  onMouseEnter={() => handleMouseEnter(menu)}
                  className={`flex justify-start items-center p-2 m-1 relative ${ activeItem !== null && activeItem.id === menu.id ? "bg-base-300 font-medium text-maincolor": ""} rounded-lg cursor-pointer transition-all duration-100 ease-in-out`}
                >
                  <img src={menu.icon} alt={menu.name} className="px-2" />
                  <span>{menu.name}</span>
                  <i className="bi bi-chevron-right flex justify-center items-center absolute right-0 text-[18px] p-1"></i>
                </NavLink>
              ))}
            </ul>

            <div className="m-1 hidden md:block">
              <p className="font-bold text-[20px]">{activeItem !== null ? activeItem.name : ""}</p>
              <ul className="mt-4">
                {activeItem && activeItem.items.map((menu)=>(
                  <li key={menu.id} className="px-2 py-1 my-1 hover:bg-base-300 hover:font-medium hover:text-maincolor rounded-lg cursor-pointer flex justify-start items-center">{menu.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Navbar;
