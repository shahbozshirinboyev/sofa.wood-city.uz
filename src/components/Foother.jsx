import React from "react";

function Foother() {
  return (
    <div>
      <div className="container py-4">
        <div className="grid grid-cols-2 text-[14px]">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <p className="font-bold py-1">2022 ООО «Мебель.ру»</p>
            <p className="py-1">Обновлено 26.11.2024</p>
            <p className="py-1">О компании</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <p className="font-bold lg:hidden py-1">Полная версия</p>
            <p className="py-1">Пользовательское соглашение</p>
            <p className="py-1">Оферта</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foother;
