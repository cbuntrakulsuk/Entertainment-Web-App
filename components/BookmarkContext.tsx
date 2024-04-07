"use client";
import React, { createContext, useState, useEffect } from "react";
type cardData = {
  key: number;
  poster: string;
  year: string;
  title: string;
  type: string;
  name: string;
  id: number;
  bookmarked: boolean;
};
const BookmarkContext = createContext<{
  addBookmark: (cardData: {
    key: number;
    poster: string;
    year: string;
    title: string;
    type: string;
    name: string;
    id: number;
    bookmarked: boolean;
  }) => void;
  bookmarkList: cardData[];
}>({
  addBookmark: () => {},
  bookmarkList: [],
});

const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookmarkList, setBookmarkList] = useState<cardData[]>([]);

  const addBookmark = (cardData: {
    key: number;
    poster: string;
    year: string;
    title: string;
    type: string;
    name: string;
    id: number;
    bookmarked: boolean;
  }) => {
    setBookmarkList((prevList) => [...prevList, cardData]);
    console.log(bookmarkList);
  };

  return (
    <BookmarkContext.Provider value={{ addBookmark, bookmarkList }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export { BookmarkContext, BookmarkProvider };
