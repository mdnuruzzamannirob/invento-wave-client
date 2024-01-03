import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Invento Wave</title>
      </Helmet>
      <div className="min-h-screen font-Fira">
        <div className="left-0 top-0 fixed w-full h-[82px] lg:pl-[200px] xl:pl-[230px] z-40">
          <AdminNavbar />
        </div>
        <div className="hidden lg:block h-full left-0 top-0 fixed w-[200px] xl:w-[230px] z-50">
          <AdminSidebar />
        </div>

        <div className="min-h-full lg:ml-[200px] xl:ml-[230px] px-5 pt-[100px]  pb-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
