import React from "react";
import Card from "@/components/Card";
import { fetchTmdb } from "@/utils";
import { CardItem, mediaInfo } from "@/types"; // Import the 'Item' type

export default async function Movies({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  const { search } = searchParams;
  const response = await fetchTmdb(search);
  const { results } = response;
  return (
    <>
      <h1 className="text-4xl mt-10 font-light">Movies</h1>
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
