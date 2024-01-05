import { MdHistoryEdu, MdSpaceDashboard } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../../components/ui/Logo";
import { FaStore, FaUsers } from "react-icons/fa";
import { IoIosChatboxes, IoMdPricetags } from "react-icons/io";
import AdminDashboardFooter from "./AdminDashboardFooter";

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-gray-100 border-r-2">
      <div className="flex flex-col px-2 gap-2">
        <Link
          to={"/"}
          className="h-[83px] flex justify-center items-center gap-3 border-b-2"
        >
          <Logo imgClass="w-6 h-6" titleClass="text-lg" />
        </Link>
        <NavLink
          to="/admin_dashboard"
          className={
            location.pathname === "/admin_dashboard"
              ? "btn btn-sm h-10 text-sky-400 bg-black/5 hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium mt-[7px]"
              : "btn btn-sm h-10 text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium mt-[7px]"
          }
        >
          <MdSpaceDashboard /> Dashboard
        </NavLink>{" "}
        <NavLink
          to="/admin_dashboard/manage_pricing"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-sm h-10 text-sky-400 bg-black/5 hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
              : "btn btn-sm h-10 text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
          }
        >
          <IoMdPricetags /> Manage Pricing
        </NavLink>
        <NavLink
          to="/admin_dashboard/sales_history"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-sm h-10 text-sky-400 bg-black/5 hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
              : "btn btn-sm h-10 text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
          }
        >
          <MdHistoryEdu /> Sales History
        </NavLink>
        <NavLink
          to="/admin_dashboard/all_users"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-sm h-10 text-sky-400 bg-black/5 hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
              : "btn btn-sm h-10 text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
          }
        >
          <FaUsers /> All Users
        </NavLink>
        <NavLink
          to="/admin_dashboard/all_shops"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-sm h-10 text-sky-400 bg-black/5 hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
              : "btn btn-sm h-10 text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
          }
        >
          <FaStore />
          All Shops
        </NavLink>
        <NavLink
          to="/admin_dashboard/message_box"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-sm h-10 text-sky-400 bg-black/5 hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
              : "btn btn-sm h-10 text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
          }
        >
          <IoIosChatboxes /> Message Box
        </NavLink>
      </div>

      {/* admin dashboard footer part */}
      <AdminDashboardFooter />
    </div>
  );
};

export default AdminSidebar;
