import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./admin_navbar/AdminNavbar";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Invento Wave</title>
      </Helmet>
      <div className="min-h-screen font-Fira">
        <div className="left-0 top-0 fixed w-full h-[82px] xl:pl-[250px] z-40">
          <AdminNavbar />
        </div>
        <div className="hidden xl:block h-full left-0 top-0 fixed w-[250px] z-50">
          <AdminSidebar />
        </div>

        <div className="min-h-full xl:ml-[250px] px-5 sm:px-8 md:px-10 pt-[116px] pb-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
