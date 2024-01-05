import { MdHistoryEdu, MdSpaceDashboard } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../components/ui/Logo";
import { FaStore, FaUsers } from "react-icons/fa";
import { IoIosChatboxes, IoMdPricetags } from "react-icons/io";
// import AdminDashboardFooter from "./AdminDashboardFooter";

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-gradient-to-bl from-[#3a59af] to-[#352786] text-white">
      <div className="flex flex-col px-2 gap-3">
        <Link
          to={"/"}
          className="h-[82px] flex justify-center items-center gap-3 border-b-2"
        >
          <Logo
            imgClass="w-10 h-10 bg-white p-[5px] rounded-full"
            titleClass="text-xl font-normal text-white"
          />
        </Link>
        <NavLink
          to="/admin_dashboard"
          className={
            location.pathname === "/admin_dashboard"
              ? "btn btn-sm h-10 text-white bg-white/10 hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium mt-[7px]"
              : "btn btn-sm h-10 text-white hover:text-white bg-transparent hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium mt-[7px]"
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
              ? "btn btn-sm h-10 text-white bg-white/10 hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
              : "btn btn-sm h-10 text-white hover:text-white bg-transparent hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
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
              ? "btn btn-sm h-10 text-white bg-white/10 hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
              : "btn btn-sm h-10 text-white hover:text-white bg-transparent hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
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
              ? "btn btn-sm h-10 text-white bg-white/10 hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
              : "btn btn-sm h-10 text-white hover:text-white bg-transparent hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
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
              ? "btn btn-sm h-10 text-white bg-white/10 hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
              : "btn btn-sm h-10 text-white hover:text-white bg-transparent hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
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
              ? "btn btn-sm h-10 text-white bg-white/10 hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
              : "btn btn-sm h-10 text-white hover:text-white bg-transparent hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
          }
        >
          <IoIosChatboxes /> Message Box
        </NavLink>
      </div>

      {/* admin dashboard footer part */}
      {/* <AdminDashboardFooter /> */}
    </div>
  );
};

export default AdminSidebar;
