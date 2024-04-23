"use client";
import React, { useContext } from "react";
import { useState } from "react";
// import { SearchContext } from "@/components/SearchContext";
//image imports
import SearchIcon from "../public/assets/icon-search.svg";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      router.push(`/search?query=${search}`);
    }
  };

  return (
    <>
      <div className="w-full flex items-center">
        <SearchIcon />
        <input
          id="search"
          type="text"
          className="w-[450px] pl-4 pr-3 py-2 mx-2 text-2xl bg-transparent focus:outline-none font-light"
          placeholder="Search for movies or TV series"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleSearch}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div
        id="search-underline"
        className={`border border-grayBlue border-t-0 border-l-0 border-r-0 w-full ${
          isFocused ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </>
  );
};

export default Search;
