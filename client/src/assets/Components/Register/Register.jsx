import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";


const Register = ({title}) => {
  const { registerAccount, updateUserProfile } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    const { name, photoUrl, email, password } = data;
    const user = { name, photoUrl, email, password };
    console.log(user);

    //Password Verification:
    if (password.length < 6) {
      toast.error("Your Password Length must be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error(
        "Your Password Must have an Uppercase letter in the password"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error(
        "Your Password Must have an Lowercase letter in the password"
      );
      return;
    }

    registerAccount(email, password)
      .then((result) => {
        console.log(result);
        if (result.user) {
          updateUserProfile(name, email, photoUrl);
          navigate(location?.state || "/");
        }
        toast.success("Account created Successfully");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Email Already In use !");
      });
  };
  return (
    <div data-aos="fade-down"
    data-aos-anchor-placement="top-bottom"
    data-aos-easing="linear"
    data-aos-duration="1000" className="px-2 md:px-0">
      <Helmet>
        <title>
          {title}
        </title>
      </Helmet>
      <div className="container p-8 rounded-2xl mx-auto my-16 border-2 border-gray-500">
        <div>
          <h2 className="raleway mt-8 font-bold text-4xl text-center">
            Create an account
          </h2>
          <div className="flex gap-5 justify-center mt-6 items-center">
            <h2 className="text-center font-medium ">
              Already have an account ?{" "}
            </h2>
            <Link to={"/log_in"}>
              {" "}
              <h2 className="underline font-medium text-[#BE042F]">Login</h2>
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-1/2 md:mx-auto"
          >
            <div className="space-y-4">
              <label
                className="font-semibold text-xl text-[#707070]"
                htmlFor=""
              >
                Name
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="name"
                id=""
                {...register("name", { required: true })}
              />
            </div>
            <div className="space-y-4 mt-6">
              <label
                className="font-semibold text-xl text-[#707070]"
                htmlFor=""
              >
                Email
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="email"
                id=""
                {...register("email", { required: true })}
              />
            </div>
            <div className="space-y-4 mt-6">
              <label
                className="font-semibold text-xl text-[#707070]"
                htmlFor=""
              >
                Photo URL
              </label>
              <input
                className="input input-bordered w-full"
                type="url"
                name="photoUrl"
                id=""
                {...register("photoUrl", { required: true })}
              />
            </div>
            <div className="space-y-4 mt-6">
              <label
                className="font-semibold text-xl text-[#707070]"
                htmlFor=""
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="input input-bordered w-full"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  {...register("password", { required: true })}
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <FaEye className="absolute top-1/3 right-2 cursor-pointer" />
                  ) : (
                    <FaEyeSlash className="absolute top-1/3 right-2 cursor-pointer" />
                  )}
                </span>
              </div>
            </div>
            <div className="mt-8">
              <input
                className="btn btn-block rounded-3xl bg-[#BE042F] text-white  text-lg font-bold hover:scale-105 hover:bg-[#A3C0D4] hover:text-black cursor-pointer transition"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
Register.propTypes = {
  title: PropTypes.object.isRequired,
}
export default Register;
