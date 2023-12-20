import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PageHeader } from "../../components";
import { BiUser } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const loginValidationSchema = yup.object().shape({
    userName: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  // submit login
  const submitLogin = (data) => {
    console.log(data);
  };
  return (
    <>
      <PageHeader title={"Login to Electroshop"} />
      {/* login form */}
      <div className="flex flex-start">
        <div className="w-[350px] md:w-[600px] lg:w-[850px] bg-shop-bg-gray-light h-auto mb-8 flex flex-start py-16">
          <form
            onSubmit={handleSubmit(submitLogin)}
            className="px-2 md:px-8 w-[300px] md:w-[520px] lg:w-[750px] space-y-4"
          >
            {/* user Name */}
            <div className="flex flex-col gap-2 text-sm text-shop-gray-dark font-semibold">
              <label htmlFor="userName">User name:</label>
              <div className="w-full flex">
                {/* icon */}
                <div className="flex flex-center w-10 h-10 bg-shop-gray-dark text-white relative">
                  <BiUser className="text-2xl" />
                  <div className="h-2 w-2 bg-white absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                </div>
                {/* input */}
                <input
                  type="text"
                  {...register("userName")}
                  placeholder="Enter user name"
                  className="flex-1 w-full h-10 outline-none border-none px-4 text-center bg-white/80"
                />
              </div>
              {errors.userName && (
                <span className="text-sm text-red-600 font-normal text-center">
                  {errors.userName.message}
                </span>
              )}
            </div>
            {/* password */}
            <div className="flex flex-col gap-2 text-sm text-shop-gray-dark font-semibold">
              <label htmlFor="password">Password:</label>
              <div className="w-full flex">
                {/* icon */}
                <div className="flex flex-center w-10 h-10 bg-shop-gray-dark text-white relative">
                  <MdPassword className="text-2xl" />
                  <div className="h-2 w-2 bg-white absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                </div>
                {/* input */}
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Enter password"
                  className="flex-1 w-full h-10 outline-none border-none px-4 text-center bg-white/80"
                />
              </div>
              {errors.password && (
                <span className="text-sm text-red-600 font-normal text-center">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button className="bg-shop-bg-footer flex flex-center gap-2 text-white text-sm w-full h-10 hover:bg-shop-gray-dark smooth-transition">
              <AiOutlineLogin className="text-lg" />
              <span>Login</span>
            </button>
            <div>
              <span className="text-sm text-shop-gray-dark">
                Youe do not have an account?{" "}
                <Link to={"/register"}>
                  <span
                    className="font-semibold text-shop-bg-footer hover:underline
                  "
                  >
                    Register here
                  </span>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
