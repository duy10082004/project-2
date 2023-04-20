import Layout from "../components/Layout";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Product />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
];