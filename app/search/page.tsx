import React from "react";
import Card from "@/components/Card";
import { fetchCert, fetchTmdb } from "@/utils";
import { mediaInfo } from "@/types"; // Import the 'Item' type

export default async function Search({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const { query } = searchParams;
  const response = await fetchTmdb(`/search/multi?query=${query}`);
  const { results, total_results } = response;

  return (
    <>
      <h1 className="text-4xl mt-10 font-light">
        Found {total_results} Results for {query}
      </h1>
      <div className="grid grid-cols-4 gap-x-10 mb-14">
        {results.map((movie: mediaInfo) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={
              movie.release_date ? movie.release_date.slice(0, 4) : ""
            }
            backdrop_path={movie.backdrop_path}
            name={movie.name}
            bookmark={movie.bookmark || false}
            type="Movie"
          />
        ))}
      </div>
    </>
  );
}
