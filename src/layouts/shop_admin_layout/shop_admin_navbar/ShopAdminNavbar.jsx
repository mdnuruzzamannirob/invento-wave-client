import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import useSecureFetch from "../../../hooks/useSecureFetch";
import ShopAdminSidebar from "../shop_admin_sidebar/ShopAdminSidebar";
import ShopAdminProfileModal from "./ShopAdminProfileModal";
import ShopAdminNotificationModal from "./ShopAdminNotificationModal";

const ShopAdminNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const { user } = useAuth();

  const {
    data: shopData,
    isLoading,
    isPending,
  } = useSecureFetch(`/api/shop/${user?.email}`, "shopData");

  if (isLoading || isPending) {
    return (
      <div className="h-full w-full bg-gradient-to-r from-[#3a59af] to-[#352786]"></div>
    );
  }

  return (
    <div className="h-full w-full flex items-center justify-end gap-5 px-5 sm:px-8 md:px-10 bg-gradient-to-r from-[#3a59af] to-[#352786] text-white">
      {/* notification part */}
      <ShopAdminNotificationModal />

      {/* shop admin profile modal part */}
      <ShopAdminProfileModal shopData={shopData} />

      {/* small device menu */}
      <div className="xl:hidden">
        <label className="btn btn-circle border-none text-white bg-transparent hover:bg-transparent swap swap-rotate">
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
        className={`xl:hidden fixed top-0 left-0 w-[250px] h-screen z-50 bg-white transition-transform transform  ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } duration-700 ease-in-out z-10`}
      >
        <ShopAdminSidebar />
      </div>
    </div>
  );
};

export default ShopAdminNavbar;
