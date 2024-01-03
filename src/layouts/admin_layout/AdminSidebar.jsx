import { MdSpaceDashboard } from "react-icons/md";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../components/ui/Logo";
import { IoLogOut } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";

const AdminSidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden bg-gray-50">
      <div className="flex flex-col px-2 gap-2">
        <Link
          to={"/"}
          className="h-[82px] flex justify-center items-center gap-2"
        >
          <Logo imgClass="w-6 h-6" titleClass="text-lg" />
        </Link>
        <NavLink
          to="/admin_dashboard"
          className={
            location.pathname === "/admin_dashboard"
              ? "btn btn-sm h-10 text-sky-400 bg-black/5 hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
              : "btn btn-sm h-10 text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
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
          <MdSpaceDashboard /> Manage Pricing
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
          <MdSpaceDashboard /> Sales History
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
          <MdSpaceDashboard /> All Users
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
          <MdSpaceDashboard /> All Shops
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
          <MdSpaceDashboard /> Message Box
        </NavLink>
        {/* divider */}
        <div className="divider my-0"></div>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-sm h-10 text-sky-400 bg-black/5 hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
              : "btn btn-sm h-10 text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
          }
        >
          <GoHomeFill /> Home
        </NavLink>
        <NavLink
          to="/admin_dashboard/settings"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-sm h-10 text-sky-400 bg-black/5 hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
              : "btn btn-sm h-10 text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
          }
        >
          <MdSpaceDashboard /> Settings
        </NavLink>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="btn btn-sm h-10 w-full text-sky-400 hover:text-sky-500 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
        >
          <IoLogOut />
          Log out
        </button>
      </div>
      <div className="flex items-center gap-2 pl-5 py-5">
        {user?.photoURL ? (
          <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
        ) : (
          <p className="w-20 h-20  overflow-hidden rounded-full mt-3">
            <FaUser className="w-full h-full text-sky-500" />
          </p>
        )}
        <div>
          <h3 className="text-xs xl:text-sm font-semibold">
            {user?.displayName}
          </h3>
          <p title={user?.email} className="text-xs xl:text-sm opacity-60">
            <small>{user?.email}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
