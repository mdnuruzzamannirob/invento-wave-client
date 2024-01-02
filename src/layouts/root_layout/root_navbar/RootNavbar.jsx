import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { HashLoader } from "react-spinners";
import useAuth from "../../../hooks/useAuth";
import useFetchSecure from "../../../hooks/useFetchSecure";
import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import Logo from "../../../components/ui/Logo";
import DrawerMenu from "./DrawerMenu";

const RootNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user, logout } = useAuth();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setToggleProfile(false);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  const { data, refetch, isLoading, isPending } = useFetchSecure(
    `api/user/${user?.email}`,
    user?.email
  );
  refetch();

  if (isLoading || isPending) {
    return (
      <p className="h-screen flex items-center justify-center">
        <HashLoader color="#0ea5e9" />
      </p>
    );
  }

  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-pink-600 underline underline-offset-8"
            : "text-sky-400 hover:underline underline-offset-8"
        }
      >
        Home
      </NavLink>
      {data?.role === "System-Admin" ? (
        <NavLink
          to="/dashboard/manage-shop"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-pink-600 underline underline-offset-8"
              : "text-sky-400 hover:underline underline-offset-8"
          }
        >
          Dashboard
        </NavLink>
      ) : data?.role === "Shop-Manager" ? (
        <NavLink
          to="/dashboard/manage-product"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-pink-600 underline underline-offset-8"
              : "text-sky-400 hover:underline underline-offset-8 "
          }
        >
          Dashboard
        </NavLink>
      ) : (
        <NavLink
          to="/create-shop"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-pink-600 underline underline-offset-8"
              : "text-sky-400 hover:underline underline-offset-8"
          }
        >
          Create Shop
        </NavLink>
      )}
    </>
  );

  return (
    <nav
      className={`fixed z-[100] w-full ${
        scrolled
          ? "bg-gradient-to-tr from-[#3a59af] to-[#352786] py-4 transition-all duration-700 ease-in-out"
          : "bg-transparent py-6 transition-all duration-700 ease-in-out"
      }`}
    >
      <div>
        <button
          onClick={handleScrollToTop}
          className={`btn btn-square bg-pink-600 hover:bg-pink-700 border-none text-white fixed bottom-10 right-10 ${
            !scrolled && "hidden"
          }`}
        >
          <IoMdArrowDropup className="w-10 h-10" />
        </button>
      </div>
      <Container className="flex justify-between items-center">
        <Link to={"/"} className="flex items-center gap-3">
          <Logo />
        </Link>
        <div className="hidden lg:flex items-center gap-10 text-lg font-medium">
          {navLink}
          {user?.email ? (
            <div className="relative">
              {user?.photoURL ? (
                <button
                  onClick={() => setToggleProfile(!toggleProfile)}
                  className="btn btn-circle overflow-hidden border-none hover:border-none bg-transparent hover:bg-transparent"
                >
                  <img className="w-full h-full" src={user.photoURL} alt="" />
                </button>
              ) : (
                <button
                  onClick={() => setToggleProfile(!toggleProfile)}
                  className={`btn btn-circle border-2 ${
                    toggleProfile
                      ? "bg-white border-transparent hover:bg-white hover:border-transparent"
                      : "border-sky-500 bg-transparent hover:border-sky-500 hover:bg-transparent"
                  }`}
                >
                  <FaUser className="w-6 h-6 text-sky-500" />
                </button>
              )}
              {toggleProfile && (
                <div className="w-52 absolute top-16 right-0 bg-white text-black rounded-md p-3 space-y-3">
                  <h2
                    title={user?.displayName}
                    className="btn btn-sm w-full justify-start rounded-md overflow-hidden text-sm"
                  >
                    {user?.displayName}
                  </h2>
                  <h2
                    title={user?.email}
                    className="btn btn-sm w-full justify-start rounded-md overflow-hidden text-sm"
                  >
                    {user?.email}
                  </h2>
                  <button
                    onClick={() => logout()}
                    className="btn btn-sm w-full rounded-md text-sm"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {" "}
              <Link
                to={"/login"}
                className="btn btn-sm text-lg text-sky-400 hover:underline underline-offset-8 border-none bg-transparent hover:bg-transparent px-3 rounded-md"
              >
                Login
              </Link>
              <Link to={"/register"}>
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>
        <div className="lg:hidden">
          <label className="btn btn-square swap swap-rotate rounded-md  bg-pink-600 hover:bg-pink-700 text-white border-none">
            {/* this hidden checkbox controls the state */}
            <input onClick={() => setToggleMenu(!toggleMenu)} type="checkbox" />

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
      </Container>

      <DrawerMenu toggleMenu={toggleMenu} data={data} />
    </nav>
  );
};

export default RootNavbar;
