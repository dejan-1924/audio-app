import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import RootLayout from "./components/RootLayout";
import Login from "./pages/Auth/Login";
import ProductsPage from "./pages/Products/ProductsPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import CartPage from "./pages/Cart/CartPage";
import WishListPage from "./pages/WishList/WishListPage";
import ProductPage from "./pages/Products/ProductPage";
import { Navigate } from "react-router-dom";
import AuthRoute from "./util/AuthRoute";
import MyOrdersPage from "./pages/Profile/Orders/MyOrdersPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element={<HomePage></HomePage>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/profile" element={<ProfilePage></ProfilePage>} />
      <Route path="/shop" element={<ProductsPage></ProductsPage>} />
      <Route path="/shop/item/:id" element={<ProductPage></ProductPage>} />
      <Route path="/cart" element={<CartPage></CartPage>} />
      <Route element={<AuthRoute></AuthRoute>}>
        <Route path="/wishlist" element={<WishListPage></WishListPage>} />
        <Route path="/profile/orders" element={<MyOrdersPage></MyOrdersPage>} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
