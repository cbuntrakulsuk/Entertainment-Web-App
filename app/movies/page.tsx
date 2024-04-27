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
  const { search } = searchParams;
  const response = await fetchTmdb(search);
  const { results } = response;

  // Fetch the certification for each movie
  const certs = await Promise.all(
    results.map((item: { id: number; media_type: string }) =>
      fetchCert(item.id, "movie")
    )
  );

  // map over certs array and fetch only the US certification property and log to terminal
  const certifications = certs.map((certArray: any[], index: number) => {
    const usCert = certArray.find(
      (c: { iso_3166_1: string }) => c.iso_3166_1 === "US"
    );
    const type3Date = usCert?.release_dates.find(
      (date: { type: number; certification: string }) =>
        [1, 2, 3, 4, 5, 6].includes(date.type) && date.certification !== ""
    );
    return type3Date?.certification;
  });

  console.log(certifications);

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
            cert={certifications[index] || "NR"}
          />
        ))}
      </div>
    </>
  );
}
