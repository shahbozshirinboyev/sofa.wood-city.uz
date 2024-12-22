// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "./services/supabase";

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
  const [furniture, setFurniture] = useState([])

  const getData = async () => {
    const { data, error } = await supabase.from("furniture").select("*");
    if (error) {
      console.error(error);
    } else {
      console.log(data);
      setFurniture(data);
    };
  }
  useEffect(() => { getData(); }, []);
  

  const [openIndex, setOpenIndex] = useState(0);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RooutLayout furniture={furniture} setOpenIndex={setOpenIndex} openIndex={openIndex} />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: "true",
          element: <HomePage furniture={furniture} />,
        },
        {
          path: "/activefurnituremenu",
          element: <ActiveFurnitureMenu furniture={furniture} />,
        },
        {
          path: "/activefurnituremenuitems",
          element: <ActiveFurnitureMenuItems furniture={furniture} />,
        },
        {
          path: "/allproductstype",
          element: <AllProductsType furniture={furniture} />
        },
        {
          path: "/company",
          element: <Company furniture={furniture} setOpenIndex={setOpenIndex} openIndex={openIndex} />
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
