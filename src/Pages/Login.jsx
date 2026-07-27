import React from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "../hooks/useAuth";


const Login = () => {


  let {register, loginFormSubmit, handleSubmit, navigate, errors} = useAuth();


return (
  <div className="min-h-screen  flex items-center justify-center px-4">

    <div className="w-full max-w-md  border border-zinc-800 rounded-3xl shadow-2xl p-8">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Sign in
        </h1>

        <p className="text-zinc-400 mt-2">
          Enter your credentials to continue
        </p>
      </div>

      <form
        onSubmit={handleSubmit(loginFormSubmit)}
        className="space-y-5"
      >

        {/* Email */}

        <div>
          <div className="relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Email address"
              className="w-full border border-zinc-700 rounded-2xl py-4 pl-12 pr-4 placeholder:text-zinc-500 outline-none focus:border-lime-400 transition"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
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
              placeholder="Password"
              className="w-full border border-zinc-700 rounded-2xl py-4 pl-12 pr-4 placeholder:text-zinc-500 outline-none focus:border-lime-400 transition"
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
          className="w-full bg-lime-400 hover:bg-lime-300 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
        >
          Sign in

          <ArrowRight size={20} />
        </button>

      </form>

      {/* Register */}

      <div className="mt-8 text-center text-zinc-500">
        Don't have an account?{" "}

        <button
          type="button"
          onClick={() => navigate("/register")}
          className="text-lime-400 hover:text-lime-300 font-semibold cursor-pointer"
        >
          Create one
        </button>
      </div>

    </div>
  </div>
);
};

export default Login;