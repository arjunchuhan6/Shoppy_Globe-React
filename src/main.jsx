import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Notfound from "./components/Notfound.jsx";
import appStore from "./utils/appStore.js";
import Loader from "./components/Loader.jsx";

const Home = lazy(() => import("./components/Home.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));
const ProductDetail = lazy(() => import("./components/ProductDetail.jsx"));
//routing to different page
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound />,

    children: [
      {
        path: "/",
        element: (
          <Suspense fallback=<Loader />>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/productDetail/:id",
        element: (
          <Suspense fallback=<Loader />>
            <ProductDetail />{" "}
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback=<Loader />>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback=<Loader />>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  </StrictMode>
);
