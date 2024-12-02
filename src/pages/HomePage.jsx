import CustomSlider from "../components/slider/CustomSlider";
import { useState, useEffect } from "react";

function HomePage() {
  const images = [
    {
      imgURL: "../../public/home_slider/slider-1.jpg",
      imgAlt: "Slider IMG 1",
    },
    {
      imgURL: "../../public/home_slider/slider-2.jpg",
      imgAlt: "Slider IMG 2",
    },
    {
      imgURL: "../../public/home_slider/slider-3.jpg",
      imgAlt: "Slider IMG 3",
    },
    {
      imgURL: "../../public/home_slider/slider-4.jpg",
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
          «Мебель.Ру» — сервис поиска и подбора мебели. У нас один из самых
          больших каталогов мебели на российском рынке. Купить мебель можно в
          два клика у партнеров, которые размещены в нашем каталоге. Наши
          партнеры предлагают как готовую мебель, так и изготовление шкафов,
          кроватей и других предметов обстановки на заказ. В нашем каталоге вы
          найдете мебель разных стилей: гостиные в стиле лофт, кухни в стиле
          прованс, современные детские, а также другую мебель для дома. Мы
          работаем только с проверенными производителями и магазинами.
          «Мебель.Ру» - ваш гид в мире мебели!
        </p>
      </div>

      <div className="container py-8">
        <p className="text-center text-3xl font-bold">Мебель в Ташкенте</p>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 py-8">
          <div className="col-span-2 order-1 h-[200px] border">01 Диваны</div>
          <div className="col-span-2 xl:col-span-1 xl:row-span-2 order-4 xl:order-2 border min-h-[200px]">
            02 Кухни
          </div>
          <div className="order-2 xl:order-3 h-[200px] border">03 Шкафы</div>
          <div className="order-3 xl:order-4 h-[200px] border">04 Матрасы</div>
          <div className="order-5 xl:order-5 h-[200px] border">05 Кровати</div>
          <div className="order-6 xl:order-6 h-[200px] border">06 Стулья</div>
        </div>
      </div>
      {/* Useful to know when choosing furniture */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 py-4">
        <div class="border text-white group relative items-center justify-center overflow-hidden">
          <div class="h-full w-full">
            <img
              class="h-full w-full object-cover transition-transform delay-150 duration-700 group-hover:scale-110"
              src="/images/home/home_mini_menu.jpg"
              alt=""
            />
          </div>
          <div class="absolute inset-0 bg-black bg-opacity-50 p-8">
            <p className="font-medium text-xl">
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
            <button className="btn btn-sm hover:text-maincolor hover:bg-white transition-all duration-300">
              Смотреть все статьи
            </button>
          </div>
        </div>

        <div className="border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23974.863532771484!2d69.27367208474604!3d41.3119539193125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1733075437086!5m2!1sen!2s"
            allowFullScreen
            frameborder="0"
            className="w-full h-full min-h-[324px]"
          ></iframe>
        </div>
      </div>
      {/* Useful to know when choosing furniture */}
      <div className="bg-maincolor">

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">

        <div className="text-white">
          <h2 className="font-semibold">Подпишись и узнай раньше всех о скидках, акциях, распродажах и полезных статьях</h2>
          <p className="text-[12px]">Подписываясь я соглашаюсь с <span className="underline cursor-pointer">условиями обработки персональных данных</span></p>
        </div>

        <div>
          <form action="" className="flex py-2">
            <input type="text" placeholder="Ваш E-mail" className="text-white outline-none border rounded bg-transparent placeholder:text-white py-1 px-2 w-full" />
            <button className="px-6 md:px-8 py-1 rounded bg-white ml-2 justify-center items-center font-semibold hover:text-maincolor transition-all duration-300">Подписаться</button>
          </form>
        </div>

      </div>
      </div>
    </>
  );
}

export default HomePage;
