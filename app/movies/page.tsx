import React from "react";
import Card from "@/components/Card";
import { fetchCert, fetchTmdb } from "@/utils";
import { mediaInfo } from "@/types"; // Import the 'Item' type

export default async function Movies({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  // Fetch movies
  const { search } = searchParams;
  const { results } = await fetchTmdb(search);

  // Fetch the certification for each movie
  const certs = await Promise.all(
    results.map((item: { id: number; media_type: string }) =>
      fetchCert(item.id, "movie")
    )
  );

  return (
    <>
      <h1 className="text-4xl mt-10 font-light">Movies</h1>
      <div className="grid grid-cols-4 gap-x-10 mb-14">
        {results.map((movie: mediaInfo, index: number) => (
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
            cert={certs[index] || "NR"}
          />
        ))}
      </div>
    </>
  );
}
