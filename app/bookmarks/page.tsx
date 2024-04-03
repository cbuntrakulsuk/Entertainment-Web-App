"use client";
import React, { useContext } from "react";
import { BookmarkContext } from "@/components/BookmarkContext";
import Card from "@/components/Card";

const Bookmarks = () => {
  interface Movie {
    id: number; // Assuming ID exists in the response
    title: string;
    year: string;
    poster: string;
    name: string;
    type: string;
    bookmark?: boolean;
    // Add other relevant movie properties based on the API response
  }

  const { bookmarkList } = useContext(BookmarkContext);
  console.log(bookmarkList);
  return (
    <div className="grid grid-cols-4 gap-x-10">
      {bookmarkList.map((movie: Movie) => (
        <Card
          key={movie.id}
          id={movie.id}
          title={movie.title}
          year={movie.year}
          poster={movie.poster}
          name={movie.name}
          bookmarked={movie.bookmark || false}
          type="Movie"
        />
      ))}
    </div>
  );
};

export default Bookmarks;
