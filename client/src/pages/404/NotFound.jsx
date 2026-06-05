import React from "react";
import { useNavigate } from "react-router-dom";

// components
import Footer from "@/custom/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-dvh flex flex-col items-center justify-center bg-black text-white">
      {/* Content Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold font-[Sora] text-blue-600">404</h1>
        <p className="text-3xl font-bold font-[Sora] text-zinc-400">
          Page Not Found
        </p>

        <Button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md font-[Space_Grotesk] cursor-pointer"
        >
          Go Home
        </Button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;
