import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";

function ProductInfo() {
  const location = useLocation();
  const product = location.state?.product;

  console.log(product);

  const price = product?.price ? Number(product.price.replace(/\s+/g, "")) : 0;
  const fix_price = product?.fix_price
    ? Number(product.fix_price.replace(/\s+/g, ""))
    : 0;

  // Chegirma foizini hisoblash
  const discount = fix_price
    ? Math.round(((fix_price - price) / fix_price) * 100)
    : 0;

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

  const handleNextImage = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex === product.images_product.length - 1 ? 0 : prevIndex + 1;
      // Scroll the thumbnail into view after state update
      setTimeout(() => {
        const thumbnailElement = containerRef.current.children[0].children[newIndex];
        if (thumbnailElement) {
          thumbnailElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }, 0);
      return newIndex;
    });
  };
  
  const handlePrevImage = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? product.images_product.length - 1 : prevIndex - 1;
      // Scroll the thumbnail into view after state update
      setTimeout(() => {
        const thumbnailElement = containerRef.current.children[0].children[newIndex];
        if (thumbnailElement) {
          thumbnailElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }, 0);
      return newIndex;
    });
  };

  return (
    <>
    <div className="container py-4">
    <div className="flex justify-between items-center">
          <p className="font-medium text-[24px]">{product?.title}</p>
          <button className="btn btn-sm">Оставить заявку</button>
        </div>
    </div>
    <div className="container flex gap-6">
      <div className="">
        
        <div className="text-start py-2 lg:hidden">
          <p className="whitespace-nowrap line-through text-[16px] font-semibold opacity-50">
            {product.fix_price} сум.
          </p>
          <p className="whitespace-nowrap font-semibold text-[22px] flex justify-start items-center">
            {product.price} сум.
            <span className="mx-4 border-0 rounded-xl px-2 py-1 text-[11px] bg-maincolor text-white">
              Скидка - {discount} %
            </span>
          </p>
        </div>
        <div className="border relative flex items-center mt-4 justify-center rounded-md">
          <button onClick={handlePrevImage} className="btn btn-sm btn-circle flex justify-center items-center absolute -left-4 ">
            <i className="bi bi-chevron-left"></i>
          </button>
          <img
            src={product.images_product[activeIndex]}
            className="h-[400px] rounded-md"
          />
          <button onClick={handleNextImage} className="btn btn-sm btn-circle flex justify-center items-center absolute -right-4">
            <i className="bi bi-chevron-right"></i>
          </button>
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
        <div className="border w-full flex gap-1 rounded-md p-1">
            <button className="btn btn-sm flex-1">Характеристики</button>
            <button className="btn btn-sm flex-1">Описание</button>
        </div>

        <div className="my-4">
            <h2 className="text-[20px] font-medium mb-2">{product.description_title}</h2>
            <p className="text-justify">{product.description}</p>
            <img src={product.image_des} className="h-[400px]" />
        </div>
      </div>
      <div className="w-[320px] mt-4 p-2 rounded-md flex-shrink-0 border hidden lg:block h-fit">
      <div className="text-start py-2">
          <p className="whitespace-nowrap line-through text-[16px] font-semibold opacity-50">
            {product.fix_price} сум.
          </p>
          <p className="whitespace-nowrap font-semibold text-[22px] flex justify-start items-center">
            {product.price} сум.
            <span className="mx-4 border-0 rounded-xl px-2 py-1 text-[11px] bg-maincolor text-white">
              Скидка - {discount} %
            </span>
          </p>
        </div>

      </div>
      </div>
    </>
  );
}

export default ProductInfo;
