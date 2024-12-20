// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RooutLayout />,
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
        },{
          path: "/company",
          element: <Company />
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
