import Dashboard from "../layouts/DashBoard";
import Customer from "../pages/customer";
import Product from "../pages/product";
import Login from "../components/Login";
import Signup from "../components/Signup";
import GuestLayout from "../layouts/GuestLayout";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const BrowserRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={BrowserRoutes} />;
};

export default Router;
