import { MovieCard } from "./components/movieCard";
import { MovieForm } from "./components/movieForm";
import { ThemeToggle } from "./components/themeToggle";
import { fetchMovies } from "./lib/api";
import { Movie } from "./types/movie";

export default async function Home() {
  const movies: Movie[] = await fetchMovies();

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-5xl font-black ">🎬 Catálogo de Filmes</h1>
        <ThemeToggle />
      </header>

      <main>
        {/* Formulário de Cadastro */}
        <MovieForm />
        {/* Lista de Filmes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}
