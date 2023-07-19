"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./login.module.css";
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
        toast.error("Error occured while logging");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes.inputContainer}>
            <input
              type="email"
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.inputContainer}>
            <input
              type="password"
              placeholder="Password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={classes.submitButton}>Log in</button>
          <div className={classes.linkContainer}>
            <p>
              <Link className={classes.loginNow} href="/register">
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
