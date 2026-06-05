import React from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// components
import Footer from "@/custom/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// store import
import { useAuthStore } from "@/store/useAuthStore";
import toast from "react-hot-toast";

const Reset = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { resetPassword, resettingPassword } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await resetPassword(token, data);
      if (response.success === true) {
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="h-dvh flex flex-col items-center justify-center bg-black text-white">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold font-[Sora]">
          Reset <span className="text-blue-600">Password</span>
        </h1>

        {/* Form Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-80 flex flex-col gap-6"
        >
          <Input
            type="password"
            placeholder="New Password"
            className="border border-zinc-700 h-12 text-xs font-[Inter]"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}

          <Button
            disabled={resettingPassword}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md font-[Space_Grotesk] cursor-pointer"
          >
            {resettingPassword ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Reset;
