import { useLocation } from "react-router-dom";

function ActiveFurnitureMenu() {
  const location = useLocation();
  const activeMenuItem = location.state?.activeMenuItem;

  return (
    <div className="container">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold py-4">
        {activeMenuItem?.name}
      </h1>
      <div className="flex gap-8 pb-6">
        <p className="text-[14px]">{activeMenuItem?.description}</p>
        <img
          src={activeMenuItem?.image}
          alt=""
          className="w-[100px] h-[100%] object-cover"
        />
      </div>
      {activeMenuItem?.items && (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 pb-8">
          {activeMenuItem.items.map((item) => (
            <li
              className="border p-4 group transition-all duration-300 ease-in-out transform hover:scale-100 flex flex-col justify-between"
              key={item.id}
            >
              <div className="flex-grow">
                <h1 className="font-semibold">{item.name}</h1>
                <span className="font-bold opacity-40 text-[14px]">
                  {item.price}
                </span>
              </div>
              <div className="py-6 flex justify-center items-end">
                <i className="bi bi-chevron-right opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                <img
                  src={item.image}
                  className="mx-auto w-[140px] transition-all duration-300 ease-in-out transform group-hover:scale-105"
                  alt=""
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ActiveFurnitureMenu;
