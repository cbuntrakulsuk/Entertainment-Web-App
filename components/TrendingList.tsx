import tmdb from "../app/api/tmdb"; // Assuming tmdb.js is in the same directory
import React from "react";
import Slider from "@/components/Slider";
import LargeCard from "./LargeCard";
import { fetchTmdb } from "@/utils";
import { TrendingItem } from "@/types";

export default async function TrendingList() {
  const trendingResponse = await fetchTmdb("trending/all/day");
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
