import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import { Helmet } from "react-helmet";

const Login = ({title}) => {
  const { register, handleSubmit } = useForm();
  const {logIn,googleLogIn,githubLogin,facebookLogin,}=UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const socialLogin = (providers) => {
    providers().then((result) => {
      if (result.user) {
        toast.success("Log In Successfully");
        navigate(location?.state || "/")
      }
    });
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);
    logIn(email,password)
    .then((result) => {
      console.log(result);
      if (result.user) {
        navigate(location?.state || "/")
      }
      toast.success("Log In Successfully");
    })
    .catch(()=>{
      toast.error("Invalid Credentials");
    })
  };
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-easing="linear"
    data-aos-duration="1000" className="px-2 md:px-0">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container p-8  rounded-2xl mx-auto my-16 border-2 border-gray-500">
      <div className="raleway mt-8 font-bold text-4xl text-center">
        <h2>Log In</h2>
      </div>
      <div className="mt-8">
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 md:mx-auto">
          <div className="space-y-4">
            <label className="font-semibold text-xl text-[#707070]" htmlFor="">
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
            <label className="font-semibold text-xl text-[#707070]" htmlFor="">
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
              className="btn btn-block rounded-3xl bg-[#A3C0D4] text-lg font-bold hover:scale-105 hover:bg-[#BE042F] cursor-pointer transition"
              type="submit"
              value="Log In"
            />
          </div>
          <div className="my-4 text-end flex items-center gap-4 justify-center">
            <h2 className="font-semibold text-lg">Need an account ?</h2>
            <Link
              to="/register"
              className="mr-4 md:mr-0 px-4 py-2 lg:px-6 lg:py-2 rounded-lg hover:scale-105 cursor-pointer transition text-white pp  lg:text-lg bg-[#59C6D2] "
            >
              Register
            </Link>
          </div>

          <div className="my-12 flex gap-4 items-center">
            <div className="w-1/2">
              <div className="border border-[#30325E33] "></div>
            </div>
            <h2 className="text-lg  text-[#707070] font-bold">OR</h2>
            <div className="w-1/2">
              <div className="border border-[#30325E33]"></div>
            </div>
          </div>

          <div onClick={() => socialLogin(googleLogIn)}
            className="border mb-3 border-black rounded-3xl py-3 cursor-pointer hover:scale-105 transition"
          >
            <div className="flex items-center justify-center gap-3">
              <FaGoogle className="text-[#EB4335] size-6" />
              <h2 className="font-semibold text-lg">Continue With Google</h2>
            </div>
          </div>
          <div onClick={() => socialLogin(facebookLogin)} 
          className="border mb-3 border-black rounded-3xl py-3 cursor-pointer hover:scale-105 transition">
            <div className="flex items-center justify-center gap-3">
              <FaFacebook className="text-blue-600 size-6" />
              <h2 className="font-semibold text-lg">Continue With Facebook</h2>
            </div>
          </div>
          <div onClick={() => socialLogin(githubLogin)}
           className="border mb-3 border-black rounded-3xl py-3 cursor-pointer hover:scale-105 transition">
            <div className="flex items-center justify-center gap-3">
              <FaGithub className="text-black size-6" />
              <h2 className="font-semibold text-lg">Continue With Github</h2>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
Login.propTypes = {
  title: PropTypes.object.isRequired,
}
export default Login;
