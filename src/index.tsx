import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Cart } from "./components/pages/Cart/Cart";
import { Favorites } from "./components/pages/Favorites/Favorites";
import { Profile } from "./components/pages/Profile/Profile";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Catalog } from "./components/pages/Catalog/Catalog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      {
        path: "catalog/",
        element: <Catalog />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
