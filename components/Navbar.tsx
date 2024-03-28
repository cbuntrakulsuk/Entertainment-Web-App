"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//image imports
import Logo from "../public/assets/logo.svg";
import Home from "../public/assets/icon-nav-home.svg";
import Movies from "../public/assets/icon-nav-movies.svg";
import TV from "../public/assets/icon-nav-tv-series.svg";
import Bookmarks from "../public/assets/icon-nav-bookmark.svg";
import Avatar from "../public/assets/image-avatar.png";

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState("home");
  const handleClick = (option: string) => {
    setActiveCategory(option); // Update the state with the string
  };

  return (
    <>
      <div className="w-24 h-[960px] m-8 bg-semiDarkBlue text-center rounded-2xl">
        <div className="pt-8 pb-20 flex justify-center items-center">
          <Link href="/">
            <Logo className="fill-grayBlue hover:fill-redAccent" />
          </Link>
        </div>
        <div className="pb-10 flex justify-center items-center">
          <Link href="/">
            <Home
              className={`${
                activeCategory === "home" ? "fill-redAccent" : "fill-grayBlue"
              } hover:fill-redAccent`}
              onClick={() => handleClick("home")}
            />
          </Link>
        </div>
        <div className="pb-10 flex justify-center items-center">
          <Link href="/movies">
            <Movies
              className={`${
                activeCategory === "movies" ? "fill-redAccent" : "fill-grayBlue"
              } hover:fill-redAccent`}
              onClick={() => handleClick("movies")}
            />
          </Link>
        </div>
        <div className="pb-10 flex justify-center items-center">
          <Link href="/tv">
            <TV
              className={`${
                activeCategory === "tv" ? "fill-redAccent" : "fill-grayBlue"
              } hover:fill-redAccent`}
              onClick={() => handleClick("tv")}
            />
          </Link>
        </div>
        <div className="pb-10 flex justify-center items-center mb-[500px]">
          <Link href="/bookmarks">
            <Bookmarks
              className={`${
                activeCategory === "bookmarks"
                  ? "fill-redAccent"
                  : "fill-grayBlue"
              } hover:fill-redAccent`}
              onClick={() => handleClick("bookmarks")}
            />
          </Link>
        </div>
        <div className="pb-10 flex justify-center items-center">
          <Image
            className="border rounded-full border-white cursor-pointer"
            src={Avatar} // Path to your image
            width={40}
            height={40}
            alt="Navigation icon for Avatar" // Descriptive alternative text
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
