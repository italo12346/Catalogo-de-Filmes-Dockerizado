import { Movie } from "../../domain/entities/Movie";
import { IMovieRepository } from "../../domain/repositories/MovieRepository";

interface UpdateMovieRequest {
  title?: string;
  director?: string;
  genre?: string;
  releaseYear?: number;
  rating?: number;
}

export class UpdateMovieUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(id: string, request: UpdateMovieRequest): Promise<Movie> {
    return await this.movieRepository.update(id, request);
  }
}
