"use client";
import React, { createContext, useState, useEffect } from "react";

const BookmarkContext = createContext({
  // Initial state for your context
  addBookmark: (card) => {},
  bookmarkList: [],
});

const BookmarkProvider = ({ children }) => {
  const [bookmarkList, setBookmarkList] = useState([]);

  const addBookmark = (cardData) => {
    setBookmarkList((prevList) => [...prevList, cardData]);
    console.log(cardData);
  };

  useEffect(() => {}, [bookmarkList]); // useEffect will run whenever list changes

  return (
    <BookmarkContext.Provider value={{ addBookmark, bookmarkList }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export { BookmarkContext, BookmarkProvider };
