import { IMovieRepository } from "../../domain/repositories/MovieRepository";
import { Movie } from "../../domain/entities/Movie";

export class ListMoviesUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(): Promise<Movie[]> {
    return await this.movieRepository.findAll();
  }
}
