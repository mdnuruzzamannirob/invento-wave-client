import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import useSecureFetch from "../../hooks/useSecureFetch";

const ShopAdminRouteChecker = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();
  const { data, refetch, isLoading, isPending } = useSecureFetch(
    `api/user/${user?.email}`,
    user?.email
  );
  refetch();

  if (loader || isLoading || isPending) {
    return (
      <p className="h-screen flex items-center justify-center">
        <HashLoader color="#0ea5e9" />
      </p>
    );
  }

  if (data.role !== "Shop-Manager") {
    return <Navigate to={"/error_unauthorized"} />;
  }
  if (!user?.email) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }

  return children;
};
ShopAdminRouteChecker.propTypes = {
  children: PropTypes.node,
};

export default ShopAdminRouteChecker;
