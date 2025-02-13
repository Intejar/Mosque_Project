import React from "react";

import { ReactTyped } from "react-typed";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import RegistrationForm from "./form";
import Donation from "../Pages/Home/Donation";

const Membership = () => {
  return (
    <>
      <div className="bg-aboutImg  sm:bg-bannerImg-sm md:bg-bannerImg-md lg:bg-bannerImg-lg bg-cover bg-center w-full h-screen">
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center  text-center px-4 text-black">
          <h1 className="text-3xl md:text-5xl font-bold">Mosque Name</h1>

          <ReactTyped
            strings={["Membership", "Donations"]}
            typeSpeed={120}
            cursorStyle="_"
            backSpeed={140}
            loop
            className="text-4xl font-bold"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center my-4">Be Our Member</h1>
        <p>Details</p>
      </div>
      <Donation></Donation>
      <RegistrationForm></RegistrationForm>
      <Footer></Footer>
    </>
  );
};

export default Membership;
