import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home";
import { ProductListPage } from "./pages/product-list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/produtos",
    element: <ProductListPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
