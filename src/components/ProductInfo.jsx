import { useLocation, NavLink } from "react-router-dom";
import { useState, useRef } from "react";

function ProductInfo({furniture}) {
  const location = useLocation();
  const product = location.state?.product;

  
  const [activeMenuItem, setActiveMenuItem] = useState(furniture[0]);
  const handleMouseEnter = (id) => { setActiveItem(id); };

  console.log(product);
  console.log(furniture);

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
      <div className="w-[320px] mt-4  flex-shrink-0 hidden lg:block h-fit">
        <div className=" p-2 rounded-md border">
        <div className="text-start">
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
        
        <button className="btn btn-sm w-full my-2">Купить в 1 клик</button>

        <div className="border rounded-md p-2 w-full grid grid-cols-3 gap-1 mt-2 font-semibold">
            <div className="flex gap-1 items-center justify-center">
            <svg width="23" height="10" viewBox="0 0 23 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line x1="2" y1="4.99992" x2="21.3846" y2="4.99993" stroke="#9399A0" stroke-width="1.61538"></line>
							<line x1="22.1923" y1="9.03833" x2="22.1923" y2="0.961408" stroke="#9399A0" stroke-width="1.61538"></line>
							<line x1="1.19231" y1="9.03833" x2="1.19231" y2="0.961408" stroke="#9399A0" stroke-width="1.61538"></line>
						</svg>
              <span>{product.length} см</span>
            </div>

            <div className="flex gap-1 items-center justify-center">
            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.3074 15.5383L3.23047 0.99987" stroke="#B6BDC5" stroke-width="1.61538"></path>
							<line y1="0.999925" x2="8.07692" y2="0.999925" stroke="#B6BDC5" stroke-width="1.61538"></line>
							<line x1="6.46191" y1="15.5385" x2="14.5388" y2="15.5385" stroke="#B6BDC5" stroke-width="1.61538"></line>
						</svg>
              <span>{product.width} см</span>
            </div>

            <div className="flex gap-1 items-center justify-center">
            <svg width="9" height="23" viewBox="0 0 9 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line x1="4.03801" y1="21" x2="4.03801" y2="1.61539" stroke="#B6BDC5" stroke-width="1.61538"></line>
							<line x1="8.07715" y1="0.807692" x2="0.00022615" y2="0.807694" stroke="#B6BDC5" stroke-width="1.61538"></line>
							<line x1="8.07715" y1="21.8077" x2="0.00022615" y2="21.8077" stroke="#B6BDC5" stroke-width="1.61538"></line>
						</svg>
              <span>{product.height} см</span>
            </div>
        </div>

        

        </div>
          <div className="p-2 rounded-md border mt-4">
            <ul className="text-[14px] select-none">
              {furniture.map((menu) => (
                <NavLink
                  to="/activefurnituremenu"
                  key={menu.id}
                  state={{ activeMenuItem: menu }}
                  onClick={() => { setActiveMenuItem(menu); document.getElementById("menunavbar").close(); }}
                  onMouseEnter={() => handleMouseEnter(menu)}
                  className={`flex justify-start gap-1 items-center py-2 px-1 border-0 hover:bg-maincolor hover:bg-opacity-10 active:scale-[98%] my-1 relative  rounded-lg cursor-pointer transition-all duration-100 ease-in-out`}
                >
                  <img src={menu.icon} alt={menu.name} className="px-2 w-[35px]" />
                  <span>{menu.name}</span>
                  <i className="bi bi-chevron-right flex justify-center items-center absolute right-0 text-[14px] p-1"></i>
                </NavLink>
              ))}
            </ul>
          </div>
      

      </div>
      </div>
    </>
  );
}

export default ProductInfo;
