import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { ReactTyped } from "react-typed";
import VideoCarousel from "./CarouselVideo";
import Donation from "../Home/Donation";

const Vlog = () => {
  return (
    <>
      <div className="bg-vlogImg  sm:bg-bannerImg-sm md:bg-bannerImg-md lg:bg-bannerImg-lg bg-cover bg-center w-full h-screen">
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center  text-center px-4 text-black">
          <h1 className="text-3xl md:text-2xl font-bold">Mosque Name</h1>
          <ReactTyped
            strings={["Videos", "Vlog", "Islamic Events"]}
            typeSpeed={120}
            cursorStyle="_"
            backSpeed={140}
            loop
            className="text-2xl font-bold"
          />
        </div>
      </div>
      <VideoCarousel></VideoCarousel>
      <Donation></Donation>
      <Footer></Footer>
    </>
  );
};

export default Vlog;
