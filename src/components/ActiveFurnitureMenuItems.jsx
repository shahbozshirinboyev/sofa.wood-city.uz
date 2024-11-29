import { useLocation } from "react-router-dom";

function ActiveFurnitureMenuItems() {
  const location = useLocation();
  const activeMenuFurniture = location.state?.activeMenuFurniture;
  return (
    <>
      <div className="container py-8">
        <p>ActiveFurnitureMenuItems</p>
        <div>
          {activeMenuFurniture?.map((product) => (
            <p>{product.name}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ActiveFurnitureMenuItems;
