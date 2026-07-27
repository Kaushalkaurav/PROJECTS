import React from "react";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const Register = () => {

    let {register, registerFormSubmit, handleSubmit, navigate, errors} = useAuth();









  return (
  <div className="min-h-screen flex items-center justify-center px-4">

    <div className="w-full max-w-md bg-white border border-zinc-400 rounded-[28px] shadow-2xl p-8">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-black">
          Create Account
        </h1>

        <p className="text-gray-500 mt-2 text-lg">
          Register to get started
        </p>
      </div>

      <form
        onSubmit={handleSubmit(registerFormSubmit)}
        className="space-y-5"
      >

        {/* Name */}
        <div>
          <div className="relative">
            <User
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Full name"
              className="w-full h-14 rounded-2xl border border-gray-400 bg-white pl-12 pr-4 outline-none focus:border-lime-400 transition"
            />
          </div>

          {errors.name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Email address"
              className="w-full h-14 rounded-2xl border border-gray-400 bg-white pl-12 pr-4 outline-none focus:border-lime-400 transition"
            />
          </div>

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Maximum 12 characters",
                },
              })}
              type="password"
              placeholder="Create password"
              className="w-full h-14 rounded-2xl border border-gray-400 bg-white pl-12 pr-4 outline-none focus:border-lime-400 transition"
            />
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-2">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full h-14 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
        >
          Create Account
          <ArrowRight size={20} />
        </button>
      </form>

      {/* Login */}
      <div className="mt-8 text-center text-gray-500">
        Already have an account?{" "}

        <button
          type="button"
          onClick={() => navigate("/")}
          className="font-semibold text-lime-500 hover:text-lime-600 cursor-pointer"
        >
          Sign in
        </button>
      </div>

    </div>

  </div>
);
};

export default Register;