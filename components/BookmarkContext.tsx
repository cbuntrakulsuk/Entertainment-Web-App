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
  airDate?: string;
};
const BookmarkContext = createContext<{
  removeBookmark: (cardData: {
    key: number;
    poster: string;
    year: string;
    title: string;
    type: string;
    name: string;
    id: number;
    bookmarked: boolean;
    airDate?: string;
  }) => void;
  addBookmark: (cardData: {
    key: number;
    poster: string;
    year: string;
    title: string;
    type: string;
    name: string;
    id: number;
    bookmarked: boolean;
    airDate?: string;
  }) => void;
  bookmarkList: cardData[];
}>({
  removeBookmark: () => {},
  addBookmark: () => {},
  bookmarkList: [],
});

const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookmarkList, setBookmarkList] = useState<cardData[]>([]);

  const removeBookmark = (cardData: {
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
    setBookmarkList((prevList) =>
      prevList.filter((item) => item.id !== cardData.id)
    );
  };

  const addBookmark = (cardData: {
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
