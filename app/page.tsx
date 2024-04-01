import TrendingList from "@/components/TrendingList";
import MovieList from "@/components/MovieList";
export default function Home() {
  return (
    <main>
      <h1 className="text-4xl mt-10 font-light">Trending</h1>
      <TrendingList />
      <h1 className="text-4xl mt-10 font-light">Recommeded for you</h1>
      <MovieList />
    </main>
  );
}
