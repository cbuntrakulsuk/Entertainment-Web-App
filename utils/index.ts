import tmdb from "@/app/api/tmdb";

export async function fetchTmdb(filter: string) {
  const response = await tmdb.get(filter);
  return response.data;
}

export async function fetchCert(id: number, media_type: string) {
  let usRatings;

  if (media_type === "movie") {
    const response = await tmdb.get(`/${media_type}/${id}/release_dates`);
    const certifications = response.data.results.find(
      (c: { iso_3166_1: string }) => c.iso_3166_1 === "US"
    );
    usRatings = certifications.release_dates.find(
      (rating: { type: number; certification: string }) =>
        [1, 2, 3, 4, 5, 6].includes(rating.type) && rating.certification !== ""
    );

    return usRatings?.certification;
  } else if (media_type === "tv") {
    const response = await tmdb.get(`/${media_type}/${id}/content_ratings`);
    const certifications = response.data.results.find(
      (rating: { iso_3166_1: string; rating: string }) =>
        rating.iso_3166_1.includes("US") && rating.rating !== ""
    );
    return certifications?.rating;
  }
}
