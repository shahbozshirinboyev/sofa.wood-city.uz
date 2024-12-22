import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

function AllProductsType({ furniture }) {
  const location = useLocation();
  const activeMenuItem = location.state?.activeMenuItem;
  const [activeMenuFurniture, setActiveMenuFurniture] = useState(activeMenuItem?.types[0]);

  return (
    <div className="container">
      {furniture.map((item) => (
        <div key={item.id}>
          {/* Furniture type START */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold py-4">{item?.name}</h1>
          <div className="flex gap-8 pb-6">
            <p className="text-[14px]">{item?.description}</p>
            <img src={item?.image} alt={item?.name} className="w-[100px] h-[100%] object-cover"/>
          </div>
          {/* Furniture type END */}
          {item.types.length === 0 ? (
            <p className="text-center text-xl">
              <i className="bi bi-layout-wtf text-3xl"></i> <br /> No product type!
            </p>
          ) : (
            ""
          )}
          {item?.types && (
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 pb-8">
              {item.types.map((product) => (
                <NavLink
                  className="border p-4 group transition-all duration-300 ease-in-out transform hover:scale-100 flex flex-col justify-between"
                  key={product.id}
                  to="/activefurnituremenuitems"
                  state={{ activeMenuFurniture: product }}
                  onClick={() => {
                    setActiveMenuFurniture(product);
                  }}
                >
                  <div className="flex-grow">
                    <h1 className="font-semibold">{product.name}</h1>
                    <span className="font-bold opacity-40 text-[14px]">
                      {product.price}
                    </span>
                  </div>
                  <div className="py-6 flex justify-center items-end mt-2">
                    <i className="bi bi-chevron-right opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                    <img
                      src={product.image}
                      className="mx-auto h-[50px] transition-all duration-300 ease-in-out transform group-hover:scale-105"
                      alt=""
                    />
                  </div>
                </NavLink>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default AllProductsType;
