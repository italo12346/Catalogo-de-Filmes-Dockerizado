import { PrismaClient } from "@prisma/client";
import { Movie } from "../../domain/entities/movie";
import { IMovieRepository } from "../../domain/repositories/MovieRepository";

const prisma = new PrismaClient();

export class PrismaMovieRepository implements IMovieRepository {
  async findAll(): Promise<Movie[]> {
    const movies = await prisma.movie.findMany();
    return movies.map((m) => new Movie(m));
  }

  async findById(id: string): Promise<Movie | null> {
    const movie = await prisma.movie.findUnique({ where: { id } });
    return movie ? new Movie(movie) : null;
  }

  async create(movie: Movie): Promise<Movie> {
    const created = await prisma.movie.create({
      data: {
        title: movie.title,
        director: movie.director,
        genre: movie.genre,
        releaseYear: movie.releaseYear,
        rating: movie.rating,
      },
    });
    return new Movie(created);
  }

  async update(id: string, movie: Partial<Movie>): Promise<Movie> {
    const updated = await prisma.movie.update({
      where: { id },
      data: {
        title: movie.title,
        director: movie.director,
        genre: movie.genre,
        releaseYear: movie.releaseYear,
        rating: movie.rating,
      },
    });
    return new Movie(updated);
  }

  async delete(id: string): Promise<void> {
    await prisma.movie.delete({ where: { id } });
  }
}
