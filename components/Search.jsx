"use client";
import React from "react";
import { useState } from "react";

//image imports
import SearchIcon from "../public/assets/icon-search.svg";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return (
    <>
      <div className="relative w-full flex items-center">
        <SearchIcon />
        <input
          type="text"
          className="w-[450px] pl-4 pr-3 py-2 mx-2 text-2xl bg-transparent focus:outline-none font-light"
          placeholder="Search for movies or TV series"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div
        id="search-underline"
        className={`border border-grayBlue border-t-0 border-l-0 border-r-0 w-3/4 left-[316px] absolute ${
          isFocused ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </>
  );
};

export default Search;
