"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === "" || email === "") {
      toast.error("Fill all fields!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error == null) {
        router.push("/");
      } else {
        toast.error("Error occurred while logging in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white w-full md:w-96 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email..."
              className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password..."
              className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Log in
          </button>
          <div className="text-center mt-4">
            <p>
              <Link href="/register" className="text-blue-500 hover:underline">
                Don&apos;t have an account? <span>Register now</span>.
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
