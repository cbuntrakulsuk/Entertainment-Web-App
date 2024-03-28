import tmdb from "../app/api/tmdb"; // Assuming tmdb.js is in the same directory
import React from "react";
import Card from "@/components/Card";

interface Tv {
  id: number; // Assuming ID exists in the response
  title: string;
  first_air_date: string;
  backdrop_path: string;
  name: string;
  // Add other relevant movie properties based on the API response
}

async function getTv() {
  const response = await tmdb.get("tv/popular");
  return response.data.results;
}

export default async function TvList() {
  const tv = await getTv();

  return (
    <div className="grid grid-cols-4 gap-x-10">
      {tv.map((tv: Tv) => (
        <Card
          key={tv.id}
          title={tv.title}
          year={tv.first_air_date.slice(0, 4)}
          poster={tv.backdrop_path}
          type="TV Series"
          name={tv.name}
        />
      ))}
    </div>
  );
}
