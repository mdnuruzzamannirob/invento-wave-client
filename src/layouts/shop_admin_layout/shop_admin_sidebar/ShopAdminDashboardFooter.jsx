import { FaUser } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const ShopAdminDashboardFooter = () => {
  const { user } = useAuth();
  return (
    <div className="flex items-center gap-2 pl-5 pr-2 py-5">
      {user?.photoURL ? (
        <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
      ) : (
        <p className="w-20 h-20  overflow-hidden rounded-full mt-3">
          <FaUser className="w-full h-full text-sky-500" />
        </p>
      )}
      <div className="overflow-hidden">
        <h3 className="text-sm font-semibold">{user?.displayName}</h3>
        <p title={user?.email} className="text-sm opacity-70">
          <small>{user?.email}</small>
        </p>
      </div>
    </div>
  );
};

export default ShopAdminDashboardFooter;
