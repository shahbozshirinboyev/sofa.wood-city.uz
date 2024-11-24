// components
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RooutLayout() {
  return (
    <>
    <div className="shadow-md">
      <section className="container">

        <Navbar />

        <div className="py-4 hidden lg:block lg:text-[14px] xl:text-[16px]">
          <ul className="flex justify-between items-center font-medium transition-all duration-200">
            <li className="hover:font-medium hover:text-maincolor cursor-pointer">Кухни</li>
            <li className="hover:font-medium hover:text-maincolor cursor-pointer">Шкафы</li>
            <li className="hover:font-medium hover:text-maincolor cursor-pointer">Матрасы</li>
            <li className="hover:font-medium hover:text-maincolor cursor-pointer">Кровати</li>
            <li className="hover:font-medium hover:text-maincolor cursor-pointer">Диваны</li>
            <li className="hover:font-medium hover:text-maincolor cursor-pointer">Кресла</li>
            <li className="hover:font-medium hover:text-maincolor cursor-pointer">Столы</li>
            <li className="hover:font-medium hover:text-maincolor cursor-pointer">Стулья</li>
            <li className="hover:font-medium hover:text-maincolor cursor-pointer">Комоды и тумбы</li>
            <li className="hover:font-medium hover:text-maincolor cursor-pointer">Садовая мебель</li>
            <li className="hover:font-medium hover:text-maincolor cursor-pointer">Комнаты</li>
            <li className="hover:font-medium hover:text-maincolor cursor-pointer">Производители</li>
          </ul>
        </div>

      </section>
    </div>

      <main>
        <Outlet />
      </main>

      <div className="shadow-md"><section className="container">Foother</section></div>
    </>
  );
}

export default RooutLayout;
