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
          children: [
            {
              path: "/activefurnituremenuitems",
              element: <ActiveFurnitureMenuItems />
            }
          ]
        },
        {
          path : "/activefurnituremenuitems",
          element: <ActiveFurnitureMenuItems />
        },
        {
          path: "/allproductstype",
          element: <AllProductsType />
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
