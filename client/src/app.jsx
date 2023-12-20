import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home, Product, Products, Login, Register, ShopingCart } from "./pages";
import {
  Footer,
  Navbar,
  SearchBar,
  WelcomeBar,
  BottomMenu,
} from "./components";

export function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <SearchBar />
        <WelcomeBar />
        <Outlet />
        <Footer />
        <BottomMenu />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },

        {
          path: "/products/cat/:catID",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/cart/",
          element: <ShopingCart />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
