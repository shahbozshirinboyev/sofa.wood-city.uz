import { useLocation } from "react-router-dom";

function ActiveFurnitureMenuItems() {
  const location = useLocation();
  const activeMenuFurniture = location.state?.activeMenuFurniture;
  console.log(activeMenuFurniture);
  return (
    <>
      <div className="container py-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold py-4">
          {" "}
          {activeMenuFurniture?.name}
        </h1>

        <div className="flex gap-8 pb-6">
          <p className="text-[14px] text-clamp-2">{activeMenuFurniture?.description}</p>
          <img
            src={activeMenuFurniture?.image}
            alt=""
            className="w-[100px] h-[100%] object-cover"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-4">
          {activeMenuFurniture?.items.map((product) => (
            <div className="border p-2">
              <img src={product.image0} alt="" className="h-[220px] mx-auto" />
              <div className="grid grid-cols-2 border gap-4">
                <p className="text-start text-clamp-2">{product.name}</p>
                <div className="text-end">
                  <p className="whitespace-nowrap">{product.price}</p>
                  <p className="whitespace-nowrap">{product.fixprice}</p>
                </div>
              </div>
              <p>{product.status}</p>
              <p>
                {product.bestseller === true ? "бестселлер" : "не бестселлер"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ActiveFurnitureMenuItems;
