// Importing necessary modules
import { create } from "zustand";
import toast from "react-hot-toast";

// Axios instance for api's call
import { axiosInstance } from "@/utils/axios";

// Zustand store for authentication
export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  checkingAuth: true,
  registering: false,
  verifing: false,
  logging: false,
  loggingout: false,
  requestingResetUrl: false,
  resettingPassword: false,

  // checkAuth function
  checkAuth: async () => {
    try {
      const response = await axiosInstance.get("/auth/checkAuth");
      set({ isAuthenticated: true, user: response.data.user });
    } catch (error) {
      return error.response.data.message;
    } finally {
      set({ checkingAuth: false });
    }
  },

  // Register user function
  register: async (userData) => {
    try {
      set({ registering: true });
      const response = await axiosInstance.post("/auth/register", userData);
      toast.success(response.data.message);
      return { success: true, message: "Sign Up Successfull" };
    } catch (error) {
      toast.error(error.response.data.message);
      return { success: false, message: error.response.data.message };
    } finally {
      set({ registering: false });
    }
  },

  //verify email function
  verify: async (data) => {
    try {
      set({ verifing: true });
      const response = await axiosInstance.post("/auth/verifyEmail", data);
      toast.success(response.data.message);
      return { success: true, message: "Email Verified Successfully" };
    } catch (error) {
      toast.error(error.response.data.message);
      return { success: false, message: error.response.data.message };
    } finally {
      set({ verifing: false });
    }
  },

  // Login user function
  login: async (userData) => {
    try {
      set({ logging: true });
      const response = await axiosInstance.post("/auth/login", userData);
      toast.success("Login Successfull");
      set({ isAuthenticated: true, user: response.data.user });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ logging: false });
    }
  },

  // Logout user function
  logout: async () => {
    try {
      set({ loggingout: true });
      const response = await axiosInstance.get("/auth/logout");
      toast.success("Logout Successfull");
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loggingout: false });
    }
  },

  // Forget password function
  forgetPassword: async (data) => {
    try {
      set({ requestingResetUrl: true });
      const response = await axiosInstance.post("/auth/forgetpassword", data);
      toast.success("Email Sent !");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ requestingResetUrl: false });
    }
  },

  // Reset password function
  resetPassword: async (token, date) => {
    try {
      set({ resettingPassword: true });
      const response = await axiosInstance.post(
        `/auth/resetpassword/${token}`,
        date
      );
      toast.success("Password Changed");
      return { success: true, message: "Password Reset Successfully" };
    } catch (error) {
      toast.error(error.response.data.message);
      return { success: false };
    } finally {
      set({ resettingPassword: false });
    }
  },
}));
