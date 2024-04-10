import Image from "next/image";
import React from "react";

const GrowthTimeline = () => {
  return (
    <ul className="px-4 mx-8 timeline-compact timeline timeline-vertical bg-green-500 rounded-3xl">
      <li>
        <div className="timeline-start">30 April 2023</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-lg timeline-end timeline-box flex bg-[#87A922] w-full justify-between items-center">
          <div>Welcome to GreenPulse!!!</div>
          <div className="flex">
            <Image
              className="border-4 border-[#87A922]"
              src="/video-camera.gif"
              width={50}
              height={50}
              alt="video tag"
            />
            <Image
              className="border-4 border-[#87A922]"
              src="/image.gif"
              width={50}
              height={50}
              alt="image tag"
            />
          </div>
        </div>

        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start">30 May 2023</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className=" flex timeline-end timeline-box w-full justify-between items-center">
          Congratulation plant are sown{" "}
          <div className="flex">
          <Image
            className="border-4 border-[#87A922]"
            src="/video-camera.gif"
            width={50}
            height={50}
            alt="video tag"
          />
          <Image
            className="border-4 border-[#87A922]"
            src="/image.gif"
            width={50}
            height={50}
            alt="image tag"
          />
          </div>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start">30 June 2023</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box flex bg-[#87A922] w-full justify-between items-center">
          Irrigation done
          <div className="flex">
          <Image
            className="border-4 border-[#87A922]"
            src="/video-camera.gif"
            width={50}
            height={50}
            alt="video tag"
          />
          <Image
            className="border-4 border-[#87A922]"
            src="/image.gif"
            width={50}
            height={50}
            alt="image tag"
          />
          </div>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start">01 Nov 2023</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex timeline-end timeline-box w-full justify-between items-center">
          Pesticide Done
          <div className="flex">
          <Image
            className="border-4 border-[#87A922]"
            src="/video-camera.gif"
            width={50}
            height={50}
            alt="video tag"
          />
          <Image
            className="border-4 border-[#87A922]"
            src="/image.gif"
            width={50}
            height={50}
            alt="image tag"
          />
          </div>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start">01 Jan 2024</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box flex bg-[#87A922] w-full justify-between items-center">
          Wow Plants are gorrwny !!
          <div className="flex">
          <Image
            className="border-4 border-[#87A922]"
            src="/video-camera.gif"
            width={50}
            height={50}
            alt="video tag"
          />
          <Image
            className="border-4 border-[#87A922]"
            src="/image.gif"
            width={50}
            height={50}
            alt="image tag"
          />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default GrowthTimeline;
