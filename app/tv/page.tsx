import React from "react";
import Card from "@/components/Card";
import { fetchTmdb } from "@/utils";
import { CardItem } from "@/types"; // Import the 'Item' type

export default async function tvSeries({
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
      <h1 className="text-4xl mt-10 font-light">TV Series</h1>
      <div className="grid grid-cols-4 gap-x-10 mb-14">
        {results.map((tv: CardItem) => (
          <Card
            id={tv.id}
            key={tv.id}
            title={tv.title}
            first_air_date={tv.first_air_date.slice(0, 4)}
            backdrop_path={tv.backdrop_path}
            type="tv"
            name={tv.name}
            bookmark={tv.bookmark || false}
          />
        ))}
      </div>
    </>
  );
}
