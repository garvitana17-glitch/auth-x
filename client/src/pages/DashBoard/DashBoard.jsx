import React from "react";
import { useNavigate } from "react-router-dom";

// components
import { Button } from "@/components/ui/button.jsx";

// utils
import { formatDate } from "@/utils/date";

// store import
import { useAuthStore } from "@/store/useAuthStore";
import toast from "react-hot-toast";

const DashBoard = () => {
  const { user, logout, loggingout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center bg-black text-white px-4">
      <div className="w-[90%] sm:w-[75%] md:w-[50%] lg:w-[30%] p-6 bg-zinc-950 rounded-lg shadow-lg flex flex-col items-center gap-6 border border-zinc-800">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 font-[Sora]">
          Dashboard
        </h1>

        <div className="space-y-3 sm:space-y-4 text-center font-[Inter]">
          <p className="text-base sm:text-lg font-[Inter]">
            <span className="">Username:</span> {user.username}
          </p>
          <p className="text-base sm:text-lg">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-base sm:text-lg">
            <span className="font-semibold">Join Date:</span>{" "}
            {formatDate(user.createdAt)}
          </p>
        </div>

        <Button
          onClick={handleLogout}
          disabled={loggingout}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm sm:text-base font-[Space_Grotesk] cursor-pointer"
        >
          {loggingout ? "Logging out..." : "Logout"}
        </Button>
      </div>
    </div>
  );
};

export default DashBoard;
