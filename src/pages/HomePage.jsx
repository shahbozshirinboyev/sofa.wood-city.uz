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
    </>
  );
}

export default HomePage;
