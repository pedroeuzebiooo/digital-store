import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home";
import { ProductListPage } from "./pages/product-list";
import { ProductDetails } from "./pages/product-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/produtos",
    element: <ProductListPage />,
  },
  {
    path: "/produtos/:produtoId",
    element: <ProductDetails />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
