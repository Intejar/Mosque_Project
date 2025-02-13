import React, { useState } from "react";

const images = [
  "https://i.ibb.co/wN7tn0T9/image-2.png",
  "https://i.ibb.co/wN7tn0T9/image-2.png",
  "https://i.ibb.co/wN7tn0T9/image-2.png",
  "https://i.ibb.co/wN7tn0T9/image-2.png",
  "https://i.ibb.co/wN7tn0T9/image-2.png",
  "https://i.ibb.co/wN7tn0T9/image-2.png",
  "https://i.ibb.co/wN7tn0T9/image-2.png",
  "https://i.ibb.co/wN7tn0T9/image-2.png",
];

const ImageGrid = ({ title }) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="border rounded-lg p-4 w-full max-w-6xl my-10  mx-auto shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="w-full h-24 sm:h-32 object-cover rounded-lg shadow-sm cursor-pointer"
            onClick={() => setFullscreenImage(src)}
          />
        ))}
      </div>
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
