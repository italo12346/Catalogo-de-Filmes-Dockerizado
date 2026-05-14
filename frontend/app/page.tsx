import { ThemeToggle } from "./components/themeToggle";
import { MoviesClient } from "./components/MoviesClient";
import { fetchMovies } from "./lib/api";

export default async function Home() {
  const movies = await fetchMovies();

  return (
    <div className="min-h-screen p-6 sm:p-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#f63090] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#4cc9f4] rounded-full blur-[120px]" />
      </div>

      <header className="max-w-7xl mx-auto flex justify-between items-center mb-16 relative z-10">
        <div className="flex flex-col">
          <h1 className="text-5xl sm:text-7xl font-black text-gradient tracking-tighter leading-none">
            CATÁLOGO
          </h1>
          <span className="text-xl sm:text-2xl font-bold  tracking-[0.5em] mt-2">
            DE FILMES
          </span>
        </div>
        <ThemeToggle />
      </header>

      <main className="max-w-7xl mx-auto relative z-10">
        <MoviesClient initialMovies={movies} />
      </main>

      <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/5 dark:border-white/5 text-center text-xs font-bold text-[#37313c]/30 dark:text-[#e1f0f0]/30 uppercase tracking-widest relative z-10">
        &copy; 2026 Catálogo de Filmes Pro • Clean Architecture & Next.js
      </footer>
    </div>
  );
}
