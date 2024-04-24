// LoginForm.jsx
import Link from "next/link";
import React from "react";

const LoginForm = () => {
 
  return (
    <div className="w-full max-w-md mx-auto  p-8 rounded-lg bg-green-600 md:bg-transparent">
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="text"
          className="grow p-2 bg-green-50 border-green-300 focus:border-green-500 focus:ring-green-500"
          placeholder="Email"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          className="grow p-2 bg-green-50 border-green-300 focus:border-green-500 focus:ring-green-500"
          placeholder="Password"
        />
      </label>
      <div className="flex justify-center md:justify-start">
        <Link href={"/"}>
        <button  className="btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          LOGIN
        </button>
        </Link>
        <button className="btn text-xl btn-active btn-link">Forgot Your Password</button>
      </div>
    </div>
  );
};

export default LoginForm;
