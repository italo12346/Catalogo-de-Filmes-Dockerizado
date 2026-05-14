import { IMovieRepository } from "../../domain/repositories/MovieRepository";

export class DeleteMovieUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(id: string): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
