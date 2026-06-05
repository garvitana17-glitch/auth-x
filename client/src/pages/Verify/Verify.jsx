import React from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// components
import Footer from "@/custom/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button.jsx";

// store import
import { useAuthStore } from "@/store/useAuthStore";
import toast from "react-hot-toast";

const Verify = () => {
  const navigate = useNavigate();
  const { verify, verifing } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await verify(data);
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
          Verify Your <span className="text-blue-600">Email</span>
        </h1>

        {/* Form Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-80 flex flex-col gap-6"
        >
          <Input
            type="text"
            placeholder="Enter Verification Code"
            className="border border-zinc-700 h-12 text-xs font-[Inter]"
            {...register("token", { required: "Token is required" })}
          />
          {errors.token && (
            <p className="text-red-500 text-xs">{errors.token.message}</p>
          )}
          <Button
            disabled={verifing}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md font-[Space_Grotesk] cursor-pointer"
          >
            {verifing ? "Verifying..." : "Verify"}
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Verify;
