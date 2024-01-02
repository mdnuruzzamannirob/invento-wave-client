import { Outlet } from "react-router-dom";
import { HashLoader } from "react-spinners";
import RootFooter from "./RootFooter";
import useAuth from "../../hooks/useAuth";
import RootNavbar from "./root_navbar/RootNavbar";
import useSecureFetch from "../../hooks/useSecureFetch";

const RootLayout = () => {
  const { loader, user } = useAuth();
  const { refetch, isLoading } = useSecureFetch(
    `api/user/${user?.email}`,
    user?.email
  );
  refetch();

  if (loader || isLoading) {
    return (
      <p className="h-screen flex items-center justify-center">
        <HashLoader color="#0ea5e9" />
      </p>
    );
  }
  return (
    <div className="font-Fira overflow-hidden">
      <RootNavbar />
      <Outlet />
      <RootFooter />
    </div>
  );
};

export default RootLayout;
