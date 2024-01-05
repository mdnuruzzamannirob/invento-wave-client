import { FaStore, FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import PropTypes from "prop-types";

const ShopAdminProfileModal = ({ shopData }) => {
  const [toggleProfile, setToggleProfile] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-end gap-3">
      <div className="hidden sm:block text-right">
        <h3 className="text-lg font-semibold">{shopData?.shopName}</h3>
        <h3 className="text-sm opacity-70">{user?.displayName}</h3>
      </div>
      <div className="md:relative flex items-center">
        <button
          onClick={() => setToggleProfile(!toggleProfile)}
          className="btn btn-circle overflow-hidden border-none hover:border-none bg-transparent hover:bg-transparent"
        >
          <img
            className="w-10 h-10 sm:w-full sm:h-full rounded-full"
            src={shopData?.shopLogo}
            alt="user photo"
          />
        </button>

        {toggleProfile && (
          <div className="w-[280px] md:w-80 absolute top-24 md:top-20 right-5 md:right-0 bg-white rounded-md border-2 overflow-hidden">
            <div className="min-h-[150px] bg-gradient-to-br from-[#3a59af] to-[#352786] text-white  p-5">
              <div className="flex gap-3">
                <img
                  className="w-12 h-12"
                  src={shopData?.shopLogo}
                  alt="user photo"
                />

                <div>
                  <h3 className="text-lg font-semibold">
                    {shopData?.shopName}
                  </h3>
                  <p className="text-sm opacity-70">{shopData?.shopLocation}</p>
                </div>
              </div>
              <p className="my-5 text-justify">
                <small>{shopData?.description}</small>
              </p>
            </div>
            <div className="divider h-0 mt-0 mb-8">
              {user?.photoURL ? (
                <img
                  className="w-12 h-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <p className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                  <FaUser className="w-10 h-10 m-[6px] text-sky-500 rounded-full" />
                </p>
              )}
            </div>
            <div className="text-center text-black">
              <h3 className="text-base font-semibold">{user?.displayName}</h3>
              <p title={user?.email} className="text-base opacity-70">
                <small>{user?.email}</small>
              </p>
            </div>

            <div className="divider"></div>

            <div className="space-y-2 px-5 pb-5">
              <Link
                to="/"
                className="btn btn-sm h-10 w-full bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium text-[#3a59af]"
              >
                <GoHomeFill /> Home
              </Link>
              <Link
                to="/dashboard/settings"
                className="btn btn-sm h-10 w-full bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium text-[#3a59af]"
              >
                <FaStore />
                Shop Page
              </Link>
              <Link
                to="/dashboard/settings"
                className="btn btn-sm h-10 w-full bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium text-[#3a59af]"
              >
                <FaUser />
                Profile Page
              </Link>
              <Link
                to="/dashboard/settings"
                className="btn btn-sm h-10 w-full bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium text-[#3a59af]"
              >
                <IoSettingsSharp /> Settings
              </Link>
              <button
                onClick={() => {
                  Swal.fire({
                    text: "Are you sure you want to log out?",
                    icon: "info",
                    showCancelButton: true,
                    confirmButtonColor: "#38bdf8",
                    cancelButtonColor: "#db2777",
                    confirmButtonText: "Yes, Logout",
                    background: "#00000",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      logout();
                      navigate("/");
                    }
                  });
                }}
                className="btn btn-sm h-10 w-full text-base bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium text-[#3a59af]"
              >
                <IoLogOut />
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

ShopAdminProfileModal.propTypes = {
  shopData: PropTypes.object,
};

export default ShopAdminProfileModal;
