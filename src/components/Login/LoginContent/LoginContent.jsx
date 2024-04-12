// components/LoginContent.js
import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

const LoginContent = ({ title }) => (
 <div className=" absolute inset-0 z-10 flex flex-col md:flex-row justify-end gap-32 items-center p-4  md:gap-0">
    <div className="text-black text-center md:text-left">
      <h1 className="md:ml-96 text-4xl md:text-6xl lg:text-8xl font-bold  text-[#a7ca3d] animate-pulse">
        {title}
      </h1>
    </div>
    <div className="w-full md:w-1/2">
      <LoginForm/>
    </div>
 </div>
);

export default LoginContent;