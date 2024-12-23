import { useState } from "react"

function ProductCard({ product }) {
    const [ activeIndex, setActiveIndex ] = useState(0)
    return (
        <div className="border p-2 rounded-md" key={product.id}>

            <div className="">
                <img src={product.images_product[activeIndex]} className="h-[220px] mx-auto object-cover" />
            </div>
            <div className='border flex gap-1 p-1 overflow-hidden overflow-x-scroll'>
            {
                product.images_product.map((url, index)=>(
                    <img key={index} src={url} onClick={()=>{setActiveIndex(index)}} className={`w-[80px] rounded-md object-cover border ${ activeIndex === index ? "border-sky-500" : "" }`} />
                ))
            }
            </div>

            <div className="flex gap-4">
                <p className="text-start line-clamp-2 font-semibold w-full">
                    {product.name}
                </p>
                <div className="text-end">
                    <p className="whitespace-nowrap font-semibold">
                        {product.price}
                    </p>
                    <p className="whitespace-nowrap line-through text-[14px] font-semibold opacity-50">
                        {product.fixprice}
                    </p>
                </div>
            </div>

            <div className="py-4">
                <p className="font-semibold">Габариты:</p>
                <div className="grid grid-cols-3 text-start text-[14px] gap-2 py-1">
                    <div>
                        <p className="opacity-60">Длина</p> <p>189 sm</p>
                    </div>
                    <div>
                        <p className="opacity-60">Ширина</p> <p>103 sm</p>
                    </div>
                    <div>
                        <p className="opacity-60">Высота</p> <p>90 sm</p>
                    </div>
                </div>
            </div>

            <div className="pt-4 flex gap-4">
                {/* <ActiveFurniture product={product} /> */}

                <button className="btn btn-sm flex-1">
                    <i className="bi bi-cart"></i> В корзину
                </button>
            </div>
        </div>
    )
}

export default ProductCard