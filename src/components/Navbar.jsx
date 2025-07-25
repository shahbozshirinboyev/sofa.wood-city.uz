import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { furniture } from "../data/data";
import logo from "/favicon/wood_city.png";

function Navbar({ furniture }) {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(furniture[0]);
  const [activeMenuItem, setActiveMenuItem] = useState(furniture[0]);
  const [activeMenuFurniture, setActiveMenuFurniture] = useState(furniture[0]?.types[0]);
  

  const handleMouseEnter = (id) => { setActiveItem(id); };
  // const handleMouseLeave = () => { setActiveItem(null); };

  return (
    <>
      <div className="container">
        <div className="flex md:flex-wrap lg:flex-nowrap py-4">
          {/* Logo START */}
          <div
            onClick={() => navigate("/")}
            className="flex-1 order-2 md:order-1 flex justify-center md:justify-start items-center"
          >
            <div className=" w-[140px] md:w-[180px] cursor-pointer">
              <img src={logo} alt="logo" />
            </div>
          </div>
          {/* Logo END */}
          <div className="flex w-auto md:w-full lg:px-12 xl:px-24 order-1 md:order-3 lg:order-2 md:pt-4 lg:pt-0">
            <label
              onClick={() => document.getElementById("menunavbar").showModal()}
              className="bg-maincolor text-white swap swap-rotate active:scale-90 transition-all duration-200 flex justify-center items-center relative"
            >
              <input type="checkbox" className="hidden" />

              <i className="bi bi-list text-[24px] px-3 flex justify-center items-center fill-current "></i>

              <p className="whitespace-nowrap h-full pr-3 hidden md:flex justify-center items-center font-medium">
                Каталог мебели
              </p>
            </label>

            <label htmlFor="" className="w-full hidden md:flex">
              <input
                type="search"
                placeholder="Поиск"
                className="border-[2px] border-maincolor px-2 py-2 w-full focus:outline-none placeholder:text-maincolor text-maincolor"
              />
              <button className="flex justify-center items-center w-[80px] bg-maincolor text-white">
                <i className="bi bi-search flex justify-center items-center text-[20px]"></i>
              </button>
            </label>
          </div>

          <div className="flex-none md:flex-1 order-3  md:order-2 lg:order-3 flex justify-end items-center">
            <NavLink to="tel:+998770086563" className="w-[140px] grid grid-cols-1 active:scale-[98%] justify-center items-center cursor-pointer text-maincolor">
              {/* <i className="bi bi-cart3 text-center text-[18px]"></i>
              <p className="text-center text-[12px] font-medium">Корзина</p> */}
              <p className="text-nowrap font-bold text-[12px] md:text-[14px] text-end">+998 (77) 008 65 63</p>
              <span className="text-[11px] text-end font-bold opacity-65">Быстрый звонок</span>
            </NavLink>
          </div>
        </div>

        <div className="py-4 hidden lg:block lg:text-[14px] xl:text-[16px]">
          <ul className="flex justify-between items-center font-medium transition-all duration-200">
          <NavLink
                to="/allproductstype"
                // key={menu.id}
                // state={{ activeMenuItem: menu }}
                // onClick={() => { setActiveMenuItem(menu); }}
                // data-tip={`Вся каталог мебели`}
                className="tooltip btn btn-sm min-w-[80px] hover:font-medium border-0 hover:text-white hover:bg-maincolor bg-maincolor bg-opacity-10 text-maincolor cursor-pointer whitespace-nowrap text-[11.5px] flex flex-col items-center justify-center"
              >
                {/* <img src={menu.icon} alt="" /> */}
                <span className="text-[11.5px]">Вся мебель</span>
                {/* <span>Вся каталог мебели</span> */}
              </NavLink>
            {furniture.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)).map((menu) => (
              <NavLink
                to="/activefurnituremenu"
                key={menu.id}
                state={{ activeMenuItem: menu }}
                onClick={() => { setActiveMenuItem(menu); }}
                // data-tip={`${menu.name}`}
                className="tooltip btn btn-sm min-w-[80px] hover:font-medium border-0 hover:text-white hover:bg-maincolor bg-maincolor bg-opacity-10 text-maincolor cursor-pointer whitespace-nowrap text-[11.5px] flex flex-col items-center justify-center"
              >
                <img className="xl:hidden" src={menu.icon} alt="" />
                <span className="hidden xl:block">{menu.name}</span>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      {/* Catalog Furniture START MODAL */}
      <dialog id="menunavbar" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul>
              {furniture.map((menu) => (
                <NavLink
                  to="/activefurnituremenu"
                  key={menu.id}
                  state={{ activeMenuItem: menu }}
                  onClick={() => {
                    setActiveMenuItem(menu);
                    document.getElementById("menunavbar").close();
                  }}
                  onMouseEnter={() => handleMouseEnter(menu)}
                  className={`flex justify-start items-center active:border-0 p-2 m-1 relative ${
                    activeItem !== null && activeItem?.id === menu?.id
                      ? "bg-base-300 font-medium text-maincolor"
                      : ""
                  } rounded-lg cursor-pointer transition-all duration-100 ease-in-out`}
                >
                  <img src={menu.icon} alt={menu.name} className="px-2" />
                  <span>{menu.name}</span>
                  <i className="bi bi-chevron-right flex justify-center items-center absolute right-0 text-[18px] p-1"></i>
                </NavLink>
              ))}
            </ul>

            <div className="m-1 hidden md:block">
              <p className="font-bold text-[20px]">
                {activeItem !== null ? activeItem?.name : ""}
              </p>
              <ul className="mt-4">
                {activeItem &&
                  activeItem.types?.map((menu) => (
                    <NavLink
                      key={menu.id}
                      to="/activefurnituremenuitems"
                      state={{ activeMenuFurniture: menu }}
                      onClick={() => {
                        setActiveMenuFurniture(menu);
                        document.getElementById("menunavbar").close();
                      }}
                      className="px-2 py-1 my-1 hover:bg-base-300 hover:font-medium hover:text-maincolor rounded-lg cursor-pointer flex justify-start items-center"
                    >
                      {menu.name}
                    </NavLink>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* Catalog Furniture END MODAL */}
    </>
  );
}

export default Navbar;
