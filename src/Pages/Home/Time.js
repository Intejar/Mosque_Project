import React from "react";

const PrayerTimesCard = () => {
  return (
    <div className="mx-auto w-full max-w-md bg-white shadow-lg rounded-lg p-4 card bottom-14">
      <div className="flex justify-between items-center text-gray-700 font-semibold text-sm border-b pb-2">
        <span>FAZAR</span>
        <span>DZHUR</span>
        <span>ASAR</span>
        <span>MAGRIB</span>
        <span>ISYA</span>
      </div>
      <div className="flex justify-between items-center bg-orange-400 text-white font-medium text-sm rounded-md mt-2 p-2">
        <span>4:30am</span>
        <span>12:00pm</span>
        <span>04:00pm</span>
        <span>07:00pm</span>
        <span>08:00pm</span>
      </div>
    </div>
  );
};

export default PrayerTimesCard;
