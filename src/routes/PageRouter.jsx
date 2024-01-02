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
import AdminLayout from "../layouts/admin_layout/AdminLayout";
import ShopAdminLayout from "../layouts/shop_admin_layout/ShopAdminLayout";
import ShopAdminDashboardPage from "../pages/dashboard_pages/shop_admin/ShopAdminDashboardPage";
import AddProductPage from "../pages/dashboard_pages/shop_admin/AddProductPage";
import ManageProductsPage from "../pages/dashboard_pages/shop_admin/ManageProductsPage";
import SellProductsPage from "../pages/dashboard_pages/shop_admin/SellProductsPage";
import SalesHistoryPage from "../pages/dashboard_pages/shop_admin/SalesHistoryPage";
import PurchaseSubscriptionPage from "../pages/dashboard_pages/shop_admin/PurchaseSubscriptionPage";
import AdminDashboardPage from "../pages/dashboard_pages/admin/AdminDashboardPage";
import AllUsersPage from "../pages/dashboard_pages/admin/AllUsersPage";
import AllShopsPage from "../pages/dashboard_pages/admin/AllShopsPage";
import ManagePricingPage from "../pages/dashboard_pages/admin/ManagePricingPage";
import ShopAdminSettingPage from "../pages/dashboard_pages/shop_admin/ShopAdminSettingPage";
import HelpCenterPage from "../pages/dashboard_pages/shop_admin/HelpCenterPage";
import SubscriptionSalesHistory from "../pages/dashboard_pages/admin/SubscriptionSalesHistory";
import HelpCenterMessagesPage from "../pages/dashboard_pages/admin/HelpCenterMessagesPage";

const PageRouter = createBrowserRouter([
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

  // shop admin dashboard

  {
    path: "/dashboard",
    element: (
      <ShopAdminRouteChecker>
        <ShopAdminLayout />
      </ShopAdminRouteChecker>
    ),
    children: [
      {
        index: true,
        element: <ShopAdminDashboardPage />,
      },
      {
        path: "add_product",
        element: <AddProductPage />,
      },
      {
        path: "manage_products",
        element: <ManageProductsPage />,
      },
      {
        path: "sell_products",
        element: <SellProductsPage />,
      },
      {
        path: "sales_history",
        element: <SalesHistoryPage />,
      },
      {
        path: "purchase_subscription",
        element: <PurchaseSubscriptionPage />,
        loader: () => fetch("/pricing.json"),
      },
      {
        path: "setting",
        element: <ShopAdminSettingPage />,
      },
      {
        path: "help_center",
        element: <HelpCenterPage />,
      },

      // TODO -------------------------------

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
    ],
  },

  // admin dashboard

  {
    path: "/admin_dashboard",
    element: (
      <AdminRouteChecker>
        <AdminLayout />
      </AdminRouteChecker>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: "all_users",
        element: <AllUsersPage />,
      },
      {
        path: "all_shops",
        element: <AllShopsPage />,
      },
      {
        path: "manage_pricing",
        element: <ManagePricingPage />,
      },
      {
        path: "subscription_sales_history",
        element: <SubscriptionSalesHistory />,
      },
      {
        path: "help_center_messages",
        element: <HelpCenterMessagesPage />,
      },

      // TODO ------------------------------
      {
        path: "admin-sale-summery",
        element: (
          <AdminRouteChecker>{/* <AdminSaleSummery /> */}</AdminRouteChecker>
        ),
        loader: () => fetch("/pricing.json"),
      },
    ],
  },

  // authentication page

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  //  error page

  {
    path: "/error/unauthorized",
    element: <UnauthorizedPage />,
  },
  {
    path: "/error/forbidden",
    element: <ForbiddenPage />,
  },
]);

export default PageRouter;
