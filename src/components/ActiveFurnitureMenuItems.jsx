import { useState } from "react";
import { useLocation } from "react-router-dom";
import ActiveFurniture from "./ActiveFurniture";
import ProductCard from "./ProductCard";

function ActiveFurnitureMenuItems() {
  const [activeProduct, setActiveProduct] = useState([]);
  const location = useLocation();
  const activeMenuFurniture = location.state?.activeMenuFurniture;
  return (
    <>
      <div className="container py-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold py-4">
          {activeMenuFurniture?.name}
        </h1>

        <div className="flex gap-8 pb-6">
          <p className="text-[14px]">{activeMenuFurniture?.description}</p>
          <img
            src={activeMenuFurniture?.image}
            alt=""
            className="w-[100px] h-[100%] object-cover"
          />
        </div>

        {activeMenuFurniture.products.length === 0 ? (
          <p className="text-center text-xl">
            <i className="bi bi-info-circle text-3xl"></i> <br /> No product!
          </p>
        ) : (
          ""
        )}
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
          {/* Card Design START */}
          {activeMenuFurniture?.products.map((product) => (
    
              <ProductCard product={product} />
    

          ))}

          {/* Card Design END */}
        </div>
      </div>
    </>
  );
}

export default ActiveFurnitureMenuItems;
