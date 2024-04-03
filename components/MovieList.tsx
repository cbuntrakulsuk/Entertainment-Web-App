import tmdb from "../app/api/tmdb"; // Assuming tmdb.js is in the same directory
import React from "react";
import Card from "@/components/Card";

interface Movie {
  id: number; // Assuming ID exists in the response
  title: string;
  release_date: string;
  backdrop_path: string;
  name: string;
  type: string;
  bookmark?: boolean;
  // Add other relevant movie properties based on the API response
}

async function getMovies() {
  const response = await tmdb.get("movie/popular");
  return response.data.results;
}

export default async function MovieList() {
  const movies = await getMovies();
  return (
    <div className="grid grid-cols-4 gap-x-10">
      {movies.map((movie: Movie) => (
        <Card
          key={movie.id}
          id={movie.id}
          title={movie.title}
          year={movie.release_date.slice(0, 4)}
          poster={movie.backdrop_path}
          name={movie.name}
          bookmarked={movie.bookmark || false}
          type="Movie"
        />
      ))}
    </div>
  );
}
