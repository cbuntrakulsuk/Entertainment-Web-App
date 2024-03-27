import axios from "axios";

const tmdbApiKey = process.env.TMDB_API_KEY; // Store your API key securely

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: tmdbApiKey,
  },
});

export default tmdb;
