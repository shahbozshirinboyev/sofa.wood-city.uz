import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  console.log(product);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // ------------------------------
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 10; // Scroll speed = 2
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };
  // ------------------------------

  return (
    <div className="border p-2 rounded-md group relative">
      
      <div onClick={() => navigate("/productinfo", { state: { product: product } })} className="cursor-pointer">
        <img
          src={product.images_product[activeIndex]}
          className="h-[220px] mx-auto object-cover"
        />
      </div>

      <div className="flex gap-4 my-2">
        <p className="text-start line-clamp-2 font-semibold w-full">
          {product.title}
        </p>
        <div className="text-end">
          <p className="whitespace-nowrap font-semibold">
            {product.price} сум.
          </p>
          <p className="whitespace-nowrap line-through text-[14px] font-semibold opacity-50">
            {product.fix_price} сум.
          </p>
        </div>
      </div>

      <div
        className="overflow-scroll scrollbar-hide overflow-y-hidden select-none w-full p-2 my-2 border rounded-md"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        <div className="flex space-x-2">
          {product.images_product.map((url, index) => (
            <div
              key={index}
              className="min-w-[80px] flex items-center justify-center rounded-md"
            >
              <img
                src={url}
                className={`w-[80px] rounded-md mr-2 object-cover cursor-pointer border ${
                  activeIndex === index ? "border-maincolor" : ""
                }`}
                //   draggable="false"
                onClick={() => {
                  setActiveIndex(index);
                }}
                onMouseDown={(e) => e.preventDefault()}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 group-hover:opacity-0 opacity-100 transition-all duration-300">
        <p className="font-semibold text-[13px]">Габариты:</p>
        <div className="grid grid-cols-3 text-start text-[12px] gap-2 py-1">
          <div>
            <p className="opacity-60">Длина</p> <p>{product.length} см</p>
          </div>
          <div>
            <p className="opacity-60">Ширина</p> <p>{product.width} см</p>
          </div>
          <div>
            <p className="opacity-60">Высота</p> <p>{product.height} см</p>
          </div>
        </div>
      </div>

      <div className="absolute w-full left-0 bottom-5 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button className="btn btn-sm w-full bg-maincolor bg-opacity-20 hover:bg-maincolor border-0 hover:bg-opacity-35 text-maincolor">
          Оставить заявку
        </button>
      </div>

    </div>
  );
}

export default ProductCard;
