import React from "react";
import { Link } from "react-router-dom";

export const UploadHead = () => {
  
  return (
    <div className="relative w-[90%] max-w-[603px] h-16 mx-auto px-4 sm:px-6">
      {/* Gradient Background */}
      <div
        className="absolute top-0 left-0 w-full h-full rounded-[26px]"
        style={{
          background: `radial-gradient(
            50% 50% at 50% 50%,
            rgba(74, 68, 159, 1) 6%,
            rgba(90, 82, 207, 1) 32%,
            rgba(69, 61, 194, 1) 51%,
            rgba(73, 21, 130, 1) 75%,
            rgba(87, 41, 136, 0.58) 96%
          )`,
        }}
      />

      {/* Text Content Centered */}
      <div
        className="absolute inset-0 flex items-center justify-center font-extrabold text-white text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-jetbrains text-center px-2 cursor-pointer"
        style={{
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          WebkitTextStroke: "1px #bdc22cde",
        }}
      >
        <Link to="/upload">
        Uploads the best projects
        </Link>
      </div>
    </div>
  );
};
