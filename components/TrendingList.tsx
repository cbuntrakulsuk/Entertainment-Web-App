import React from "react";
import Slider from "@/components/Slider";
import LargeCard from "./LargeCard";
import { fetchTmdb } from "@/utils";
import { mediaInfo } from "@/types";

export default async function TrendingList() {
  const response = await fetchTmdb("trending/all/day");
  const { results } = response;
  const trending = results.slice(0, 5);

  const cards = trending.map((item: mediaInfo) => (
    <LargeCard
      key={item.id}
      title={item.title}
      name={item.name ?? ""}
      release_date={item.release_date}
      backdrop_path={item.backdrop_path}
      media_type={item.media_type}
      first_air_date={item.first_air_date}
      id={item.id}
      bookmark={false}
    />
  ));

  return (
    <div className="w-full">
      <Slider cards={cards} />
    </div>
  );
}
