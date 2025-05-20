export interface GameModel {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string; // Consider using Date if you want to parse it later
  freetogame_profile_url: string;
}