import React from "react";
import ReactPlayer from "react-player";

const Donation = () => {
  return (
    <div className="hero min-h-screen">
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
          <h1 className="text-5xl font-bold">Benefits of Donation</h1>
          <h1 className="text-xl font-semibold font-mono">
            “Charity extinguishes sin like water extinguishes fire”
          </h1>
          <p className="py-6">- Prophet Mohammed (Peace be upon Him)</p>
          <button className="btn bg-orange-400 text-white">Membership</button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
