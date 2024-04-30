"use client";
import React from "react";
import IconComponents from "./IconComponents";
import Image from "next/image";
import ScreenPdfComponent from "./WebpageToPdf/ScreenPdfComponent";

const NotificationCarousal = () => {
  return (
    <div className="flex">
      <div className="w-5/6 bg-[#FCDC2A] relative flex overflow-x-hidden border-4 rounded-3xl">
        <div className=" animate-marquee2 whitespace-nowrap">
          <span className="mr-16">
            NOtification Item 1 <a>ReadMore:</a>
          </span>
          <span className="mx-16">
            NOtification Item 2 <a>ReadMore:</a>
          </span>
          <span className="mx-16">
            NOtification Item 3 <a>ReadMore:</a>
          </span>
          <span className="mx-16">
            NOtification Item 4 <a>ReadMore:</a>
          </span>
          <span className="mx-16">
            NOtification Item 5 <a>ReadMore:</a>
          </span>
        </div>
      </div>
      <div className="w-1/6 flex justify-center space-x-4 mr-4">
        <button
          className="btn animate-bounce"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Share
          <Image
          unoptimized
            className="h-8 w-8"
            src="/share.gif"
            width={100}
            height={100}
            alt="image tag"
          />
        </button>
        <button className="btn" onClick={() => document.getElementById("my_modal_2").showModal()}>
          Feedback
          <Image
          unoptimized
            className="h-8 w-8"
            src="/feedback.gif"
            width={100}
            height={100}
            alt="image tag"
          />
        </button>

        <button className="btn" onClick={() => document.getElementById("my_modal_2").showModal()}>
          Query
          <Image
          unoptimized
            className="h-8 w-8"
            src="/faq.png"
            width={100}
            height={100}
            alt="image tag"
          />
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Please Share this on!</h3>
            <ScreenPdfComponent/>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>Close</button>
          </form>
        </dialog>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Please Share this on!</h3>
            <IconComponents />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>Close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default NotificationCarousal;
