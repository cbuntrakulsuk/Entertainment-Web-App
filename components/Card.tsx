"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { useState } from "react";
import { BookmarkContext } from "@/components/BookmarkContext";
//image imports
import PlayIcon from "../public/assets/icon-play.svg";
import fallbackImage from "../public/assets/thumbnails/dogs/regular/medium.jpg";
import BookmarkEmpty from "../public/assets/icon-bookmark-empty.svg";
const CardImgPath = "https://image.tmdb.org/t/p/w500";

const Card = (props: {
  key: number;
  poster: string;
  year: string;
  title: string;
  type: string;
  name: string;
  id: number;
  bookmarked: boolean;
  airDate?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  //const [isBookmarked, setIsBookmarked] = useState(false);
  const { removeBookmark, addBookmark, bookmarkList } =
    useContext(BookmarkContext);
  const isBookmarked = bookmarkList.some((item) => item.id === props.id);
  const [imageError, setImageError] = useState(false);
  const handleBookmark = (cardData: {
    key: number;
    poster: string;
    year: string;
    title: string;
    type: string;
    name: string;
    bookmarked: boolean;
    id: number;
    airDate?: string;
  }) => {
    //check if bookmark already exisits in list
    if (bookmarkList.some((item) => item.id === cardData.id)) {
      console.log("Bookmark already exists");
      //remove from bookmark list
      removeBookmark(cardData);
    } else {
      addBookmark(cardData);
    }
  };

  return (
    <div
      className="relative mt-10 w-[280px]"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {/* Bookmark button */}
      <div className="cursor-pointer absolute top-4 right-4 w-8 h-8 rounded-full bg-[#979797] flex z-20 justify-center items-center group-hover:hidden">
        <BookmarkEmpty
          className={`${
            isBookmarked
              ? "fill-white"
              : "fill-[#979797]} stroke-white hover:stroke-black fill-none z-20"
          }`}
          onClick={() => handleBookmark(props)}
        />
      </div>

      <div
        className={`${hovered ? "opacity-100" : "opacity-0"} cursor-pointer`}
      >
        {/* Overlay */}
        <div className="group flex absolute inset-0 bg-black rounded-lg opacity-50 h-[157.5px]"></div>
        {/* Play button */}
        <div className="flex absolute inset-0 justify-center items-center h-[157.5px]">
          <div className="w-[117px] h-12 flex justify-center items-center bg-[#979797] rounded-full opacity-50"></div>
          <div className="absolute flex justify-center items-center">
            {/* Play icon */}
            <PlayIcon className="mr-4" />
            <span className="font-medium text-lg">Play</span>
          </div>
        </div>
      </div>

      {/* Image */}
      <>
        <>
          {!imageError ? (
            <Image
              className="rounded-lg"
              src={CardImgPath + props.poster}
              alt="Movie Card"
              width={280}
              height={174}
              onError={() => {
                console.error(
                  "Image failed to load:",
                  CardImgPath + props.poster
                );
                setImageError(true);
              }}
            />
          ) : (
            <Image
              className="rounded-lg h-[157.5px]"
              src={fallbackImage}
              alt="Movie Card"
              width={280}
              height={174}
            />
          )}
        </>
      </>

      {/* Additional information */}
      <div className="mt-2 ml-1">
        <ul className="list-disc flex font-light text-[13px]">
          <li className="mr-7 list-none">
            {props.year ? props.year.slice(0, 4) : props.airDate?.slice(0, 4)}
          </li>
          <li className="mr-7">
            {props.type === "tv" ? "TV Series" : "Movie"}
          </li>
          <li className="mr-7">PG</li>
        </ul>
        <div className="text-lg mt-1">
          {props.title ? props.title : props.name}
        </div>
      </div>
    </div>
  );
};

export default Card;
