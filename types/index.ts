export interface mediaInfo {
  //movieData
  backdrop_path: string;
  id: number;
  release_date?: string;
  title: string;
  //tvData
  name?: string;
  first_air_date?: string;
  //additionalData
  media_type?: string;
  bookmark: boolean;
  type?: string;
  cert?: any;
}
