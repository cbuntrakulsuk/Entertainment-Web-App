import tmdb from "@/app/api/tmdb";

export async function fetchTmdb(filter: string) {
  const response = await tmdb.get(filter);
  return response.data.results;
}
