import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGrid from "./ImageGrid";
import Donation from "../Home/Donation";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const MosqueImg = () => {
  return (
    <>
      <div className="my-10">
        <h1 className="text-3xl text-center font-bold my-5">Mosque Images</h1>
        <ImageGallery
          showNav={false}
          autoPlay={false}
          showPlayButton={false}
          items={images}
          showBullets={true}
        />
      </div>

      <ImageGrid title="Event Name" />
      <Donation></Donation>
      <ImageGrid title="Event Name" />
    </>
  );
};

export default MosqueImg;
