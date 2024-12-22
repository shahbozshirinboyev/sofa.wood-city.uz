// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

// layouts
import RooutLayout from "./layouts/RooutLayout";

// pages
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ActiveFurnitureMenu from "./components/ActiveFurnitureMenu";
import ActiveFurnitureMenuItems from "./components/ActiveFurnitureMenuItems";
import AllProductsType from "./components/AllProductsType";

//components
import Company from "./components/Company";

function App() {
  const [openIndex, setOpenIndex] = useState(0);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RooutLayout setOpenIndex={setOpenIndex} openIndex={openIndex} />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: "true",
          element: <HomePage />,
        },
        {
          path: "/activefurnituremenu",
          element: <ActiveFurnitureMenu />,
        },
        {
          path: "/activefurnituremenuitems",
          element: <ActiveFurnitureMenuItems />,
        },
        {
          path: "/allproductstype",
          element: <AllProductsType />
        },
        {
          path: "/company",
          element: <Company setOpenIndex={setOpenIndex} openIndex={openIndex} />
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
