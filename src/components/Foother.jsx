import React from "react";

function Foother() {
  return (
    <div>
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
              <div className="flex justify-start items-center gap-6 text-[16px]">
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
        <div className="grid grid-cols-2 text-[14px]">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <p className="font-bold py-1">2022 ООО «Мебель.ру»</p>
            <p className="py-1">Обновлено 26.11.2024</p>
            <p className="py-1">Пользовательское соглашение</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <p className="font-bold lg:hidden py-1">Полная версия</p>
            <p className="py-1">О компании</p>
            <p className="py-1">Оферта</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foother;
