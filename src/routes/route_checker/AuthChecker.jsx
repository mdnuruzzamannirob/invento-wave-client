import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

const AuthChecker = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();

  if (loader) {
    return (
      <p className="h-screen flex items-center justify-center">
        <HashLoader color="#0ea5e9" />
      </p>
    );
  }

  if (!user?.email) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }
  return children;
};
AuthChecker.propTypes = {
  children: PropTypes.node,
};
export default AuthChecker;
