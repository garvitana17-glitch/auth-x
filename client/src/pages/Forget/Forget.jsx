import React from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// components
import Footer from "@/custom/Footer";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";

// store import
import { useAuthStore } from "@/store/useAuthStore";
import toast from "react-hot-toast";

const Forgot = () => {
  const { requestingResetUrl, forgetPassword } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await forgetPassword(data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="h-dvh flex flex-col items-center justify-center bg-black text-white">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold font-[Sora]">
          Forgot <span className="text-blue-600">Password</span>
        </h1>

        {/* Form Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-80 flex flex-col gap-4"
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

          <Button
            disabled={requestingResetUrl}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md cursor-pointer"
          >
            {requestingResetUrl ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>

        <div className="mt-6 text-gray-500 text-xs font-[Inter]">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-600 font-bold cursor-pointer">
            Login
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Forgot;
