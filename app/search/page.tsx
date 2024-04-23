import React from "react";
import Card from "@/components/Card";
import { fetchTmdb } from "@/utils";
import { CardItem } from "@/types"; // Import the 'Item' type

export default async function Search({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const { query } = searchParams;
  console.log(query);
  const response = await fetchTmdb(`/search/multi?query=${query}`);
  const { results, total_results } = response;
  //console.log(filtered);
  return (
    <>
      <h1 className="text-4xl mt-10 font-light">
        Found {total_results} Results for {query}
      </h1>
      <div className="grid grid-cols-4 gap-x-10 mb-14">
        {results.map((movie: CardItem) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.release_date ? movie.release_date.slice(0, 4) : ""}
            poster={movie.backdrop_path}
            name={movie.name}
            bookmarked={movie.bookmark || false}
            type="Movie"
          />
        ))}
      </div>
    </>
  );
}
