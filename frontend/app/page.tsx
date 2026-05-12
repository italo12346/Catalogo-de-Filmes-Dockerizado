import { MovieCard } from "./components/movieCard";
import { MovieForm } from "./components/movieForm";
import { ThemeToggle } from "./components/themeToggle";
import { Movie } from "./types/movie";
//mock data for demonstration purposes
const MOCK_MOVIES: Movie[] = [
  {
    id: "1",
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    releaseYear: 2010,
    rating: 8.8,
  },
  {
    id: "2",
    title: "The Godfather",
    director: "Francis Ford Coppola",
    genre: "Crime",
    releaseYear: 1972,
    rating: 9.2,
  },
  {
    id: "3",
    title: "Interstellar",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    releaseYear: 2014,
    rating: 8.6,
  },
];

export default function Home() {
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
          {MOCK_MOVIES.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}
