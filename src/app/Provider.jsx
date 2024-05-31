"use client"
import React from 'react'

const Provider = ({ children }) => {
    const handleCopy = (event) => {
        event.preventDefault();
        const replacedText = "@copyright  ,Dont Copy";
        const clipboardData = event.clipboardData || window.clipboardData;
        clipboardData.setData("text", replacedText);
      };
  return (
    <div onCopy={handleCopy}>
        {children}
    </div>
  )
}

export default Provider