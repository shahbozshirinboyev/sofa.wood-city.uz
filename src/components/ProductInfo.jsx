import { useLocation } from "react-router-dom";

function ProductInfo() {
    const location = useLocation();
    const product = location.state?.product;
  
  return (
    <>
    <div className="container">
        {product?.title}
    </div>
    </>
  )
}

export default ProductInfo