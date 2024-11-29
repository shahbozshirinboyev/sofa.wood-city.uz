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
          <p className="text-[14px]">{activeMenuFurniture?.description}</p>
          <img
            src={activeMenuFurniture?.image}
            alt=""
            className="w-[100px] h-[100%] object-cover"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-4">
          {activeMenuFurniture?.items.map((product) => (
            <div className="border py-2 px-4">
              <img src={product.image0} alt="" className="h-[220px] mx-auto" />

              <div className="flex gap-4">
                <p className="text-start line-clamp-2 font-semibold w-full">{product.name}</p>
                <div className="text-end">
                  <p className="whitespace-nowrap font-semibold">{product.price}</p>
                  <p className="whitespace-nowrap line-through text-[14px] font-semibold opacity-50">{product.fixprice}</p>
                </div>
              </div>

              

              <div className="py-4">
                <p className="font-semibold">Габариты:</p>
                <div className="grid grid-cols-3 text-start text-[14px] gap-2 py-1">
                  <div> <p className="opacity-60">Длина</p> <p>189 sm</p> </div>
                  <div> <p className="opacity-60">Ширина</p> <p>103 sm</p> </div>
                  <div> <p className="opacity-60">Высота</p> <p>90 sm</p> </div>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button className="btn btn-sm flex-1"><i className="bi bi-arrow-up-right"></i> Подробнее </button>
                <button className="btn btn-sm flex-1"><i class="bi bi-cart"></i> В корзину </button>
              </div>

              {/* 
              <p>{product.status}</p>
              <p>
                {product.bestseller === true ? "бестселлер" : "не бестселлер"}
              </p> 
              */}

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ActiveFurnitureMenuItems;
