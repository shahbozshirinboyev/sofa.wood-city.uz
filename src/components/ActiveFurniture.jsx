import React, { useEffect, useState } from "react";

function ActiveFurniture({ setActiveProduct, activeProduct }) {
    
  const [product, setProduct] = useState(activeProduct);
  useEffect(() => { setProduct(activeProduct); }, [activeProduct]);

  console.log(product);
  return (
    <>
      <dialog id={`${product.id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
            <br />
            <br />
            <span>{product.name}</span>
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default ActiveFurniture;
