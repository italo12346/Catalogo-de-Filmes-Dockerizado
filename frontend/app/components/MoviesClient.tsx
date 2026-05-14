"use client";

import * as React from "react";
import { Movie } from "../types/movie";
import { MovieCard } from "./movieCard";
import { MovieModal } from "./MovieModal";

interface MoviesClientProps {
  initialMovies: Movie[];
}

export function MoviesClient({ initialMovies }: MoviesClientProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null);

  const handleAddClick = () => {
    setSelectedMovie(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-black  tracking-tighter">Seus Filmes</h2>
        <button
          onClick={handleAddClick}
          className="bg-gradient-to-r from-[#f63090] to-[#4cc9f4] text-white font-black px-8 py-3 rounded-2xl shadow-lg hover:scale-105 transition-all uppercase tracking-widest text-sm"
        >
          + NOVO FILME
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialMovies.length > 0 ? (
          initialMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onEdit={handleEditClick} />
          ))
        ) : (
          <div className="col-span-full glass p-20 rounded-3xl text-center border-dashed border-white/20">
            <p className="text-2xl font-bold opacity-30">
              Nenhum filme cadastrado ainda.
            </p>
          </div>
        )}
      </div>

      <MovieModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        movie={selectedMovie}
      />
    </>
  );
}
