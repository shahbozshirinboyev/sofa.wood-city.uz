import React, { useEffect, useState } from "react";

function ActiveFurniture({ product }) {
  return (
    <>
    
      <button className="btn btn-sm flex-1" onClick={() => { document.getElementById(`${product.id}`).showModal(); }} >
        <i className="bi bi-arrow-up-right"></i> Подробнее
      </button>

      <dialog id={`${product.id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
            <br />
            <br />
            <span>{product.name}</span>
            <br />
            <span>{product.id}</span>
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
