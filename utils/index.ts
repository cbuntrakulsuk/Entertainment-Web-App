import tmdb from "@/app/api/tmdb";

export async function fetchTmdb(filter: string) {
  const response = await tmdb.get(filter);
  return response.data;
}

export async function fetchCert(id: number, media_type: string) {
  const response = await tmdb.get(`/${media_type}/${id}/release_dates`);
  return response.data.results;
}
