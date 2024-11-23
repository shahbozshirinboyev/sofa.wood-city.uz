import logo from "/favicon/wood_city.png";

function Navbar() {
  return (
    <>
    <div className="flex md:flex-wrap lg:flex-nowrap py-2">
      
      <div className="flex-1 order-2 md:order-1 flex justify-center md:justify-start items-center">

        <div className="w-[180px]">
        <img src={logo} alt="" />
        </div>

      </div>

      <div className="flex w-auto md:w-full lg:px-12 xl:px-24 order-1 md:order-3 lg:order-2 md:pt-4 lg:pt-0">

        <button className="border">
          <div className="flex justify-center items-center">
            <i className="bi bi-list text-[24px] px-2"></i>
            <i className="bi hidden bi-x-lg"></i>
            <p className="whitespace-nowrap h-full px-2 hidden md:block">Каталог мебели</p>
          </div>
        </button>
        <label htmlFor="" className="w-full hidden md:flex">
        <input
          type="text"
          placeholder="Поиск"
          className="border px-2 py-0 w-full"
        />
        <button className="flex justify-center items-center border w-[80px]">
        <i class="bi bi-search flex justify-center items-center text-[20px]"></i>
        </button>
        </label>

      </div>

      <div className="flex-none md:flex-1 order-3  md:order-2 lg:order-3 flex justify-end items-center">

        <div className="w-[100px] grid grid-cols-1 justify-center items-center">
        <i className="bi bi-heart text-center text-[14px]"></i>
        <p className="text-center text-[12px]">Избранное</p>
        </div>

      </div>
    </div>

    {/* <div class="flex flex-wrap">
  <div class="w-1/2 p-2 bg-red-500 order-1">Element 1</div>
  <div class="flex-auto p-2 bg-blue-500 order-3">Element 2</div>
  <div class="w-1/2 p-2 bg-green-500 order-2">Element 3</div>
</div> */}

    
    </>

  );
}

export default Navbar;
