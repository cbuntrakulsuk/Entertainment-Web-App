import React from "react";
import Slider from "@/components/Slider";
import LargeCard from "./LargeCard";
import { fetchCert, fetchTmdb } from "@/utils";
import { mediaInfo } from "@/types";

export default async function TrendingList() {
  const response = await fetchTmdb("trending/all/day");
  const { results } = response;
  const trending = results.slice(0, 5);

  // Fetch the certification for each movie
  const certs = await Promise.all(
    trending.map((item: { id: number; media_type: string }) =>
      fetchCert(item.id, item.media_type)
    )
  );

  console.log(certs);
  const cards = trending.map((item: mediaInfo, index: number) => (
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
      cert={certs[index] || "NR"}
    />
  ));

  return (
    <div className="w-full">
      <Slider cards={cards} />
    </div>
  );
}
