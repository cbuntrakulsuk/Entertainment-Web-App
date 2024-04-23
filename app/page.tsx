import Card from "@/components/Card";
import TrendingList from "@/components/TrendingList";
import { CardItem } from "@/types";
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
  const movies = await fetchTmdb(search);
  return (
    <main className="mb-14">
      <h1 className="text-4xl mt-10 font-light mb-6">Trending</h1>
      <TrendingList />
      <h1 className="text-4xl mt-10 font-light">Recommeded for you</h1>
      <div className="grid grid-cols-4 gap-x-10 mb-14">
        {movies.map((movie: CardItem) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={
              movie.first_air_date
                ? movie.first_air_date
                : movie.release_date || ""
            }
            poster={movie.backdrop_path}
            name={movie.name}
            bookmarked={movie.bookmark || false}
            type={movie.media_type}
          />
        ))}
      </div>
    </main>
  );
}
