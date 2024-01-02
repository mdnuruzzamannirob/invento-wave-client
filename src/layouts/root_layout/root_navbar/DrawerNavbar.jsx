import { Link, NavLink } from "react-router-dom";
import Logo from "../../../components/ui/Logo";
import {
  FaStore,
  FaUserLock,
  FaUserEdit,
  FaUserCircle,
  FaBloggerB,
} from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdSpaceDashboard } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import PropTypes from "prop-types";
import { IoLogOut } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";

const DrawerMenu = ({ toggleMenu, userData }) => {
  const { user, logout } = useAuth();
  return (
    <div
      className={`lg:hidden fixed top-0 left-0 h-screen w-9/12 sm:w-1/2 md:w-2/5 bg-white transition-transform transform ${
        toggleMenu ? "translate-x-0" : "-translate-x-full"
      } duration-500 ease-in-out z-50`}
    >
      <div className="flex flex-col px-6 gap-1">
        <Link
          to={"/"}
          className="h-[82px] flex justify-center items-center gap-3 border-b-2 mb-5"
        >
          <Logo imgClass="w-8 h-8" titleClass="text-2xl sm:text-2xl" />
        </Link>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn text-sky-400 bg-black/5 hover:bg-black/5 text-lg border-none shadow-none rounded-md justify-start font-medium"
              : "btn text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 text-lg border-none shadow-none rounded-md justify-start font-medium"
          }
        >
          <GoHomeFill /> Home
        </NavLink>
        {userData?.role === "System-Admin" ? (
          <NavLink
            to="/admin_dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "btn text-sky-400 bg-black/5 hover:bg-black/5 text-lg border-none shadow-none rounded-md justify-start font-medium"
                : "btn text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 text-lg border-none shadow-none rounded-md justify-start font-medium"
            }
          >
            <MdSpaceDashboard /> Dashboard
          </NavLink>
        ) : userData?.role === "Shop-Manager" ? (
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "btn text-sky-400 bg-black/5 hover:bg-black/5 text-lg border-none shadow-none rounded-md justify-start font-medium"
                : "btn text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 text-lg border-none shadow-none rounded-md justify-start font-medium"
            }
          >
            <MdSpaceDashboard />
            Dashboard
          </NavLink>
        ) : (
          <NavLink
            to="/create-shop"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "btn text-sky-400 bg-black/5 hover:bg-black/5 text-lg border-none shadow-none rounded-md justify-start font-medium"
                : "btn text-sky-400 hover:text-sky-400 bg-transparent hover:bg-black/5 text-lg border-none shadow-none rounded-md justify-start font-medium"
            }
          >
            <FaStore />
            Create Shop
          </NavLink>
        )}
        <button className="btn w-full text-lg text-sky-400 hover:text-sky-500 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium">
          <FaBloggerB />
          Blog
        </button>
        <button className="btn w-full text-lg text-sky-400 hover:text-sky-500 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium">
          <RiContactsFill />
          Contact Us
        </button>
        {user?.email ? (
          <>
            <button className="btn w-full text-lg text-sky-400 hover:text-sky-500 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium">
              <FaUserCircle />
              Profile
            </button>
            <button
              onClick={() => logout()}
              className="btn w-full text-lg text-sky-400 hover:text-sky-500 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
            >
              <IoLogOut />
              Log out
            </button>
          </>
        ) : (
          <>
            {" "}
            <Link
              to={"/login"}
              className="btn w-full text-lg text-sky-400 hover:text-sky-500 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
            >
              <FaUserLock />
              Login
            </Link>
            <Link
              to={"/register"}
              className="btn w-full text-lg text-sky-400 hover:text-sky-500 bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
            >
              <FaUserEdit />
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

DrawerMenu.propTypes = {
  toggleMenu: PropTypes.bool,
  userData: PropTypes.object,
};

export default DrawerMenu;
