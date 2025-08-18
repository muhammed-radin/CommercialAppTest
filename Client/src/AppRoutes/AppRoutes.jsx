import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import AuthPage from "../Pages/auth/AuthPage";
import Register from "../Pages/auth/Register";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/auth/Login";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Layout from "../Pages/Layout";
import Product from "../Pages/Product";

export default function AppRoutes() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
         { path: "home", element: <Home />,
        
          },
          { path:'product/:id' ,element: <Product/>},
        { path: "about", element: <About /> },
        { path: "auth", element: <AuthPage /> },

        {
          path: "auth",
          element: <AuthPage />,
          children: [
            {
              path: "register",
              element: <Register />,
            },
            {
              path: "login",
              element: <Login />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}
