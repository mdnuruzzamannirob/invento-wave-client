import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { GoHomeFill } from "react-icons/go";

const UserProfileModal = () => {
  const [toggleProfile, setToggleProfile] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-end gap-3">
      <div className="text-right">
        <h3 className="text-sm font-semibold">{user?.displayName}</h3>
        <p className="text-sm opacity-60">Admin Profile</p>
      </div>
      <div className="relative flex items-center">
        {user?.photoURL ? (
          <button
            onClick={() => setToggleProfile(!toggleProfile)}
            className="btn btn-circle overflow-hidden border-none hover:border-none bg-transparent hover:bg-transparent"
          >
            <img
              className="w-full h-full"
              src={user.photoURL}
              alt="user photo"
            />
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
          <div className="w-60 absolute top-20 right-0 bg-white rounded-md p-5 space-y-3 border-2 overflow-hidden">
            <div className="flex items-center gap-3">
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
                <p title={user?.email} className="text-base opacity-60">
                  <small>{user?.email}</small>
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div>
              <Link
                to="/"
                className="btn btn-sm h-10 w-full text-base bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
              >
                <GoHomeFill /> Home
              </Link>
              <Link
                to="/admin_dashboard/settings"
                className="btn btn-sm h-10 w-full text-base bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
              >
                <FaUser />
                Profile Page
              </Link>
              <Link
                to="/admin_dashboard/settings"
                className="btn btn-sm h-10 w-full text-base bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
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
                className="btn btn-sm h-10 w-full text-base bg-transparent hover:bg-black/5 border-none shadow-none rounded-md justify-start font-medium"
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

export default UserProfileModal;
