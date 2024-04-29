import Card from "@/components/Card";
import TrendingList from "@/components/TrendingList";
import { mediaInfo } from "@/types";
import { fetchCert, fetchTmdb } from "@/utils";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  // Fetch movies
  let { search } = searchParams;
  search = search || "trending/all/week";
  const response = await fetchTmdb(search);
  const { results } = response;

  // Fetch the certification for each movie
  const certs = await Promise.all(
    results.map((item: { id: number; media_type: string }) =>
      fetchCert(item.id, item.media_type)
    )
  );

  return (
    <main className="mb-14">
      <h1 className="text-4xl mt-10 font-light mb-6">Trending</h1>
      <TrendingList />
      <h1 className="text-4xl mt-10 font-light">Recommeded for you</h1>
      <div className="grid grid-cols-4 gap-x-10 mb-14">
        {results.map((movie: mediaInfo, index: number) => (
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
            cert={certs[index] || "NR"}
          />
        ))}
      </div>
    </main>
  );
}
