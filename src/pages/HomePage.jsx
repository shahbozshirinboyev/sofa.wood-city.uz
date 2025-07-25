import AdsSlider from "../components/AdsSlider/AdsSlider";
import CustomSlider from "../components/slider/CustomSlider";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { furniture } from "../data/data";

function HomePage() {
  // console.log(furniture);
  const location = useLocation();
  const activeMenuItem = location.state?.activeMenuItem;
  const [activeMenuFurniture, setActiveMenuFurniture] = useState(
    activeMenuItem?.items[0]
  );
  const images = [
    {
      imgURL: "/home_slider/slider-1.jpg", // Faqatgina 'public' ichidagi yo'lni ishlating
      imgAlt: "Slider IMG 1",
    },
    {
      imgURL: "/home_slider/slider-2.jpg",
      imgAlt: "Slider IMG 2",
    },
    {
      imgURL: "/home_slider/slider-3.jpg",
      imgAlt: "Slider IMG 3",
    },
    {
      imgURL: "/home_slider/slider-4.jpg",
      imgAlt: "Slider IMG 4",
    },
  ];
  

  return (
    <>
      <CustomSlider>
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.imgURL}
              alt={image.imgAlt}
              className="h-[280px] md:h-[400px] lg:h-[500px] object-cover"
            />
          );
        })}
      </CustomSlider>

      <div className="container text-justify py-8">
        <p>
          «Wood-City.Uz» — сервис поиска и подбора мебели. У нас один из самых
          больших каталогов мебели на российском рынке. Купить мебель можно в
          два клика у партнеров, которые размещены в нашем каталоге. Наши
          партнеры предлагают как готовую мебель, так и изготовление шкафов,
          кроватей и других предметов обстановки на заказ. В нашем каталоге вы
          найдете мебель разных стилей: гостиные в стиле лофт, кухни в стиле
          прованс, современные детские, а также другую мебель для дома. Мы
          работаем только с проверенными производителями и магазинами.
          «Wood-City.Uz» - ваш гид в мире мебели!
        </p>
      </div>
      {/* Mini Catalog START */}
      <div className="container py-8">
        <p className="text-center text-3xl font-bold">Мебель в Ташкенте</p>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 py-8">
          <div className="col-span-2 order-1 border p-4 group relative">
            <div className="grid grid-cols-2 text-maincolor">
              <div className="pb-4">
                <NavLink
                  className="font-bold"
                  to="/activefurnituremenu"
                  state={{ activeMenuItem: furniture[1] }}
                  onClick={() => {
                    setActiveMenuFurniture(furniture[1]);
                  }}
                >
                  Диваны
                </NavLink>{" "}
                <br />
                <span className="font-bold opacity-50 text-[12px]">
                  от 1 020 руб.
                </span>
              </div>
              <div className="text-end font-bold opacity-50">
                <span className="text-[12px]">51 953</span>
              </div>
            </div>

            <img
              src="/images/mini_catalog/sofas.png"
              className="h-[70%] hidden xl:block group-hover:opacity-0 group-hover:invisible opacity-100 visible absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300"
            />

            <div className="transition-all duration-300 group-hover:opacity-100 opacity-100 xl:opacity-0">
              <ul className="font-semibold">
                <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                  Диваны тканевые
                </li>
                <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                  Прямые диваны
                </li>
                <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                  Угловые диваны
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-2 xl:col-span-1 xl:row-span-2 order-4 xl:order-2 border">
            <div className="col-span-2 order-1 p-4 group relative h-full">
              <div className="grid grid-cols-2 text-maincolor">
                <div className="pb-4">
                  <NavLink
                    className="font-bold"
                    to="/activefurnituremenu"
                    state={{ activeMenuItem: furniture[3] }}
                    onClick={() => {
                      setActiveMenuFurniture(furniture[3]);
                    }}
                  >
                    Кухни
                  </NavLink>{" "}
                  <br />
                  <span className="font-bold opacity-50 text-[12px]">
                    от 1 020 руб.
                  </span>
                </div>
                <div className="text-end font-bold opacity-50">
                  <span className="text-[12px]">51 953</span>
                </div>
              </div>

              <img
                src="/images/mini_catalog/kitchens.png"
                className="h-[80%] hidden xl:block group-hover:opacity-0 group-hover:invisible opacity-100 visible absolute bottom-0 left-0 transform transition-all duration-300"
              />

              <div className="transition-all duration-300 group-hover:opacity-100 opacity-100 xl:opacity-0">
                <ul className="font-semibold">
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Диваны тканевые
                  </li>
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Прямые диваны
                  </li>
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Угловые диваны
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-2 xl:order-3 border">
            <div className="col-span-2 order-1 p-4 group relative">
              <div className="grid grid-cols-2 text-maincolor">
                <div className="pb-4">
                  <NavLink
                    className="font-bold"
                    to="/activefurnituremenu"
                    state={{ activeMenuItem: furniture[0] }}
                    onClick={() => {
                      setActiveMenuFurniture(furniture[0]);
                    }}
                  >
                    Шкафы
                  </NavLink>{" "}
                  <br />
                  <span className="font-bold opacity-50 text-[12px]">
                    от 1 020 руб.
                  </span>
                </div>
                <div className="text-end font-bold opacity-50">
                  <span className="text-[12px]">51 953</span>
                </div>
              </div>
              <img
                src="/images/mini_catalog/wardrobes.png"
                className="h-[60%] hidden xl:block group-hover:opacity-0 group-hover:invisible opacity-100 visible absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300"
              />
              <div className="transition-all duration-300 group-hover:opacity-100 opacity-100 xl:opacity-0">
                <ul className="font-semibold">
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Диваны тканевые
                  </li>
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Прямые диваны
                  </li>
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Угловые диваны
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-3 xl:order-4 border">
            <div className="col-span-2 order-1 p-4 group relative">
              <div className="grid grid-cols-2 text-maincolor">
                <div className="pb-4">
                  <NavLink
                    className="font-bold"
                    to="/activefurnituremenu"
                    state={{ activeMenuItem: furniture[2] }}
                    onClick={() => {
                      setActiveMenuFurniture(furniture[2]);
                    }}
                  >
                    Матрасы
                  </NavLink>{" "}
                  <br />
                  <span className="font-bold opacity-50 text-[12px]">
                    от 1 020 руб.
                  </span>
                </div>
                <div className="text-end font-bold opacity-50">
                  <span className="text-[12px]">51 953</span>
                </div>
              </div>
              <img
                src="/images/mini_catalog/mattresses.png"
                className="h-[70%] hidden xl:block group-hover:opacity-0 group-hover:invisible opacity-100 visible absolute bottom-0 right-0 transform transition-all duration-300"
              />
              <div className="transition-all duration-300 group-hover:opacity-100 opacity-100 xl:opacity-0">
                <ul className="font-semibold">
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Диваны тканевые
                  </li>
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Прямые диваны
                  </li>
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Угловые диваны
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-5 xl:order-5 border">
            <div className="col-span-2 order-1 p-4 group relative">
              <div className="grid grid-cols-2 text-maincolor">
                <div className="pb-4">
                  <NavLink
                    className="font-bold"
                    to="/activefurnituremenu"
                    state={{ activeMenuItem: furniture[2] }}
                    onClick={() => {
                      setActiveMenuFurniture(furniture[2]);
                    }}
                  >
                    Кровати
                  </NavLink>{" "}
                  <br />
                  <span className="font-bold opacity-50 text-[12px]">
                    от 1 020 руб.
                  </span>
                </div>
                <div className="text-end font-bold opacity-50">
                  <span className="text-[12px]">51 953</span>
                </div>
              </div>
              <img
                src="/images/mini_catalog/beds.png"
                className="h-[60%] hidden xl:block group-hover:opacity-0 group-hover:invisible opacity-100 visible absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300"
              />
              <div className="transition-all duration-300 group-hover:opacity-100 opacity-100 xl:opacity-0">
                <ul className="font-semibold">
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Диваны тканевые
                  </li>
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Прямые диваны
                  </li>
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Угловые диваны
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-6 xl:order-6 border">
            <div className="col-span-2 order-1 p-4 group relative">
              <div className="grid grid-cols-2 text-maincolor">
                <div className="pb-4">
                  <NavLink
                    className="font-bold"
                    to="/activefurnituremenu"
                    state={{ activeMenuItem: furniture[4] }}
                    onClick={() => {
                      setActiveMenuFurniture(furniture[4]);
                    }}
                  >
                    Стулья
                  </NavLink> <br />
                  <span className="font-bold opacity-50 text-[12px]">
                    от 1 020 руб.
                  </span>
                </div>
                <div className="text-end font-bold opacity-50">
                  <span className="text-[12px]">51 953</span>
                </div>
              </div>
              <img
                src="/images/mini_catalog/chairs.png"
                className="h-[65%] hidden xl:block group-hover:opacity-0 group-hover:invisible opacity-100 visible absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300"
              />
              <div className="transition-all duration-300 group-hover:opacity-100 opacity-100 xl:opacity-0">
                <ul className="font-semibold">
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Диваны тканевые
                  </li>
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Прямые диваны
                  </li>
                  <li className="w-fit hover:text-maincolor transition-all duration-300 cursor-pointer mb-2">
                    Угловые диваны
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mini Catalog END */}

      {/* Useful to know when choosing furniture */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 py-4">
        <div className="border text-white group relative items-center justify-center overflow-hidden">
          <div className="h-full w-full">
            <img
              className="h-[320px] lg:h-full w-full object-cover transition-transform delay-150 duration-700 group-hover:scale-110"
              src="/images/home/home_mini_menu.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-[25%] p-8">
            <p className="font-medium lg:text-xl">
              Полезно знать при выборе мебели
            </p>
            <ul className="py-4 grid grid-cols-1">
              <li className="pb-2 w-fit cursor-pointer hover:text-maincolor transition-all duration-300 font-semibold">
                Дизайн гостиной 2024 года
              </li>
              <li className="pb-2 w-fit cursor-pointer hover:text-maincolor transition-all duration-300 font-semibold">
                Шкафы 2024
              </li>
              <li className="pb-2 w-fit cursor-pointer hover:text-maincolor transition-all duration-300 font-semibold">
                Кровати 2024
              </li>
              <li className="pb-2 w-fit cursor-pointer hover:text-maincolor transition-all duration-300 font-semibold">
                Стулья 2024
              </li>
              <li className="pb-2 w-fit cursor-pointer hover:text-maincolor transition-all duration-300 font-semibold">
                Кресла 2024
              </li>
            </ul>
            <NavLink to="/allproductstype" onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" });}} className="btn btn-sm hover:text-maincolor hover:bg-white transition-all duration-300">
              Смотреть все мебель
            </NavLink>
          </div>
        </div>

        <div className="border">
          <iframe
            src="https://www.google.com/maps?q=41.458614,69.565940&output=embed"
            allowFullScreen
            frameBorder="0"
            className="w-full h-full min-h-[324px]"
          ></iframe>
        </div>
      </div>
      {/* ADvertising section START */}
      <div className="container py-12">
        <AdsSlider />
      </div>
      {/* ADvertising section END */}
    </>
  );
}

export default HomePage;
