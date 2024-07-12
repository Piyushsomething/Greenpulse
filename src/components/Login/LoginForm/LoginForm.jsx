// components/LoginForm.jsx
"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  useEffect(() => {
    const accessToken = Cookies.get("access_token_login");

    if (accessToken) {
      const isAdmin = Cookies.get("IsAdmin");

      if (isAdmin === "true") {
        redirect("/admin");
      } else {
        redirect("/Dashboard");
      }
    }
  }, []);
  const handleLogin = async () => {
    setError("");
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (!data.IsAdmin) {
          // Redirect to Dashboard
          window.location.href = "/";
        } else {
          // Redirect to Admin Panel or perform other actions
          window.location.href = "/admin";
        }
      } else {
        setError("Incorrect Password or You're Not Verfied User.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Incorrect Password or You're Not Verfied User.:", error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-green-600 p-8 md:bg-transparent">
      <label className="input input-bordered mb-4 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="text"
          className="grow border-green-300 bg-green-50 p-2 focus:border-green-500 focus:ring-green-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="input input-bordered mb-4 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          className="grow border-green-300 bg-green-50 p-2 focus:border-green-500 focus:ring-green-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-center md:justify-start">
        <button
          className="btn rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600"
          onClick={handleLogin}
        >
          LOGIN
        </button>
        <Link href="/register">
          <button className="btn rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600">
            REGISTER
          </button>
        </Link>
        <a href="/ForgotPassword" className="btn btn-link btn-active text-xl">
          Forgot Your Password
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
