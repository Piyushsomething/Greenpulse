import HowItWorks from "@/components/Login/LoginContent/HowItWorks";
import LoginContent from "@/components/Login/LoginContent/LoginContent";
import MissionStatement from "@/components/Login/LoginContent/MissionStatement";
import LoginNav from "@/components/Login/LoginNavBar/LoginNav";
import VideoBackground from "@/components/Login/VIdeoBackground/VideoBackground";
import React from "react";

const Login = () => {
  const missionStatement =
    "Our mission leverages drone technology to transform barren lands into thriving ecosystems, championing global reforestation and biodiversity. Beyond planting trees, we're a force against climate change, using vivid imagery to highlight our journey from desolation to lushness. We invite you to join this movement of hope and restoration, impacting the planet's health tree by tree. Together, we're not just planting; we're cultivating the forests of tomorrow.";
  const howItWorksSteps = [
    "Step 1: Sponsor a tree plantation",
    "Step 2: Monitor the growth of your sponsored trees",
  ];
  return (
    <>
      <LoginNav />
      <div className="relative h-screen md:h-[60svh] overflow-hidden md:-mb-44 ">
        <VideoBackground src="/video/drone.webm" />
        <LoginContent
          title="Join the Green Revolution !!!"
        />
      </div>
        <MissionStatement statement={missionStatement} />
        <HowItWorks steps={howItWorksSteps} />
    </>
  );
};

export default Login;
