import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-25 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-lg py-6 w-1/3">{overview}</p>
      <div className="">
        <button className="px-8 py-2 rounded-lg bg-white text-black text-xl cursor-pointer hover:bg-gray-300">
          ▶ Play
        </button>
        <button className="ml-5 px-8 py-2 text-white text-xl rounded-lg bg-gray-700 cursor-pointer hover:bg-gray-900">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
