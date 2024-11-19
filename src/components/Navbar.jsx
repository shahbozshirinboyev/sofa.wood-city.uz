import logo from "/favicon/wood_city.png";

function Navbar() {
  return (
    <div className="flex p-4">
      <div className="w-[300px]">
        <img src={logo} alt="" />
      </div>

      <div className="flex w-full px-12">
        <button className="border">
          <div className="flex justify-center items-center">
            <i className="bi bi-list text-[28px] px-2"></i>
            <i className="bi hidden bi-x-lg"></i>
            <p className="whitespace-nowrap h-full px-2">Каталог мебели</p>
          </div>
        </button>
        <label htmlFor="" className="w-full flex">
        <input
          type="text"
          placeholder="Поиск"
          className="border px-2 py-1 w-full"
        />
        <button className="flex justify-center items-center border w-[80px]">
        <i class="bi bi-search flex justify-center items-center text-[20px]"></i>
        </button>
        </label>
      </div>

      <div className="w-[300px] grid grid-cols-1 justify-center items-center">
        <i className="bi bi-heart text-center text-[20px]"></i>
        <p className="text-center">Избранное</p>
      </div>
    </div>
  );
}

export default Navbar;
