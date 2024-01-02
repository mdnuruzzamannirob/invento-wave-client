import { Link, NavLink } from "react-router-dom";
import Logo from "../../../components/ui/Logo";
import { FaStore, FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdSpaceDashboard } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import PropTypes from "prop-types";

const DrawerMenu = ({ toggleMenu, data }) => {
  const { user, logout } = useAuth();
  return (
    <div
      className={`lg:hidden fixed top-0 left-0 h-screen w-4/6 sm:w-2/5   bg-white transition-transform transform ${
        toggleMenu ? "translate-x-0" : "-translate-x-full"
      } duration-500 ease-in-out z-50`}
    >
      <div className="flex flex-col my-8 px-5 sm:px-10 gap-3">
        <Link to={"/"} className="flex justify-center items-center gap-3 mb-3">
          <Logo
            imgClass="w-7 h-7"
            titleClass="text-lg sm:text-xl text-sky-500"
          />
        </Link>
        {user?.email ? (
          <div className="relative">
            {user?.photoURL ? (
              <div className="flex items-center justify-center">
                <img
                  className="w-28 h-28 rounded-full mb-3"
                  src={user.photoURL}
                  alt="profile image"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <p className="w-28 h-28  overflow-hidden rounded-full mb-3">
                  <FaUser className="w-full h-full text-sky-500" />
                </p>
              </div>
            )}
            <div className="bg-white text-black rounded-md py-3 space-y-3">
              <button className="btn btn-sm w-full rounded-md">
                {user?.displayName}
              </button>
              <button className="btn btn-sm w-full rounded-md">
                {user?.email}
              </button>
              <button
                onClick={() => logout()}
                className="btn btn-sm w-full rounded-md"
              >
                Log out
              </button>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <Link to={"/login"} className="btn btn-sm rounded-md">
              Login
            </Link>
            <Link to={"/register"} className="btn btn-sm rounded-md">
              Register
            </Link>
          </>
        )}
        <hr className="mb-3" />
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-pink-600 underline underline-offset-8 btn  text-base"
              : "text-sky-400 hover:text-pink-600 btn  text-base"
          }
        >
          <GoHomeFill /> Home
        </NavLink>
        {data?.role === "System-Admin" ? (
          <NavLink
            to="/dashboard/manage-shop"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-pink-600 underline underline-offset-8 btn  text-base"
                : "text-sky-400 hover:text-pink-600 btn  text-base"
            }
          >
            <MdSpaceDashboard /> Dashboard
          </NavLink>
        ) : data?.role === "Shop-Manager" ? (
          <NavLink
            to="/dashboard/manage-product"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-pink-600 underline underline-offset-8 btn  text-base"
                : "text-sky-400 hover:text-pink-600 btn  text-base"
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
                ? "text-pink-600 underline underline-offset-8 btn text-base"
                : "text-sky-400 hover:text-pink-600 btn  text-base"
            }
          >
            <FaStore />
            Create Shop
          </NavLink>
        )}
      </div>
    </div>
  );
};

DrawerMenu.propTypes = {
  toggleMenu: PropTypes.bool,
  data: PropTypes.object,
};

export default DrawerMenu;
