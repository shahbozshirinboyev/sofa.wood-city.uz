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
import ActiveFurniture from "./components/ActiveFurniture";

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
          // children: [
          //   {
          //     path: "/activefurnituremenuitems",
          //     element: <ActiveFurnitureMenuItems />
          //   }
          // ]
        },
        {
          path : "/activefurnituremenuitems",
          element: <ActiveFurnitureMenuItems />,
          children: [
            {
              path: "/activefurniture",
              element: <ActiveFurniture />
            }
          ]
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
