import tmdb from "../app/api/tmdb"; // Assuming tmdb.js is in the same directory
import React from "react";
import Slider from "@/components/Slider";
import LargeCard from "./LargeCard";

interface TrendingItem {
  media_type: string;
  id: number; // Assuming ID exists in the response
  title: string;
  release_date: string;
  backdrop_path: string;
  first_air_date: string;
  original_name: string;
}

async function getTrending() {
  const response = await tmdb.get("trending/all/day");
  return response.data.results;
}

export default async function TrendingList() {
  const trendingResponse = await getTrending();
  const trending = trendingResponse.slice(0, 5);

  const cards = trending.map((item: TrendingItem) => (
    <LargeCard
      key={item.id}
      title={item.title}
      name={item.original_name}
      year={item.release_date}
      poster={item.backdrop_path}
      type={item.media_type}
      airDate={item.first_air_date}
      id={item.id}
      bookmarked={false}
    />
  ));

  return (
    <div className="w-full">
      <Slider cards={cards} />
    </div>
  );
}
