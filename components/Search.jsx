"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

//image imports
import SearchIcon from "../public/assets/icon-search.svg";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return (
    <div className="relative w-full">
      <Image
        src={SearchIcon} // Path to your image
        alt="search" // Descriptive alternative text
        className="w-8 h-8 text-gray-400 absolute left-2 inset-y-0 my-auto"
      />
      <input
        type="text"
        className="w-[450px] pl-12 pr-3 py-2 mx-2 text-2xl bg-transparent focus:outline-none"
        placeholder="Search for movies or TV series"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div
        id="search-underline"
        className={`border border-grayBlue border-t-0 border-l-0 border-r-0 w-[350px] left-14 absolute ${
          isFocused ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default Search;
