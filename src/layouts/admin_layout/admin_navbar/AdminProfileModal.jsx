import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { GoHomeFill } from "react-icons/go";

const AdminProfileModal = () => {
  const [toggleProfile, setToggleProfile] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-end gap-3">
      <div className="hidden sm:block text-right">
        <h3 className="text-lg font-semibold">{user?.displayName}</h3>
        <p className="text-sm opacity-70">Admin Profile</p>
      </div>
      <div className="md:relative flex items-center">
        {user?.photoURL ? (
          <button
            onClick={() => setToggleProfile(!toggleProfile)}
            className="btn btn-circle overflow-hidden border-none hover:border-none bg-transparent hover:bg-transparent"
          >
            <img
              className="w-10 h-10 sm:w-full sm:h-full rounded-full"
              src={user.photoURL}
              alt="user photo"
            />
          </button>
        ) : (
          <button
            onClick={() => setToggleProfile(!toggleProfile)}
            className={`btn btn-circle border-2 ${
              toggleProfile
                ? "bg-white border-sky-500 hover:border-sky-500 hover:bg-white"
                : " bg-transparent hover:border-sky-500 hover:bg-transparent"
            }`}
          >
            <FaUser className="w-6 h-6 text-sky-500" />
          </button>
        )}
        {toggleProfile && (
          <div className="w-[280px] md:w-80 absolute top-24 md:top-20 right-5 md:right-0 bg-white text-black rounded-md border-2 overflow-hidden">
            <div className="bg-gradient-to-br from-[#3a59af] to-[#352786] text-white flex items-center gap-3 p-5">
              {user?.photoURL ? (
                <img
                  className="w-12 h-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <p className="w-12 h-12  overflow-hidden rounded-full mt-3">
                  <FaUser className="w-full h-full text-sky-500" />
                </p>
              )}
              <div>
                <h3 className="text-base font-semibold">{user?.displayName}</h3>
                <p title={user?.email} className="text-base opacity-70">
                  <small>{user?.email}</small>
                </p>
              </div>
            </div>
            <div className="space-y-2 p-5">
              <Link
                to="/"
                className="btn btn-sm h-10 w-full bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium text-[#3a59af]"
              >
                <GoHomeFill /> Home
              </Link>
              <Link
                to="/admin_dashboard/settings"
                className="btn btn-sm h-10 w-full bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium text-[#3a59af]"
              >
                <FaUser />
                Profile Page
              </Link>
              <Link
                to="/admin_dashboard/settings"
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

export default AdminProfileModal;
