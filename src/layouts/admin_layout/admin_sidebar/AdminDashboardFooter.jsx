import { FaFacebook, FaGithub, FaGooglePlay, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../../assets/invento-wave-logo.png";

const AdminDashboardFooter = () => {
  return (
    <div className="p-5">
      {/* logo part */}
      <Link to={"/"} className="flex items-center justify-center gap-2">
        <img className="w-5 h-5" src={logo} alt="" />
        <h2 className="text-sm font-medium text-pink-600">Invento Wave</h2>
      </Link>

      {/* menu part*/}
      <div className="flex items-center justify-center gap-5 my-3">
        <FaGithub className="opacity-60 hover:opacity-100 transition duration-300" />
        <FaLinkedin className="opacity-60 hover:opacity-100 transition duration-300" />
        <FaFacebook className="opacity-60 hover:opacity-100 transition duration-300" />
        <FaXTwitter className="opacity-60 hover:opacity-100 transition duration-300" />
        <FaGooglePlay className="opacity-60 hover:opacity-100 transition duration-300" />
      </div>
      <p className="text-center text-sm opacity-60">
        <small>
          Copyright © 2023 - All right reserved by{" "}
          <span className="font-bold">Invento Wave</span>
        </small>
      </p>
    </div>
  );
};

export default AdminDashboardFooter;
