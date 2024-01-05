import {
  MdSpaceDashboard,
  MdOutlineManageHistory,
  MdHistoryEdu,
} from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../../components/ui/Logo";
import { IoCard } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { LiaSellsy } from "react-icons/lia";
import ShopAdminDashboardFooter from "./ShopAdminDashboardFooter";

const ShopAdminSidebar = () => {
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
          to="/dashboard"
          className={
            location.pathname === "/dashboard"
              ? "btn btn-sm h-10 text-white bg-white/10 hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium mt-[7px]"
              : "btn btn-sm h-10 text-white hover:text-white bg-transparent hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium mt-[7px]"
          }
        >
          <MdSpaceDashboard /> Dashboard
        </NavLink>{" "}
        <NavLink
          to="/dashboard/add_product"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-sm h-10 text-white bg-white/10 hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
              : "btn btn-sm h-10 text-white hover:text-white bg-transparent hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
          }
        >
          <IoMdAdd /> Add Product
        </NavLink>
        <NavLink
          to="/dashboard/manage_products"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-sm h-10 text-white bg-white/10 hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
              : "btn btn-sm h-10 text-white hover:text-white bg-transparent hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
          }
        >
          <MdOutlineManageHistory /> Manage Products
        </NavLink>
        <NavLink
          to="/dashboard/sell_products"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-sm h-10 text-white bg-white/10 hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
              : "btn btn-sm h-10 text-white hover:text-white bg-transparent hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
          }
        >
          <LiaSellsy /> Sell Products
        </NavLink>
        <NavLink
          to="/dashboard/sales_history"
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
          to="/dashboard/purchase_subscription"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-sm h-10 text-white bg-white/10 hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
              : "btn btn-sm h-10 text-white hover:text-white bg-transparent hover:bg-white/10 border-none shadow-none rounded-md justify-start text-base font-medium"
          }
        >
          <IoCard /> Purchase Subscription
        </NavLink>
      </div>

      {/* shop admin dashboard footer part */}
      <ShopAdminDashboardFooter />
    </div>
  );
};

export default ShopAdminSidebar;
