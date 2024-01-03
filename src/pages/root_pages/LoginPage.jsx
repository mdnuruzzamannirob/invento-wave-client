import bg from "../../assets/login-bg-light.png";
import logo from "../../assets/invento-wave-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/ui/SocialLogin";
import Button from "../../components/ui/Button";
import LoginPageForm from "../../components/root_pages_components/login_page_components/LoginPageForm";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Login - Invento Wave</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-cover bg-no-repeat bg-center min-h-screen px-5 font-Fira"
      >
        <div className="max-w-md mx-auto flex items-center justify-between pt-16 mb-20">
          <Link to={"/"} className="flex items-center gap-3">
            <img className="w-10 h-10" src={logo} alt="" />
            <h2 className="text-2xl font-semibold text-pink-600">
              Invento Wave
            </h2>
          </Link>
          <Button onClick={() => navigate("/")} className={"px-10"}>
            Home
          </Button>
        </div>

        {/* form part */}
        <div className="flex flex-col justify-center items-center">
          {" "}
          <div className="w-full max-w-md shadow-2xl bg-base-100 rounded-md">
            <h2 className="text-center mt-8 text-xl font-bold opacity-90 uppercase">
              Login
            </h2>

            {/* login form  */}

            <LoginPageForm />
          </div>
          <div className="w-full max-w-md mx-auto text-center mt-8">
            <p className="flex items-center gap-2 justify-center hover:underline underline-offset-4 text-pink-600/90 text-sm">
              <CiLock className="w-5 h-5" />
              Forget Password?
            </p>
            <h3 className="mt-3 text-black text-sm">
              Don&apos;t have an account?{" "}
              <Link
                to={"/register"}
                className="ml-2 text-black hover:underline font-medium underline-offset-4"
              >
                Register
              </Link>
            </h3>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
