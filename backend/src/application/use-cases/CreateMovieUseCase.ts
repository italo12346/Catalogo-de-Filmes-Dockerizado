import { Movie } from "../../domain/entities/Movie";
import { IMovieRepository } from "../../domain/repositories/MovieRepository";

interface CreateMovieRequest {
  title: string;
  director: string;
  genre: string;
  releaseYear: number;
  rating: number;
}

export class CreateMovieUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(request: CreateMovieRequest): Promise<Movie> {
    // 1. Cria a entidade (que já faz as validações de regra de negócio)
    const movie = new Movie(request);

    // 2. Chamama o repositório para salvar
    return await this.movieRepository.create(movie);
  }
}
