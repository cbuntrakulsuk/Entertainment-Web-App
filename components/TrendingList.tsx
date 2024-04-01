import tmdb from "../app/api/tmdb"; // Assuming tmdb.js is in the same directory
import React from "react";
import Slider from "@/components/Slider";
import LargeCard from "./LargeCard";

interface TrendingItem {
  id: number; // Assuming ID exists in the response
  title: string;
  release_date: string;
  backdrop_path: string;
  name: string;
  type: string;
}

async function getTrending() {
  const response = await tmdb.get("movie/popular");
  return response.data.results;
}

export default async function TrendingList() {
  const trendingResponse = await getTrending();
  const trending = trendingResponse.slice(0, 5);

  const cards = trending.map((item: TrendingItem) => (
    <LargeCard
      key={item.id}
      title={item.title}
      year={item.release_date.slice(0, 4)}
      poster={item.backdrop_path}
      name={item.name}
      type="Movie"
    />
  ));

  return (
    <div className="w-full">
      <Slider cards={cards} />
    </div>
  );
}
