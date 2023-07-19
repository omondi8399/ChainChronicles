"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./register.module.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      toast.error("Fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const res = await fetch(
        "https://chain-chroniclez.vercel.app/api/register",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ username, email, password }),
        }
      );

      console.log(await res.json());
      if (res.ok) {
        toast.success("Successfully registered the user");
        setTimeout(() => {
          signIn();
        }, 1500);
        return;
      } else {
        toast.error("Error occured while registering");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes.inputContainer}>
            <input
              type="text"
              placeholder="Username..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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
          <button className={classes.submitButton}>Register</button>
          <p className={classes.text}>
            <button className={classes.registerNow} onClick={() => signIn()}>
              Already have an account? Click Here to Login.
            </button>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
