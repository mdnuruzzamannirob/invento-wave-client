import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import ShopAdminNavbar from "./shop_admin_navbar/ShopAdminNavbar";
import ShopAdminSidebar from "./shop_admin_sidebar/ShopAdminSidebar";

const ShopAdminLayout = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - Invento Wave</title>
      </Helmet>
      <div className="min-h-screen font-Fira">
        <div className="left-0 top-0 fixed w-full h-[82px] xl:pl-[250px] z-40">
          <ShopAdminNavbar />
        </div>
        <div className="hidden xl:block h-full left-0 top-0 fixed w-[250px] z-50">
          <ShopAdminSidebar />
        </div>

        <div className="min-h-full xl:ml-[250px] px-5 sm:px-8 md:px-10 pt-[116px] pb-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ShopAdminLayout;
