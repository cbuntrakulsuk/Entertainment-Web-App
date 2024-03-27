import React from "react";
import Image from "next/image";
//image imports
import CardImg from "../public/assets/thumbnails/the-great-lands/regular/large.jpg"; //placeholder
import BookmarkEmpty from "../public/assets/icon-bookmark-empty.svg";
const CardImgPath = "https://image.tmdb.org/t/p/w500";

const Card = (props: {
  key: number;
  poster: string;
  year: string;
  title: string;
}) => {
  return (
    <div className="mt-10 relative w-[280px]">
      <div className="w-8 h-8 mt-4 mr-4 rounded-full bg-[#979797] flex justify-center items-center absolute right-0 group hover:bg-white cursor-pointer">
        <BookmarkEmpty className="stroke-white group-hover:stroke-black fill-none" />
      </div>
      <Image
        className="rounded-lg"
        src={CardImgPath + props.poster}
        alt="Movie Card" // Descriptive alternative text
        width={280}
        height={174}
      />
      <div>
        <ul className="list-disc flex mt-2 ml-1 font-light text-sm">
          <li className="mr-7 list-none">{props.year}</li>
          <li className="mr-7">Movie</li>
          <li className="mr-7">PG</li>
        </ul>
        <div className="text-lg ml-1 mt-1">{props.title}</div>
      </div>
    </div>
  );
};

export default Card;
