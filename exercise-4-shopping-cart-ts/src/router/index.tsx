import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/home";
import Root from "../pages/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
