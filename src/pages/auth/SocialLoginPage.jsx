import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import usePublicAPI from "../../hooks/usePublicAPI";

const SocialLoginPage = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = usePublicAPI();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialLogin = async (login, social) => {
    const toastId = toast.loading("Progress...");
    try {
      const res = await login();

      const userInfo = {
        name: res?.user?.displayName,
        email: res?.user?.email,
        image: res?.user?.photoURL,
        role: "Logged-User",
      };
      axiosPublic
        .post(`/api/user/create/${res?.user?.email}`, userInfo)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success(`${social} login Successful!!!`, { id: toastId });
            navigate(location?.state ? location.state : "/");
          } else if (res.data.message) {
            toast.success(`${social} login Successful!!!`, { id: toastId });
            navigate(location?.state ? location.state : "/");
          }
        });
    } catch (error) {
      toast.error(error.message.slice(10), { id: toastId });
    }
  };
  return (
    <>
      <div className="divider text-xs lg:text-sm">Or Login With</div>
      <div className="w-full">
        <button
          onClick={() => handleSocialLogin(googleLogin, "Google")}
          className="w-full btn btn-md border-none bg-white hover:bg-white/90 font-medium uppercase text-base text-sky-500 rounded-md"
        >
          <FcGoogle></FcGoogle> Google
        </button>
      </div>
    </>
  );
};

export default SocialLoginPage;
