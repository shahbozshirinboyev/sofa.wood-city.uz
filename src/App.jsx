// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import RooutLayout from "./layouts/RooutLayout";

// pages
import ErrorPage from "./pages/ErrorPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RooutLayout />,
      errorElement: <ErrorPage />,
      children: [],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
