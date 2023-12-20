import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PageHeader } from "../../components";
import { BiUser } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoSaveOutline } from "react-icons/io5";
import { BsInputCursorText } from "react-icons/bs";
const Register = () => {
  const registerValidationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be of length not less than 3 characters")
      .max(15, "Username must be of length greater than 15 characters"),
    lastName: yup
      .string()
      .required("Lastname is required")
      .min(3, "Lastname must be of length not less than 3 characters")
      .max(15, "Lastname must be of length greater than 15 characters"),
    userName: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be of length not less than 3 characters")
      .max(25, "Username must be of length greater than 25 characters"),
    password: yup
      .string()
      .required("password is required")
      .min(5, "password must be of length not less than 8 characters")
      .max(15, "password must be of length greater than 15 characters"),
    passwordConfirm: yup
      .string()
      .required("Confirm your password")
      .min(5, "password must be of length not less than 8 characters")
      .max(15, "password must be of length greater than 15 characters")
      .when(
        "password",
        (password, schema) =>
          password &&
          schema.equals(password, "Password does not match confirmation")
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  // submit register
  const registerSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <>
      <>
        <PageHeader title={"Create an account"} />
        {/* register form */}
        <div className="flex flex-start">
          <div className="w-[350px] md:w-[600px] lg:w-[850px] bg-shop-bg-gray-light h-auto mb-8 flex flex-start py-16">
            <form
              onSubmit={handleSubmit(registerSubmit)}
              className="px-2 md:px-8 w-[300px] md:w-[520px] lg:w-[750px] space-y-4"
            >
              {/* first name */}
              <div className="flex flex-col gap-2 text-sm text-shop-gray-dark font-semibold">
                <label htmlFor="firstName">First name:</label>
                <div className="w-full flex">
                  {/* icon */}
                  <div className="flex flex-center w-10 h-10 bg-shop-gray-dark text-white relative">
                    <BsInputCursorText className="text-xl" />
                    <div className="h-2 w-2 bg-white absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                  </div>
                  {/* input */}
                  <input
                    type="text"
                    {...register("firstName")}
                    placeholder="Enter your first name"
                    className="flex-1 w-full h-10 outline-none border-none px-4 text-center bg-white/80"
                  />
                </div>
                {errors.firstName && (
                  <span className="text-sm text-red-600 font-normal text-center">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              {/* last name */}
              <div className="flex flex-col gap-2 text-sm text-shop-gray-dark font-semibold">
                <label htmlFor="lastName">Last name:</label>
                <div className="w-full flex">
                  {/* icon */}
                  <div className="flex flex-center w-10 h-10 bg-shop-gray-dark text-white relative">
                    <BsInputCursorText className="text-xl" />
                    <div className="h-2 w-2 bg-white absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                  </div>
                  {/* input */}
                  <input
                    type="text"
                    {...register("lastName")}
                    placeholder="Enter your last name"
                    className="flex-1 w-full h-10 outline-none border-none px-4 text-center bg-white/80"
                  />
                </div>
                {errors.lastName && (
                  <span className="text-sm text-red-600 font-normal text-center">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
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
              {/*  confirm password */}
              <div className="flex flex-col gap-2 text-sm text-shop-gray-dark font-semibold">
                <label htmlFor="passwordConfirm">Password confirm:</label>
                <div className="w-full flex">
                  {/* icon */}
                  <div className="flex flex-center w-10 h-10 bg-shop-gray-dark text-white relative">
                    <MdPassword className="text-2xl" />
                    <div className="h-2 w-2 bg-white absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                  </div>
                  {/* input */}
                  <input
                    type="password"
                    {...register("passwordConfirm")}
                    placeholder="Confirm password"
                    className="flex-1 w-full h-10 outline-none border-none px-4 text-center bg-white/80"
                  />
                </div>
                {errors.passwordConfirm && (
                  <span className="text-sm text-red-600 font-normal text-center">
                    {errors.passwordConfirm.message}
                  </span>
                )}
              </div>
              <button className="bg-shop-bg-footer flex flex-center gap-2 text-white text-sm w-full h-10 hover:bg-shop-gray-dark smooth-transition">
                <IoSaveOutline className="text-lg" />
                <span>Register</span>
              </button>
              <div>
                <span className="text-sm text-shop-gray-dark">
                  Youe have allready an account?{" "}
                  <Link to={"/login"}>
                    <span
                      className="font-semibold text-shop-bg-footer hover:underline
                  "
                    >
                      Login here
                    </span>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default Register;
