import Image from "next/image";
import React from "react";

const GrowthTimeline = ({ growthCount }) => {
  // Define data for each timeline item
  const timelineData = [
    {
      date: "30 April 2023",
      description: "Welcome to GreenPulse!!!",
    },
    {
      date: "30 May 2023",
      description: "Congratulation plant are sown",
    },
    {
      date: "30 June 2023",
      description: "Irrigation done",
    },
    {
      date: "01 Nov 2023",
      description: "Pesticide Done",
    },
    {
      date: "01 Jan 2024",
      description: "Wow Plants are growing !!",
    },
    {
      date: "30 April 2023",
      description: "Welcome to GreenPulse!!!",
    },
    {
      date: "30 May 2023",
      description: "Congratulation plant are sown",
    },
    {
      date: "30 June 2023",
      description: "Irrigation done",
    },
    {
      date: "01 Nov 2023",
      description: "Pesticide Done",
    },
    {
      date: "01 Jan 2024",
      description: "Wow Plants are growing !!",
    },
  ];

  // Slice the timelineData array based on the count
  const slicedTimelineData = timelineData.slice(0, growthCount);

  return (
    <div className="overflow-y-auto min-h-[400px] flex items-center w-full bg-green-500 max-h-[600px]">
      <ul className=" w-full px-8  timeline-compact timeline timeline-vertical  rounded-3xl">
        {slicedTimelineData.map((item, index) => (
          <li key={index} className={index % 2 === 0 ? "even" : "odd"}>
            <hr />
            <div className="timeline-start">{item.date}</div>
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
            <div className={`text-lg timeline-end timeline-box flex ${index % 2 === 0 ? "bg-[#87A922]" : ""} w-full justify-between items-center`}>
              {item.description}
              <div className="flex">
                <Image
                unoptimized
                  className="border-4 border-[#87A922]"
                  src="/video-camera.gif"
                  width={50}
                  height={50}
                  alt="video tag"
                />
                <Image
                unoptimized
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
        ))}
      </ul>
    </div>
  );
};

export default GrowthTimeline;
