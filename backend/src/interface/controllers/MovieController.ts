import { Request, Response } from "express";
import { CreateMovieUseCase } from "../../application/use-cases/CreateMovieUseCase";
import { ListMoviesUseCase } from "../../application/use-cases/ListMoviesUseCase";
import { UpdateMovieUseCase } from "../../application/use-cases/UpdateMovieUseCase";
import { DeleteMovieUseCase } from "../../application/use-cases/DeleteMovieUseCase";
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

  async update(req: Request, res: Response) {
    try {
      // Forçamos o id a ser tratado como string
      const id = req.params.id as string;

      const updateMovie = new UpdateMovieUseCase(this.movieRepository);
      const movie = await updateMovie.execute(id, req.body);

      return res.json(movie);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      // Forçamos o id a ser tratado como string
      const id = req.params.id as string;

      const deleteMovie = new DeleteMovieUseCase(this.movieRepository);
      await deleteMovie.execute(id);

      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
