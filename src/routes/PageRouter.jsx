import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root_layout/RootLayout";
import NotFoundPage from "../pages/error_pages/NotFoundPage";
import HomePage from "../pages/root_pages/HomePage";
import AuthChecker from "./route_checker/AuthChecker";
import CreateShopPage from "../pages/root_pages/CreateShopPage";
import LoginPage from "../pages/root_pages/LoginPage";
import RegisterPage from "../pages/root_pages/RegisterPage";
import ShopAdminRouteChecker from "./route_checker/ShopAdminRouteChecker";
import AdminRouteChecker from "./route_checker/AdminRouteChecker";
import ForbiddenPage from "../pages/error_pages/ForbiddenPage";
import UnauthorizedPage from "../pages/error_pages/UnauthorizedPage";

const PageRoute = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetch("/pricing.json"),
      },
      {
        path: "create-shop",
        element: (
          <AuthChecker>
            <CreateShopPage />
          </AuthChecker>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: <AuthChecker>{/* <DashboardLayout /> */}</AuthChecker>,

    children: [
      // manager dashboard routes //
      {
        path: "manage-product",
        element: (
          <ShopAdminRouteChecker>
            {/* <ManageProduct /> */}
          </ShopAdminRouteChecker>
        ),
      },
      {
        path: "sales-Collection",
        element: (
          <ShopAdminRouteChecker>
            {/* <SalesCollection /> */}
          </ShopAdminRouteChecker>
        ),
      },
      {
        path: "shop-sale-summery",
        element: (
          <ShopAdminRouteChecker>
            {/* <ShopSaleSummery /> */}
          </ShopAdminRouteChecker>
        ),
      },
      {
        path: "subscription",
        element: (
          <ShopAdminRouteChecker>
            {/* <SubscriptionPayment /> */}
          </ShopAdminRouteChecker>
        ),
        loader: () => fetch("/pricing.json"),
      },
      {
        path: "manage-product/add-product",
        element: (
          <ShopAdminRouteChecker>{/* <AddProduct /> */}</ShopAdminRouteChecker>
        ),
      },
      {
        path: "sales-Collection/checkout/:id",
        element: (
          <ShopAdminRouteChecker> {/* <CheckOut /> */}</ShopAdminRouteChecker>
        ),
      },
      {
        path: "subscription/checkout/:plan",
        element: (
          <ShopAdminRouteChecker>
            {" "}
            {/* <PriceCheckout /> */}
          </ShopAdminRouteChecker>
        ),
        loader: () => fetch("/pricing.json"),
      },
      {
        path: "manage-product/update-product/:id",
        element: (
          <ShopAdminRouteChecker>
            {/* <UpdateProduct /> */}
          </ShopAdminRouteChecker>
        ),
      },

      // admin dashboard routes //
      {
        path: "manage-shop",
        element: (
          <AdminRouteChecker>{/* <AdminManageShop /> */}</AdminRouteChecker>
        ),
      },
      {
        path: "admin-sale-summery",
        element: (
          <AdminRouteChecker>{/* <AdminSaleSummery /> */}</AdminRouteChecker>
        ),
        loader: () => fetch("/pricing.json"),
      },
    ],
  },
  {
    path: "/error/unauthorized",
    element: <UnauthorizedPage />,
  },
  {
    path: "/error/forbidden",
    element: <ForbiddenPage />,
  },
]);

export default PageRoute;
