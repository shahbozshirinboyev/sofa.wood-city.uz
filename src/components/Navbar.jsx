import { furniture } from "../data/data";
import logo from "/favicon/wood_city.png";

function Navbar() {
  console.log(furniture);

  return (
    <>
      <div className="container">
        <div className="flex md:flex-wrap lg:flex-nowrap py-4">
          <div className="flex-1 order-2 md:order-1 flex justify-center md:justify-start items-center">
            <div className="w-[180px] cursor-pointer">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="flex w-auto md:w-full lg:px-12 xl:px-24 order-1 md:order-3 lg:order-2 md:pt-4 lg:pt-0">
            <label
              onClick={() => document.getElementById("menunavbar").showModal()}
              className="bg-maincolor text-white swap swap-rotate active:scale-90 transition-all duration-200 flex justify-center items-center relative"
            >
              <input type="checkbox" className="hidden" />

              <i className="bi bi-list text-[24px] px-3 flex justify-center items-center fill-current "></i>
              {/* <i className="bi bi-x text-[24px] px-3 flex justify-center items-center swap-on fill-current absolute left-0"></i> */}

              <p className="whitespace-nowrap h-full pr-3 hidden md:flex justify-center items-center font-medium">
                Каталог мебели
              </p>
            </label>

            <label htmlFor="" className="w-full hidden md:flex">
              <input
                type="text"
                placeholder="Поиск"
                className="border-[2px] border-maincolor px-2 py-2 w-full focus:outline-none placeholder:text-maincolor text-maincolor"
              />
              <button className="flex justify-center items-center w-[80px] bg-maincolor text-white">
                <i className="bi bi-search flex justify-center items-center text-[20px]"></i>
              </button>
            </label>
          </div>

          <div className="flex-none md:flex-1 order-3  md:order-2 lg:order-3 flex justify-end items-center">
            <div className="w-[100px] grid grid-cols-1 justify-center items-center cursor-pointer text-maincolor">
              <i className="bi bi-heart text-center text-[14px]"></i>
              <p className="text-center text-[12px] font-medium">Избранное</p>
            </div>
          </div>
        </div>

        <div className="py-4 hidden lg:block lg:text-[14px] xl:text-[16px]">
          <ul className="flex justify-between items-center font-medium transition-all duration-200">
            {furniture.map((menu) => (
              <li className="hover:font-medium hover:text-maincolor cursor-pointer whitespace-nowrap text-[9px] flex items-center justify-center">
                <img src={menu.icon} alt="" />
                {menu.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <dialog id="menunavbar" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Navbar;
