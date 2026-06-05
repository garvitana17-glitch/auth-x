import React from "react";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

// components
import Footer from "@/custom/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input.jsx";

// store import
import { useAuthStore } from "@/store/useAuthStore";

const Login = () => {
  const { login, logging } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="h-dvh flex flex-col items-center justify-center bg-black text-white">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold font-[Sora]">
          Welcome Back : Auth- <span className="text-blue-600">X</span>
        </h1>

        {/* Form Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-80 flex flex-col gap-6"
        >
          <Input
            type="email"
            placeholder="Email"
            className="border border-zinc-700 h-12 text-xs font-[Inter]"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
          <Input
            type="password"
            placeholder="Password"
            className="border border-zinc-700 h-12 text-xs font-[Inter]"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
          <Link
            to="/forgetpassword"
            className="font-bold text-zinc-500 text-xs cursor-pointer font-[Inter]"
          >
            Forget Password ?
          </Link>
          <Button
            disabled={logging}
            className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-md cursor-pointer"
          >
            {logging ? "Logging..." : "Login"}
          </Button>
        </form>

        <div className="mt-4 text-gray-500 text-xs">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-bold cursor-pointer font-[Space_Grotesk]"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
