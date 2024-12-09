import logo from "/favicon/wood_city.png";

function Foother() {
  return (
    <>
      <div className="bg-maincolor">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
          <div className="text-white">
            <h2 className="font-semibold">
              Подпишись и узнай раньше всех о скидках, акциях, распродажах и
              полезных статьях
            </h2>
            <p className="text-[12px]">
              Подписываясь я соглашаюсь с{" "}
              <span className="underline cursor-pointer">
                условиями обработки персональных данных
              </span>
            </p>
          </div>

          <div>
            <form action="" className="flex py-2">
              <input
                type="text"
                placeholder="Ваш E-mail"
                className="text-white outline-none border rounded bg-transparent placeholder:text-white py-1 px-2 w-full"
              />
              <button className="px-6 md:px-8 py-1 rounded bg-white ml-2 justify-center items-center font-semibold hover:text-maincolor transition-all duration-300">
                Подписаться
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container py-4 grid grid-cols-2">
          <img src={logo} alt="Logo" className="w-[220px]" />
          <div className="flex justify-center md:justify-end items-center">
            <i className="bi bi-geo-alt-fill px-2"></i> <p>Ташкент</p>
          </div>
        </div>
        <div className="container py-4">
          <div className="grid grid-cols-2 text-[14px]">
            <div className="grid grid-cols-1">
              <p className="font-bold py-1">Клиентам</p>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <p className="py-1">Магазины на карте</p>
                <p className="py-1">Статьи</p>
                <p className="py-1">Оплата</p>
                <p className="py-1">Гарантия</p>
                <p className="py-1">Карта сайта</p>
                <p className="py-1">Доставка</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <p className="font-bold py-1">Сервис</p>
                <p className="py-1">Реклама на сайте</p>
                <p className="py-1">Технические требования</p>
              </div>
              <div>
                <p className="font-bold py-1">Присоединяйтесь</p>
                <div className="flex justify-start items-center gap-6 text-[16px] py-1">
                  <i className="bi bi-wikipedia"></i>
                  <i className="bi bi-pinterest"></i>
                  <i className="bi bi-youtube"></i>
                  <i className="bi bi-link-45deg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="grid grid-cols-2 gap-4 text-[14px]">
            <div className="grid grid-cols-1 xl:grid-cols-3">
              <p className="font-bold py-1">2024 ООО «WoodCity.Uz»</p>
              <p className="py-1">Обновлено 26.11.2024</p>
              <p className="py-1">Пользовательское соглашение</p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2">
              <p className="font-bold xl:hidden py-1">Полная версия</p>
              <p className="py-1">О компании</p>
              <p className="py-1">Оферта</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foother;
