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
  const tv = await fetchTmdb(search);
  return (
    <>
      <h1 className="text-4xl mt-10 font-light">TV Series</h1>
      <div className="grid grid-cols-4 gap-x-10 mb-14">
        {tv.map((tv: CardItem) => (
          <Card
            id={tv.id}
            key={tv.id}
            title={tv.title}
            year={tv.first_air_date.slice(0, 4)}
            poster={tv.backdrop_path}
            type="tv"
            name={tv.name}
            bookmarked={tv.bookmark || false}
          />
        ))}
      </div>
    </>
  );
}
