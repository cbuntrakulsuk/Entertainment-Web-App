"use client";
import React, {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";

interface SearchContextType {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: () => {},
});

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
