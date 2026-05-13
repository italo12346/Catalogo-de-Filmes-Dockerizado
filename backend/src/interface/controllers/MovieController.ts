import { Request, Response } from "express";
import { CreateMovieUseCase } from "../../application/use-cases/CreateMovieUseCase";
import { ListMoviesUseCase } from "../../application/use-cases/ListMoviesUseCase";
import { PrismaMovieRepository } from "../../infrastructure/repositories/PrismaMovieRepository";

export class MovieController {
  private movieRepository = new PrismaMovieRepository();

  async create(req: Request, res: Response) {
    try {
      const createMovie = new CreateMovieUseCase(this.movieRepository);
      const movie = await createMovie.execute(req.body);
      return res.status(201).json(movie);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const listMovies = new ListMoviesUseCase(this.movieRepository);
      const movies = await listMovies.execute();
      return res.json(movies);
    } catch (error: any) {
      return res.status(500).json({ error: "Erro ao listar filmes" });
    }
  }
}
