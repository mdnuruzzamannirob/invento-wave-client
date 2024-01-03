import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  // const navigate = useNavigate();
  const location = useLocation();

  const b =
    location.pathname === "/admin_dashboard"
      ? "Dashboard"
      : location.pathname === "/admin_dashboard/manage_pricing"
      ? "Manage Pricing"
      : location.pathname === "/admin_dashboard/sales_history"
      ? "Sales History"
      : location.pathname === "/admin_dashboard/all_users"
      ? "All Users"
      : location.pathname === "/admin_dashboard/all_shops"
      ? "All Shops"
      : location.pathname === "/admin_dashboard/message_box"
      ? "Message Box"
      : location.pathname === "/admin_dashboard/settings"
      ? "Settings"
      : "";

  return (
    <div className="h-full w-full flex items-center justify-between px-5 bg-gray-50">
      <h3 className="text-xl font-semibold">{b}</h3>
      <div className="">
        <h2>lorem</h2>
      </div>

      {/* small device menu */}
      <div className="lg:hidden">
        <label className="btn btn-circle border-none bg-white hover:bg-white/90 swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input onClick={() => setNavOpen(!navOpen)} type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div
        className={`lg:hidden fixed top-0 left-0 w-[200px] sm:w-[230px] h-screen z-50 bg-white transition-transform transform  ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } duration-700 ease-in-out z-10`}
      >
        <AdminSidebar />
      </div>
    </div>
  );
};

export default AdminNavbar;
