import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Cart } from "./components/pages/Cart/Cart";
import { Favorites } from "./components/pages/Favorites/Favorites";
import { Profile } from "./components/pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart/",
        element: <Cart />,
      },
      {
        path: "favorites/",
        element: <Favorites />,
      },
      {
        path: "profile/",
        element: <Profile />,
      },
    ],
  },
], {basename: "/RivneGray"});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
