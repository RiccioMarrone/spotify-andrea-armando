export interface RootInterface {
  error: boolean;
  results: Result[];
}

export interface Result {
  videoId: string;
  title: string;
  thumbnail: string;
  author: string;
}