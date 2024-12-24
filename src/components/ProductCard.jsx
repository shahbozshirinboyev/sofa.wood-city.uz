import { useState, useRef, useEffect  } from "react"

function ProductCard({ product }) {
    console.log(product)
    const [ activeIndex, setActiveIndex ] = useState(0)

    return (
        <div className="border p-2 rounded-md" key={product.id}>

            <div className="border">
                <img src={product.images_product[activeIndex]} className="h-[220px] mx-auto object-cover" />
            </div>

            

            <div className="flex gap-4 my-2 border">
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
            <div className='border flex gap-1 p-1 overflow-hidden overflow-x-auto select-none'>
            {
                product.images_product.map((url, index)=>(
                    <img key={index} src={url} onClick={()=>{setActiveIndex(index)}} className={`w-[80px] rounded-md object-cover cursor-pointer border ${ activeIndex === index ? "border-sky-500" : "" }`} />
                ))
            }
            </div>

            <div className="mt-2 border">
                <p className="font-semibold">Габариты:</p>
                <div className="grid grid-cols-3 text-start text-[14px] gap-2 py-1">
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
            

            {/* <div className="pt-4 flex gap-4">
                <button className="btn btn-sm flex-1">
                    <i className="bi bi-cart"></i> В корзину
                </button>
            </div>
             */}
        </div>
    )
}

export default ProductCard