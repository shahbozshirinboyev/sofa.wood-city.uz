import React, { useEffect, useState } from "react";

function ActiveFurniture({ product }) {
  console.log(product)
  return (
    <>

      <button className="btn btn-sm flex-1" onClick={() => { document.getElementById(`${product.id}`).showModal(); }} >
        <i className="bi bi-arrow-up-right"></i> Подробнее
      </button>

      <dialog id={`${product.id}`} className="modal">
        <div className="modal-box p-0 max-w-5xl">
          
          {/* Modal header Start */}
          <form
            method="dialog"
            className="border-b-[2px] h-[60px] grid grid-cols-2 items-center px-[24px] "
          >
            <span className="font-bold whitespace-nowrap">
              {product.name}
            </span>
            <div className="text-end">
              <button className="btn btn-sm border-0 btn-circle text-center items-center">
                <i className="bi bi-x-lg flex justify-center items-center"></i>
              </button>
            </div>
          </form>
          {/* Modal header End */}

          <>
            <div className="p-5">Classname</div>
          </>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default ActiveFurniture;