export interface CardItem {
  id: number;
  title: string;
  first_air_date: string;
  backdrop_path: string;
  name: string;
  bookmark?: boolean;
  release_date?: string;
  year?: string;
  media_type: string;
}

export interface TrendingItem {
  media_type: string;
  id: number; // Assuming ID exists in the response
  title: string;
  release_date: string;
  backdrop_path: string;
  first_air_date: string;
  original_name: string;
}

export interface Bookmark {
  id: number;
  title: string;
  first_air_date?: string;
  year: string;
  poster: string;
  name: string;
  type: string;
  bookmark?: boolean;
}
