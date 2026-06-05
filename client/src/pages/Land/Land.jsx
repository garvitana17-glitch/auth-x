import React from "react";
import { useNavigate } from "react-router-dom";

// components import
import { Button } from "@/components/ui/button";

const Land = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-dvh flex flex-col items-center justify-between text-white px-6 sm:px-8 md:px-10 py-10 relative overflow-hidden"
      style={{
        backgroundColor: "#000",
        backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.10) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.10) 1px, transparent 1px)
      `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center gap-4 flex-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center font-[Sora] bg-gradient-to-t from-zinc-400 to-white bg-clip-text text-transparent leading-tight">
          Auth-<span className="text-blue-600">X</span> : A Complete Auth System
        </h1>

        <p className="text-gray-400 text-sm sm:text-base mt-2 text-center font-[Inter]">
          A MERN stack authentication boilerplate that includes email
          verification and password reset features.
        </p>

        <div className="mt-6 sm:mt-8 w-full flex flex-col items-center gap-3">
          <Button
            onClick={() => navigate("/register")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-[Space_Grotesk] px-6 py-2 rounded-md w-full sm:w-80 text-sm sm:text-base transition duration-300 ease-in-out cursor-pointer"
          >
            Create Account
          </Button>

          <p className="text-xs sm:text-xs text-gray-400 font-[Inter] text-center max-w-xs">
            By signing up, you agree to the{" "}
            <a href="/terms" className="text-blue-400 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-400 underline">
              Privacy Policy
            </a>
            .
          </p>

          <div className="mt-6 sm:mt-8 w-full flex flex-col items-center gap-3">
            <p className="text-sm text-gray-300 font-[Inter]">
              Already have an account?
            </p>
            <Button
              onClick={() => navigate("/login")}
              className="bg-zinc-900 hover:bg-zinc-800 border-[1px] border-zinc-800 text-white font-[Space_Grotesk] px-6 py-2 rounded-md w-full sm:w-80 text-sm sm:text-base transition duration-300 ease-in-out cursor-pointer"
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-gray-400 text-xs sm:text-[12px] text-center w-full absolute bottom-8">
        <p className="font-[JetBrains_Mono]">
          Made with ❤️{" "}
          <span className="font-bold text-white">HARSHIT X CODES</span>
        </p>
      </footer>
    </div>
  );
};

export default Land;
