import React, { useContext } from "react";
import { GetServerSideProps } from "next";
import MovieList from "../../components/MovieList";

const Movies = () => {
  return (
    <main className="mb-14">
      <h1 className="text-4xl mt-10 font-light">Movies</h1>
      <MovieList />
    </main>
  );
};

export default Movies;
