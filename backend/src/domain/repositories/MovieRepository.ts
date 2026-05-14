import { Movie } from "../entities/Movie";

export interface IMovieRepository {
  findAll(): Promise<Movie[]>;
  findById(id: string): Promise<Movie | null>;
  create(movie: Movie): Promise<Movie>;
  update(id: string, movie: Partial<Movie>): Promise<Movie>;
  delete(id: string): Promise<void>;
}
