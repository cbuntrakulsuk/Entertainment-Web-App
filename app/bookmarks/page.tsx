"use client";
import React, { useContext } from "react";
import { BookmarkContext } from "@/components/BookmarkContext";
import Card from "@/components/Card";
import { Bookmark } from "@/types";

const Bookmarks = () => {
  const { bookmarkList } = useContext(BookmarkContext);
  return (
    <main className="mb-14">
      <h1 className="text-4xl mt-10 font-light">Bookmarks</h1>
      <div className="grid grid-cols-4 gap-x-10">
        {bookmarkList.map((bookmark: Bookmark) => (
          <Card
            key={bookmark.id}
            id={bookmark.id}
            title={bookmark.title}
            year={bookmark.year}
            airDate={bookmark.first_air_date}
            poster={bookmark.poster}
            name={bookmark.name}
            bookmarked={bookmark.bookmark || false}
            type={bookmark.type}
          />
        ))}
      </div>
    </main>
  );
};

export default Bookmarks;
