import React from 'react';

const VideoBackground = ({ src }) => (
 <div className="mt-4 absolute inset-0 z-0 overflow-hidden ">
     {/* <iframe
            className="absolute top-0 left-0 w-full h-48 md:h-full"
            src="https://www.youtube.com/embed/7C7-uvmSG6Y?autoplay=1&controls=0&showinfo=0&loop=1&mute=1"
            title="YouTube video background"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
    <video
      className=" w-full h-72 md:h-[30%] md:w-[30] object-cover rounded-md"
      autoPlay
      loop
      muted
    >
      <source src={src} type="video/webm" />
      Your browser does not support the video tag.
    </video>
 </div>
);

export default VideoBackground;