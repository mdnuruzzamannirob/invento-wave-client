import bg from "../../assets/login-bg-light.png";
import logo from "../../assets/invento-wave-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/ui/SocialLogin";
import Button from "../../components/ui/Button";
import RegisterPageForm from "../../components/root_pages_components/register_page_components/RegisterPageForm";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Register - Invento Wave</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-cover bg-no-repeat bg-center min-h-screen px-5 font-Fira pb-10"
      >
        <div className="max-w-md mx-auto flex items-center justify-between pt-10 mb-10">
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
            <h2 className="text-center mt-5 sm:mt-8 text-lg font-bold opacity-90 uppercase">
              Register
            </h2>

            {/* register form */}
            <RegisterPageForm />
          </div>
          <div className="w-full max-w-md mx-auto text-center mt-6 text-black text-sm">
            <h3>
              Already have account?
              <Link
                to={"/login"}
                className="ml-2 text-black hover:underline font-medium underline-offset-4"
              >
                Login
              </Link>
            </h3>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
