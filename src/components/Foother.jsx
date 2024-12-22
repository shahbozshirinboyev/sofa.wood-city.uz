import { NavLink } from "react-router-dom";
import Subscribe from "./Subscribe";
import logo from "/favicon/wood_city.png";

function Foother({setOpenIndex}) {
  return (
    <>
      <Subscribe />

      <div className="bg-gray-100 border-0">

        <div className="container py-4 grid grid-cols-2">
          
          <NavLink to="/" onClick={()=>{window.scrollTo(0, 0);}}>
            <img src={logo} alt="Logo" className="max-w-[220px]" />
          </NavLink>
          
          <div className="flex justify-center md:justify-end items-center">
            <a
              href="https://yandex.uz/maps/-/CHQMz0Ml"
              target="_blank"
              data-tip="г. Чирчик, ул. Амира Темура, 68А."
              className="tooltip group tooltip-left 2xl:tooltip-top flex justify-center items-center gap-1 cursor-pointer hover:text-maincolor transition-all duration-300"
            >
              <i className="bi bi-geo-alt-fill group-hover:text-red-600 transition-all duration-300"></i><p>Ташкент</p>
            </a>
          </div>
          
        </div>

        <div className="container py-4 flex flex-wrap justify-between gap-4 text-[14px]">
          <div className="flex flex-col">
            <p className="font-bold py-1">2024 ООО «WoodCity.Uz»</p>
            <NavLink to="/company" onClick={()=>{window.scrollTo(0, 0); setOpenIndex(0);}} className="py-1 whitespace-nowrap hover:text-maincolor">
              Пользовательское соглашение
            </NavLink>
            <p className="py-1 font-semibold">Обновлено 26.11.2024</p>
            <NavLink to="/company" onClick={()=>{ window.scrollTo(0, 0); setOpenIndex(1); }} className="py-1 hover:text-maincolor">О компании</NavLink>
          </div>

          <div className="border-0">
            <p className="font-bold py-1">Клиентам</p>
            <div className="flex flex-col">
              <NavLink to="/allproductstype" onClick={()=>{ window.scrollTo(0, 0); }} className="py-1 hover:text-maincolor">Вся мебель</NavLink>
              <NavLink to="/company" onClick={()=>{ window.scrollTo(0, 0); setOpenIndex(2); }} className="py-1 hover:text-maincolor">Доставка</NavLink>
              <NavLink to="/company" onClick={()=>{ window.scrollTo(0, 0); setOpenIndex(4); }} className="py-1 hover:text-maincolor">Гарантия</NavLink>
              <NavLink to="/company" onClick={()=>{ window.scrollTo(0, 0); setOpenIndex(3); }} className="py-1 hover:text-maincolor">Оплата</NavLink>
            </div>
          </div>

          <div>
            <p className="font-bold py-1">Присоединяйтесь</p>
            <div className="flex justify-start gap-4 items-center text-[16px] py-1">
              <a
                href="https://t.me/wood_city_uz"
                target="_blank"
                className="tooltip hover:text-sky-600 transition-all duration-200 cursor-pointer"
                data-tip="Telegram"
              >
                <i className="bi bi-telegram"></i>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="tooltip hover:text-red-600 transition-all duration-200 cursor-pointer"
                data-tip="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="tooltip hover:text-pink-600 transition-all duration-200 cursor-pointer"
                data-tip="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://wood-city.uz"
                target="_blank"
                className="tooltip tooltip-left 2xl:tooltip-top hover:text-sky-600 transition-all duration-200 cursor-pointer"
                data-tip="Wood-City.Uz"
              >
                <i className="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Foother;
