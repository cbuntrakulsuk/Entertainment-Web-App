"use client";
import { mediaInfo } from "@/types";
import React, { createContext, useState } from "react";

// type cardData = {
//   key: number;
//   poster: string;
//   year: string;
//   title: string;
//   type: string;
//   name: string;
//   id: number;
//   bookmarked: boolean;
//   airDate?: string;
// };

const BookmarkContext = createContext<{
  removeBookmark: (cardData: mediaInfo) => void;
  addBookmark: (cardData: mediaInfo) => void;
  bookmarkList: mediaInfo[];
}>({
  removeBookmark: () => {},
  addBookmark: () => {},
  bookmarkList: [],
});

const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookmarkList, setBookmarkList] = useState<mediaInfo[]>([]);

  const removeBookmark = (cardData: mediaInfo) => {
    setBookmarkList((prevList) =>
      prevList.filter((item) => item.id !== cardData.id)
    );
  };

  const addBookmark = (cardData: mediaInfo) => {
    setBookmarkList((prevList) => [...prevList, cardData]);
    console.log(bookmarkList);
  };

  return (
    <BookmarkContext.Provider
      value={{ removeBookmark, addBookmark, bookmarkList }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export { BookmarkContext, BookmarkProvider };
