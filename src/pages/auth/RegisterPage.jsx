import bg from "../../assets/login-bg-dark.jpg";
import logo from "../../assets/invento-wave-logo.png";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const [checked, setChecked] = useState(false);
  const [checkedError, setCheckedError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (!checked) {
      return setCheckedError("*accept terms and conditions");
    } else {
      setCheckedError("");
    }
  };
  return (
    <>
      <Helmet>
        <title>Register - Invento Wave</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-cover bg-no-repeat bg-center h-screen"
      >
        <div className="flex items-center justify-center gap-3 pt-10 mb-8">
          <img className="w-8 h-8" src={logo} alt="" />
          <h2 className="text-xl md:text-2xl  text-sky-400">
            Invento <span className="text-pink-600">Wave</span>
          </h2>
        </div>

        {/* form part */}
        <div className="flex flex-col justify-center items-center">
          {" "}
          <div className="w-full max-w-md shadow-2xl bg-base-100 rounded-md">
            <h2 className="text-center mt-8 text-lg font-bold opacity-90 uppercase">
              Register
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="px-8 pb-8 pt-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-Karla font-semibold text-base opacity-60">
                    Name
                  </span>
                </label>
                <input
                  {...register("name", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                  })}
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full mt-2 px-4 py-2 border border-gray-800/30 outline-none focus:border-sky-500   font-Karla opacity-80 rounded-md"
                />
                {errors.name?.type === "required" && (
                  <span className="text-red-600">*name is required.</span>
                )}
                {errors.name?.type === "minLength" && (
                  <span className="text-red-600">
                    *name must be at least 3 characters long.
                  </span>
                )}
                {errors.name?.type === "maxLength" && (
                  <span className="text-red-600">
                    *name cannot exceed 20 characters.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-Karla font-semibold text-base opacity-60">
                    Email
                  </span>
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full mt-2 px-4 py-2 border border-gray-800/30 outline-none focus:border-sky-500   font-Karla opacity-80 rounded-md"
                />
                {errors.email?.type === "required" && (
                  <span className="text-red-600">*email is required.</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-600">
                    *enter a valid email address.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-Karla font-semibold text-base opacity-60">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    p: 2,
                    minLength: 6,
                    maxLength: 36,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/,
                  })}
                  type="password"
                  placeholder="Enter your password..."
                  className="w-full mt-2 px-4 py-2 border border-gray-800/30 outline-none focus:border-sky-500   font-Karla opacity-80 rounded-md"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">*password is required.</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    *password must be at least 6 characters long.
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    *password cannot exceed 36 characters.
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    *password must include at least one uppercase letter, one
                    lowercase letter, and one special character.
                  </span>
                )}
              </div>
              <div className="mt-2">
                <label className="label">
                  <span className="label-text font-Karla font-semibold text-base opacity-60">
                    Profile image
                  </span>
                </label>
                <input
                  {...register("picture", { required: true })}
                  type="file"
                  name=""
                  id=""
                />
              </div>
              {errors.picture?.type === "required" && (
                <span className="text-red-600">*image file is required.</span>
              )}
              <div className="mt-6 flex items-center gap-2">
                <p onClick={() => setChecked(!checked)}>
                  {checked ? (
                    <RiCheckboxCircleFill className="w-6 h-6 text-sky-400" />
                  ) : (
                    <RiCheckboxBlankCircleLine className="w-6 h-6 text-sky-400" />
                  )}
                </p>
                <p
                  className={`text-sm opacity-60 font-semibold ${
                    checked ? " opacity-80" : ""
                  }`}
                >
                  I accept Terms and Conditions
                </p>
              </div>
              {checkedError && (
                <span className="text-red-600">{checkedError}</span>
              )}
              <div className="form-control mt-6">
                <button className="btn bg-sky-400 hover:bg-sky-500 text-lg text-white rounded-md">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="text-center mt-8">
            <h3 className="font-semibold text-gray-300">
              Already have account?
              <Link
                to={"/login"}
                className="ml-1 hover:underline underline-offset-4 text-white"
              >
                Login
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
