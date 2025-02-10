import React from "react";
import "./index.css";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import PrayerTimesCard from "./Time";
import FivePillars from "./pillar";
import IslamicOccasions from "./Event";
import Donation from "./Donation";
import MoshjidCommittee from "./Member";
import Gallery from "./Gallery";
import Vlog from "./Vlog";
import GoogleMapComponent from "./Map";
const Home = () => {
  return (
    <>
      <div className="bg-bannerImg sm:bg-bannerImg-sm md:bg-bannerImg-md lg:bg-bannerImg-lg bg-cover bg-center w-full h-screen">
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>
      </div>
      <PrayerTimesCard></PrayerTimesCard>
      <FivePillars></FivePillars>
      <IslamicOccasions></IslamicOccasions>
      <Donation></Donation>
      <MoshjidCommittee></MoshjidCommittee>
      <Gallery></Gallery>
      <Vlog></Vlog>
      <GoogleMapComponent></GoogleMapComponent>
      <Footer></Footer>
    </>
  );
};

export default Home;
