import Link from "next/link";
import React from "react";

const Payment = () => {
  return (
    <div className="flex-col justify-center items-center w-screen text-7xl">
      <div className="">Your Payment Request is sent to admin</div>
      <div>
        <button className="btn btn-link">
          <Link href="/" className="underline text-4xl text-black">
            Check Dashboard
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Payment;
