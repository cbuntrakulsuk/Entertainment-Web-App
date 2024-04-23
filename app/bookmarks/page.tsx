"use client";
import React, { useContext } from "react";
import { BookmarkContext } from "@/components/BookmarkContext";
import Card from "@/components/Card";
import { Bookmark, mediaInfo } from "@/types";

const Bookmarks = () => {
  const { bookmarkList } = useContext(BookmarkContext);
  return (
    <main className="mb-14">
      <h1 className="text-4xl mt-10 font-light">Bookmarks</h1>
      <div className="grid grid-cols-4 gap-x-10">
        {bookmarkList.map((bookmark: mediaInfo) => (
          <Card
            key={bookmark.id}
            id={bookmark.id}
            title={bookmark.title}
            // year={bookmark.year}
            release_date={bookmark.release_date}
            first_air_date={bookmark.first_air_date}
            backdrop_path={bookmark.backdrop_path}
            name={bookmark.name}
            bookmark={bookmark.bookmark || false}
            type={bookmark.type}
          />
        ))}
      </div>
    </main>
  );
};

export default Bookmarks;
