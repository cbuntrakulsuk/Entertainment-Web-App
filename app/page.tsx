import Card from "@/components/Card";
import TrendingList from "@/components/TrendingList";
import { mediaInfo } from "@/types";
import { fetchTmdb } from "@/utils";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  let { search } = searchParams;
  search = search || "trending/all/week";
  const response = await fetchTmdb(search);
  const { results } = response;
  return (
    <main className="mb-14">
      <h1 className="text-4xl mt-10 font-light mb-6">Trending</h1>
      <TrendingList />
      <h1 className="text-4xl mt-10 font-light">Recommeded for you</h1>
      <div className="grid grid-cols-4 gap-x-10 mb-14">
        {results.map((movie: mediaInfo) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            first_air_date={movie.first_air_date}
            release_date={movie.release_date}
            backdrop_path={movie.backdrop_path}
            name={movie.name}
            bookmark={movie.bookmark || false}
            type={movie.media_type}
          />
        ))}
      </div>
    </main>
  );
}
