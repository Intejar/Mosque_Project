import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import ReactPlayer from "react-player";

const AboutUs = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row lg:gap-10">
        {/* Responsive Video Container */}
        <div className="w-full">
          <div className="relative pb-[56.25%] h-0">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=A1qlpNkoZHM"
              className="absolute top-0 left-0"
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="p-5">
          <h1 className="text-5xl font-bold mb-4">Our Purpose</h1>
          <h1 className="text-xl font-semibold font-mono">
            “A charity is due for every joint in each person on every day the
            sun comes up: to act justly between two people is a charity; to help
            a man with his mount, lifting him onto it or hoisting up his
            belongings onto it, is a charity; a good word is a charity, and
            removing a harmful thing from the road is a charity.” (Al-Bukhari,
            Muslim)
          </h1>
          <button className="btn bg-orange-400 text-white mt-5">
            Membership
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
